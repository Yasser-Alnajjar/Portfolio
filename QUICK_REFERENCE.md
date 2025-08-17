# Quick Reference Guide

A concise reference for all public APIs, components, hooks, and utilities in the portfolio application.

## 🚀 Quick Start

```bash
# Install dependencies
bun install

# Run development server
bun dev

# Build for production
bun run build
```

## 📦 Imports

```typescript
// Main components
import { Hero, Navigation, Contact, About, Experience, Skills, Projects } from '@/components';

// UI components
import { Button, Card, Input, Badge, Dialog, Tooltip } from '@/components/atoms';

// Hooks
import { useToast, useLocalStorage, useIsMobile, useMediaQuery, useIntersectionObserver } from '@/hooks';

// Types
import { IHero, IProject, IExperience, ISkills, Strength } from '@/types';

// Utils
import { cn } from '@/lib/utils';
import { axios } from '@/lib/client';
import { supabase } from '@/lib/supabaseClient';
```

## 🎯 Components Quick Reference

### Main Components

| Component | Props | Description |
|-----------|-------|-------------|
| `Hero` | `data: IHero` | Hero section with animation |
| `Navigation` | None | Responsive navigation bar |
| `Contact` | `data: ContactItem[]` | Contact form and info |
| `About` | `data: any` | About section |
| `Experience` | `data: IExperience[]` | Experience timeline |
| `Skills` | `data: ISkills[]` | Skills showcase |
| `Projects` | `data: IProject[]` | Projects gallery |

### UI Components (Most Used)

| Component | Variants | Sizes | Description |
|-----------|----------|-------|-------------|
| `Button` | `default`, `outline`, `ghost`, `error` | `sm`, `md`, `lg`, `icon` | Versatile button |
| `Card` | - | - | Content container |
| `Badge` | `default`, `success`, `error`, `warning` | - | Status indicator |
| `Input` | - | - | Form input |
| `Dialog` | - | - | Modal dialog |
| `Tooltip` | - | - | Hover information |

### Form Components

```tsx
// Basic form setup
<div className="space-y-4">
  <div>
    <Label htmlFor="email">Email</Label>
    <Input type="email" id="email" placeholder="your@email.com" />
  </div>
  <div>
    <Label htmlFor="message">Message</Label>
    <Textarea id="message" placeholder="Your message..." rows={4} />
  </div>
  <Button type="submit">Send Message</Button>
</div>
```

## 🪝 Hooks Quick Reference

### useLocalStorage
```typescript
const [value, setValue, removeValue] = useLocalStorage('key', defaultValue);
const [grouped, setGrouped] = useLocalStorage('key', defaultValue, 'groupName');
```

### useToast
```typescript
const { toast } = useToast();
toast({ title: "Success!", variant: "success" });
toast({ title: "Error!", variant: "error" });
```

### useIsMobile
```typescript
const isMobile = useIsMobile(); // boolean
```

### useMediaQuery
```typescript
const isTablet = useMediaQuery({ query: 1024 }); // boolean
```

### useIntersectionObserver
```typescript
const { inView } = useIntersectionObserver(ref, 'animate-class', 0.5);
```

## 📊 API Routes Quick Reference

### Base URL
```
/api/
```

### Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/projects` | Get all projects |
| `POST` | `/projects` | Create project |
| `GET` | `/projects/[id]` | Get project by ID |
| `PUT` | `/projects/[id]` | Update project |
| `DELETE` | `/projects/[id]` | Delete project |
| `GET` | `/experience` | Get all experience |
| `POST` | `/experience` | Create experience |
| `GET` | `/skills` | Get all skills |
| `POST` | `/skills` | Create skill |
| `GET` | `/strengths` | Get all strengths |
| `POST` | `/strengths` | Create strength |

### API Usage
```typescript
// Fetch data
const response = await axios.get('/projects');
const { data, error } = response.data;

// Create data
const newProject = await axios.post('/projects', {
  title: "New Project",
  description: "Description",
  tech: ["React", "TypeScript"]
});
```

## 🏗️ TypeScript Types

### Core Types
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

interface IProject {
  title?: string;
  description?: string;
  image: string;
  tech?: string[];
  featured?: boolean;
  liveurl: string | null;
}

interface IExperience {
  title?: string | null;
  company?: string | null;
  location?: string | null;
  period?: string | null;
  description?: string[] | null;
  tech?: string[] | null;
}

interface ISkills {
  category?: string | null;
  skills?: SkillItem[] | null;
}

interface SkillItem {
  name?: string | null;
  icon?: string | null;
  level?: number | null;
}
```

## 🎨 Styling Quick Reference

### Common Classes
```typescript
// Layout
"flex items-center justify-between"
"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
"container mx-auto px-4 sm:px-6 lg:px-8"

// Spacing
"space-y-4" // vertical spacing
"space-x-4" // horizontal spacing
"p-4" // padding
"m-4" // margin

// Typography
"text-sm text-muted-foreground"
"text-lg font-semibold"
"text-xl font-bold leading-tight"

// Colors
"bg-primary text-primary-foreground"
"bg-card text-card-foreground"
"text-success" // green
"text-error" // red
"text-warning" // yellow
```

### cn() Utility
```typescript
import { cn } from '@/lib/utils';

className={cn(
  "base-classes",
  condition && "conditional-classes",
  className // user provided classes
)}
```

## 🔧 Common Patterns

### Loading States
```tsx
{loading ? (
  <div className="flex items-center space-x-4">
    <Skeleton className="h-12 w-12 rounded-full" />
    <div className="space-y-2">
      <Skeleton className="h-4 w-[250px]" />
      <Skeleton className="h-4 w-[200px]" />
    </div>
  </div>
) : (
  <ActualContent />
)}
```

### Error Handling
```tsx
const { toast } = useToast();

try {
  const result = await apiCall();
  toast({ title: "Success!", variant: "success" });
} catch (error) {
  toast({ 
    title: "Error!", 
    variant: "error",
    description: error.message 
  });
}
```

### Responsive Grid
```tsx
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
  {items.map(item => (
    <Card key={item.id}>
      <CardContent>{item.content}</CardContent>
    </Card>
  ))}
</div>
```

### Modal Pattern
```tsx
<Dialog>
  <DialogTrigger asChild>
    <Button>Open Modal</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Modal Title</DialogTitle>
    </DialogHeader>
    {/* Content */}
    <DialogFooter>
      <Button>Save</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

## 🌙 Theme System

### Theme Provider Setup
```tsx
// In root layout
<ThemeProvider defaultTheme="system" storageKey="app-theme">
  <App />
</ThemeProvider>
```

### Theme Toggle
```tsx
<ToggleTheme /> // Automatic sun/moon toggle
```

### Theme-aware Styles
```css
/* CSS variables automatically switch */
background-color: hsl(var(--background));
color: hsl(var(--foreground));
```

## 📱 Responsive Breakpoints

```css
/* Tailwind breakpoints */
sm: 640px   /* Small devices */
md: 768px   /* Medium devices */
lg: 1024px  /* Large devices */
xl: 1280px  /* Extra large devices */
2xl: 1536px /* 2X large devices */
```

### Responsive Usage
```tsx
<div className="text-sm sm:text-base lg:text-lg">
  Responsive text
</div>

<div className="grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
  Responsive grid
</div>
```

## 🔍 Debugging Tips

### Component Props
```tsx
// Check props in dev tools
console.log('Component props:', { data, loading, error });
```

### API Responses
```tsx
// Log API responses
const response = await axios.get('/api/projects');
console.log('API Response:', response.data);
```

### Hook States
```tsx
// Debug hook values
const isMobile = useIsMobile();
console.log('Is mobile:', isMobile);
```

## 🚨 Common Issues

### Hydration Mismatch
```tsx
// Use dynamic import for client-only components
import dynamic from 'next/dynamic';

const ClientOnlyComponent = dynamic(
  () => import('./ClientOnlyComponent'),
  { ssr: false }
);
```

### LocalStorage SSR
```tsx
// Hook already handles SSR safety
const [theme, setTheme] = useLocalStorage('theme', 'light');
```

### Missing Environment Variables
```bash
# Check .env.local exists with:
NEXT_PUBLIC_SUPABASE_URL=your_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_key
```

## 📚 Additional Resources

- [API Documentation](./API_DOCUMENTATION.md) - Comprehensive API guide
- [Component Catalog](./COMPONENT_CATALOG.md) - Detailed component reference
- [Tailwind CSS Docs](https://tailwindcss.com/docs) - Styling reference
- [Radix UI Docs](https://www.radix-ui.com/primitives/docs/overview/introduction) - Component primitives
- [Next.js Docs](https://nextjs.org/docs) - Framework documentation

---

*Keep this guide handy for quick development reference!*