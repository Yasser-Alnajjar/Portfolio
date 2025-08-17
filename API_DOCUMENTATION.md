# Portfolio API Documentation

A comprehensive guide to all public APIs, components, hooks, types, and utilities in the Next.js portfolio application.

## Table of Contents

1. [Overview](#overview)
2. [React Components](#react-components)
3. [Custom Hooks](#custom-hooks)
4. [TypeScript Types & Interfaces](#typescript-types--interfaces)
5. [API Routes](#api-routes)
6. [Utility Functions](#utility-functions)
7. [Client Libraries](#client-libraries)
8. [Usage Examples](#usage-examples)

## Overview

This portfolio application is built with:
- **Next.js 15** with App Router
- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Radix UI** components
- **Framer Motion** for animations
- **Supabase** for backend services

## React Components

### Main Components

#### Hero Component

**Location:** `components/Hero.tsx`

A hero section component that displays personal introduction with animated elements.

```typescript
interface IHero {
  id: string;
  greeting: string;
  name: string;
  title: string;
  description: string;
  cv_url: string;
  image_url: string;
}

export const Hero = ({ data }: { data: IHero }) => JSX.Element
```

**Props:**
- `data` (IHero): Hero section data containing personal information

**Features:**
- Animated text reveal with Framer Motion
- Responsive grid layout
- Profile image with floating elements
- Download CV and contact buttons
- Responsive design for mobile/desktop

**Usage Example:**
```tsx
import { Hero } from '@/components/Hero';

const heroData = {
  id: "1",
  greeting: "Hello, I'm",
  name: "John Doe",
  title: "Full Stack Developer",
  description: "I create digital experiences that matter.",
  cv_url: "/cv.pdf",
  image_url: "/profile.jpg"
};

<Hero data={heroData} />
```

#### Navigation Component

**Location:** `components/Navigation.tsx`

A responsive navigation component with scroll detection and section highlighting.

```typescript
export const Navigation = () => JSX.Element
```

**Features:**
- Sticky navigation with scroll detection
- Active section highlighting using Intersection Observer
- Mobile responsive with hamburger menu
- Smooth scroll to sections
- Theme toggle integration
- Backdrop blur effect when scrolled

**Usage Example:**
```tsx
import { Navigation } from '@/components/Navigation';

<Navigation />
```

#### Contact Component

**Location:** `components/Contact.tsx`

A contact section with contact information display and contact form.

```typescript
type ContactItem = {
  id: string;
  type: "contact" | "social";
  title: string;
  value: string;
  link: string;
};

export const Contact = ({ data }: { data: ContactItem[] }) => JSX.Element
```

**Props:**
- `data` (ContactItem[]): Array of contact items and social links

**Features:**
- Dynamic icon selection based on contact type
- Contact form with validation
- Social media links
- Responsive grid layout
- Animated cards

**Usage Example:**
```tsx
import { Contact } from '@/components/Contact';

const contactData = [
  {
    id: "1",
    type: "contact",
    title: "Email",
    value: "john@example.com",
    link: "mailto:john@example.com"
  },
  {
    id: "2",
    type: "social",
    title: "LinkedIn",
    value: "linkedin.com/in/johndoe",
    link: "https://linkedin.com/in/johndoe"
  }
];

<Contact data={contactData} />
```

### UI Components (Atoms)

#### Button Component

**Location:** `components/atoms/button.tsx`

A versatile button component with multiple variants and sizes.

```typescript
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>()
```

**Variants:**
- `default`: Primary button style
- `tint`: Gray tinted button
- `success`: Green success button
- `error`: Red error button  
- `warning`: Yellow warning button
- `outline`: Outlined button
- `secondary`: Secondary style
- `ghost`: Transparent button
- `link`: Link-styled button

**Sizes:**
- `default`: Standard size (h-10)
- `sm`: Small size (h-9)
- `md`: Medium size (h-8)
- `lg`: Large size (h-11)
- `icon`: Icon-only size

**Usage Example:**
```tsx
import { Button } from '@/components/atoms/button';

<Button variant="default" size="lg">
  Click me
</Button>

<Button variant="outline" size="sm" asChild>
  <Link href="/about">Learn More</Link>
</Button>
```

#### Card Component

**Location:** `components/atoms/card.tsx`

A flexible card component with header, content, and footer sections.

```typescript
const Card = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>()
const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>()
const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>()
const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>()
const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>()
const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>()
```

**Components:**
- `Card`: Main container with border and background
- `CardHeader`: Header section with padding
- `CardTitle`: Title heading with typography
- `CardDescription`: Subtitle with muted text
- `CardContent`: Main content area
- `CardFooter`: Footer section with flex layout

**Usage Example:**
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/atoms/card';

<Card>
  <CardHeader>
    <CardTitle>Project Title</CardTitle>
    <CardDescription>A brief description</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Main content goes here</p>
  </CardContent>
  <CardFooter>
    <Button>View Project</Button>
  </CardFooter>
</Card>
```

## Custom Hooks

### useLocalStorage Hook

**Location:** `hooks/useLocalStorage.ts`

A hook for managing localStorage with React state synchronization and optional grouping.

```typescript
function useLocalStorage<T>(
  key: string,
  initialValue: T,
  groupName?: string,
): [T, (value: T) => void, () => void]
```

**Parameters:**
- `key` (string): The localStorage key
- `initialValue` (T): Default value if key doesn't exist
- `groupName` (string, optional): Group name for nested storage

**Returns:**
- `[0]` (T): Current stored value
- `[1]` (function): Setter function to update value
- `[2]` (function): Remove function to clear value

**Features:**
- TypeScript generic support
- SSR-safe (handles window undefined)
- Cross-tab synchronization
- Optional grouping for nested objects
- Error handling with fallback to initial value

**Usage Example:**
```tsx
import { useLocalStorage } from '@/hooks/useLocalStorage';

function MyComponent() {
  const [theme, setTheme, removeTheme] = useLocalStorage('theme', 'light');
  const [userPrefs, setUserPrefs] = useLocalStorage('preferences', {}, 'ui');
  
  return (
    <div>
      <p>Current theme: {theme}</p>
      <button onClick={() => setTheme('dark')}>Set Dark Theme</button>
      <button onClick={removeTheme}>Reset Theme</button>
    </div>
  );
}
```

### useToast Hook

**Location:** `hooks/use-toast.ts`

A hook for displaying toast notifications with different variants.

```typescript
interface ToastProps extends ExternalToast, VariantProps<typeof toastVariants> {
  title: string;
}

export const useToast = () => {
  return { toast };
}
```

**Toast Variants:**
- `success`: Green success toast
- `error`: Red error toast
- `info`: Blue info toast
- `warning`: Yellow warning toast

**Usage Example:**
```tsx
import { useToast } from '@/hooks/use-toast';

function MyComponent() {
  const { toast } = useToast();
  
  const showSuccess = () => {
    toast({
      title: "Success!",
      variant: "success",
      description: "Operation completed successfully"
    });
  };
  
  const showError = () => {
    toast({
      title: "Error!",
      variant: "error",
      description: "Something went wrong"
    });
  };
  
  return (
    <div>
      <button onClick={showSuccess}>Show Success</button>
      <button onClick={showError}>Show Error</button>
    </div>
  );
}
```

### useIntersectionObserver Hook

**Location:** `hooks/useIntersectionObserver.ts`

A hook for observing element visibility and applying CSS classes.

```typescript
export const useIntersectionObserver = (
  ref: RefObject<Element | null>,
  className: string,
  threshold?: number
) => { inView: boolean }
```

**Parameters:**
- `ref` (RefObject): React ref to the element to observe
- `className` (string): CSS class to add when element is in view
- `threshold` (number, optional): Intersection threshold (0-1)

**Returns:**
- `inView` (boolean): Whether element is currently in view

**Usage Example:**
```tsx
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useRef } from 'react';

function AnimatedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { inView } = useIntersectionObserver(sectionRef, 'animate-fade-in', 0.3);
  
  return (
    <div 
      ref={sectionRef}
      className={`transition-opacity ${inView ? 'opacity-100' : 'opacity-0'}`}
    >
      <h2>This section animates when scrolled into view</h2>
    </div>
  );
}
```

### useMediaQuery Hook

**Location:** `hooks/use-media-query.ts`

A hook for responsive design based on screen width breakpoints.

```typescript
export function useMediaQuery({ query }: { query: number }): boolean
```

**Parameters:**
- `query` (number): Maximum width in pixels

**Returns:**
- `boolean`: True if screen width is less than query value

**Usage Example:**
```tsx
import { useMediaQuery } from '@/hooks/use-media-query';

function ResponsiveComponent() {
  const isMobile = useMediaQuery({ query: 768 });
  const isTablet = useMediaQuery({ query: 1024 });
  
  return (
    <div>
      {isMobile ? (
        <MobileView />
      ) : isTablet ? (
        <TabletView />
      ) : (
        <DesktopView />
      )}
    </div>
  );
}
```

### useIsMobile Hook

**Location:** `hooks/use-mobile.ts`

A convenience hook that specifically checks for mobile screen sizes.

```typescript
export const useIsMobile = (): boolean
```

**Returns:**
- `boolean`: True if screen width is less than 768px

**Usage Example:**
```tsx
import { useIsMobile } from '@/hooks/use-mobile';

function MobileAwareComponent() {
  const isMobile = useIsMobile();
  
  return (
    <nav className={isMobile ? 'mobile-nav' : 'desktop-nav'}>
      {/* Navigation content */}
    </nav>
  );
}
```

## TypeScript Types & Interfaces

### Project Types

**Location:** `types/projects.ts`

```typescript
export interface IProject {
  title?: string;
  description?: string;
  image: string;
  tech?: Array<string>;
  featured?: boolean;
  liveurl: string | null;
}
```

**Usage:**
```tsx
import { IProject } from '@/types/projects';

const project: IProject = {
  title: "My Portfolio",
  description: "A modern portfolio website",
  image: "/project-image.jpg",
  tech: ["React", "Next.js", "TypeScript"],
  featured: true,
  liveurl: "https://myportfolio.com"
};
```

### Experience Types

**Location:** `types/experience.ts`

```typescript
export interface IExperience {
  title?: string | null;
  company?: string | null;
  location?: string | null;
  period?: string | null;
  description?: Array<string> | null;
  tech?: Array<string> | null;
}
```

**Usage:**
```tsx
import { IExperience } from '@/types/experience';

const experience: IExperience = {
  title: "Senior Developer",
  company: "Tech Corp",
  location: "New York, NY",
  period: "2022 - Present",
  description: [
    "Led development of new features",
    "Mentored junior developers"
  ],
  tech: ["React", "Node.js", "PostgreSQL"]
};
```

### Skills Types

**Location:** `types/skills.ts`

```typescript
export interface SkillItem {
  name?: string | null;
  icon?: string | null;
  level?: number | null;
}

export interface ISkills {
  category?: string | null;
  skills?: SkillItem[] | null;
}
```

**Usage:**
```tsx
import { ISkills, SkillItem } from '@/types/skills';

const skillsData: ISkills = {
  category: "Frontend Technologies",
  skills: [
    {
      name: "React",
      icon: "⚛️",
      level: 95
    },
    {
      name: "TypeScript",
      icon: "🔷",
      level: 90
    }
  ]
};
```

### Strength Types

**Location:** `types/strength.ts`

```typescript
export interface Strength {
  icon?: string | null;
  title?: string | null;
  description?: string | null;
}
```

**Usage:**
```tsx
import { Strength } from '@/types/strength';

const strength: Strength = {
  icon: "💡",
  title: "Problem Solving",
  description: "Strong analytical and debugging skills"
};
```

### Hero Types

**Location:** `components/Hero.tsx`

```typescript
export interface IHero {
  id: string;
  greeting: string;
  name: string;
  title: string;
  description: string;
  cv_url: string;
  image_url: string;
}
```

## API Routes

The application provides RESTful API endpoints for managing portfolio data. All endpoints return a consistent response format.

### Response Format

**Success Response:**
```json
{
  "data": {...},
  "error": null
}
```

**Error Response:**
```json
{
  "data": null,
  "error": "Error message"
}
```

### Projects API

#### GET /api/projects
Fetch all projects, ordered by creation date (newest first).

**Response:**
```json
{
  "data": [
    {
      "id": "uuid",
      "title": "Project Title",
      "description": "Project description",
      "tech": ["React", "Next.js"],
      "featured": true,
      "liveUrl": "https://example.com"
    }
  ],
  "error": null
}
```

#### POST /api/projects
Create a new project.

**Request Body:**
```json
{
  "title": "New Project",
  "description": "Project description",
  "tech": ["React", "TypeScript"],
  "featured": false
}
```

#### GET /api/projects/[id]
Fetch a specific project by ID.

#### PUT /api/projects/[id]
Update a specific project by ID.

#### DELETE /api/projects/[id]
Delete a specific project by ID.

### Experience API

#### GET /api/experience
Fetch all experience entries, ordered by period start date (newest first).

#### POST /api/experience
Create a new experience entry.

**Request Body:**
```json
{
  "title": "Senior Developer",
  "company": "Tech Company",
  "location": "City, Country",
  "period": "2023 - Present",
  "description": ["Achievement 1", "Achievement 2"],
  "tech": ["React", "Node.js"]
}
```

#### GET /api/experience/[id]
Fetch a specific experience entry by ID.

#### PUT /api/experience/[id]
Update a specific experience entry by ID.

#### DELETE /api/experience/[id]
Delete a specific experience entry by ID.

### Skills API

#### GET /api/skills
Fetch all skills, ordered by category and name.

#### POST /api/skills
Create a new skill.

**Request Body:**
```json
{
  "category": "Frontend Technologies",
  "name": "React.js",
  "icon": "⚛️",
  "level": 95
}
```

#### GET /api/skills/[id]
Fetch a specific skill by ID.

#### PUT /api/skills/[id]
Update a specific skill by ID.

#### DELETE /api/skills/[id]
Delete a specific skill by ID.

### Strengths API

#### GET /api/strengths
Fetch all strengths, ordered by creation date.

#### POST /api/strengths
Create a new strength.

**Request Body:**
```json
{
  "icon": "Code",
  "title": "Problem Solving",
  "description": "Strong analytical skills"
}
```

#### GET /api/strengths/[id]
Fetch a specific strength by ID.

#### PUT /api/strengths/[id]
Update a specific strength by ID.

#### DELETE /api/strengths/[id]
Delete a specific strength by ID.

## Utility Functions

### cn Function

**Location:** `lib/utils.ts`

A utility function for merging CSS classes with Tailwind CSS support.

```typescript
export function cn(...inputs: ClassValue[]): string
```

**Parameters:**
- `...inputs` (ClassValue[]): CSS class names or conditional classes

**Returns:**
- `string`: Merged and deduplicated class names

**Usage Example:**
```tsx
import { cn } from '@/lib/utils';

function Button({ className, isActive, ...props }) {
  return (
    <button
      className={cn(
        "px-4 py-2 rounded",
        isActive && "bg-blue-500",
        className
      )}
      {...props}
    />
  );
}
```

## Client Libraries

### Axios Instance

**Location:** `lib/client/index.ts`

A pre-configured Axios instance for API calls.

```typescript
const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export { instance as axios };
```

**Usage Example:**
```tsx
import { axios } from '@/lib/client';

async function fetchProjects() {
  try {
    const response = await axios.get('/projects');
    return response.data;
  } catch (error) {
    console.error('Failed to fetch projects:', error);
    throw error;
  }
}
```

### Supabase Client

**Location:** `lib/supabaseClient.ts`

A configured Supabase client for database operations.

```typescript
export const supabase = createClient(supabaseUrl, supabaseAnonKey);
```

**Usage Example:**
```tsx
import { supabase } from '@/lib/supabaseClient';

async function fetchProjects() {
  const { data, error } = await supabase
    .from('projects')
    .select('*')
    .order('created_at', { ascending: false });
    
  if (error) {
    throw error;
  }
  
  return data;
}
```

## Usage Examples

### Complete Component Integration

```tsx
// pages/portfolio.tsx
import { useState, useEffect } from 'react';
import { Hero, Navigation, Contact } from '@/components';
import { useToast, useLocalStorage } from '@/hooks';
import { IHero } from '@/types';
import { axios } from '@/lib/client';

export default function Portfolio() {
  const [heroData, setHeroData] = useState<IHero | null>(null);
  const [theme, setTheme] = useLocalStorage('theme', 'light');
  const { toast } = useToast();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get('/hero');
        setHeroData(response.data.data);
      } catch (error) {
        toast({
          title: "Error",
          variant: "error",
          description: "Failed to load hero data"
        });
      }
    }
    
    fetchData();
  }, [toast]);

  if (!heroData) return <div>Loading...</div>;

  return (
    <div className={theme}>
      <Navigation />
      <Hero data={heroData} />
      <Contact data={contactData} />
    </div>
  );
}
```

### API Integration with Error Handling

```tsx
// hooks/useProjects.ts
import { useState, useEffect } from 'react';
import { IProject } from '@/types';
import { axios } from '@/lib/client';
import { useToast } from '@/hooks';

export function useProjects() {
  const [projects, setProjects] = useState<IProject[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  const fetchProjects = async () => {
    try {
      setLoading(true);
      const response = await axios.get('/projects');
      setProjects(response.data.data);
    } catch (error) {
      toast({
        title: "Error",
        variant: "error",
        description: "Failed to fetch projects"
      });
    } finally {
      setLoading(false);
    }
  };

  const createProject = async (projectData: Omit<IProject, 'id'>) => {
    try {
      const response = await axios.post('/projects', projectData);
      setProjects(prev => [response.data.data, ...prev]);
      toast({
        title: "Success",
        variant: "success",
        description: "Project created successfully"
      });
    } catch (error) {
      toast({
        title: "Error",
        variant: "error",
        description: "Failed to create project"
      });
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return {
    projects,
    loading,
    fetchProjects,
    createProject
  };
}
```

### Responsive Layout with Hooks

```tsx
// components/ResponsiveGrid.tsx
import { useMediaQuery, useIsMobile } from '@/hooks';
import { Card, CardContent } from '@/components/atoms';

interface ResponsiveGridProps {
  items: Array<{ id: string; title: string; content: string }>;
}

export function ResponsiveGrid({ items }: ResponsiveGridProps) {
  const isMobile = useIsMobile();
  const isTablet = useMediaQuery({ query: 1024 });
  
  const getGridCols = () => {
    if (isMobile) return 'grid-cols-1';
    if (isTablet) return 'grid-cols-2';
    return 'grid-cols-3';
  };

  return (
    <div className={`grid gap-4 ${getGridCols()}`}>
      {items.map(item => (
        <Card key={item.id}>
          <CardContent>
            <h3 className="font-semibold">{item.title}</h3>
            <p className="text-muted-foreground">{item.content}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
```

---

## Environment Variables

Required environment variables for the application:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
NEXT_PUBLIC_API_BASE_URL=http://localhost:3000/api
```

## Development Setup

1. **Install dependencies:**
   ```bash
   bun install
   ```

2. **Set up environment variables:**
   ```bash
   cp .env.example .env.local
   # Edit .env.local with your values
   ```

3. **Run development server:**
   ```bash
   bun dev
   ```

4. **Build for production:**
   ```bash
   bun run build
   ```

## Contributing

When adding new components or hooks:

1. Export them from the appropriate index files
2. Add TypeScript interfaces for props
3. Include JSDoc comments for complex functions
4. Add usage examples in this documentation
5. Ensure responsive design compatibility
6. Test with different theme variants

---

*This documentation is automatically generated and should be kept up to date with code changes.*