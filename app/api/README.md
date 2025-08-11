# Portfolio API Documentation

This directory contains the API routes for your portfolio application, built with Next.js App Router and Supabase.

## 🏗️ API Structure

```
app/api/
├── projects/
│   ├── route.ts          # GET (all), POST (create)
│   └── [id]/
│       └── route.ts      # GET (one), PUT (update), DELETE (remove)
├── experience/
│   ├── route.ts          # GET (all), POST (create)
│   └── [id]/
│       └── route.ts      # GET (one), PUT (update), DELETE (remove)
├── skills/
│   ├── route.ts          # GET (all), POST (create)
│   └── [id]/
│       └── route.ts      # GET (one), PUT (update), DELETE (remove)
└── strengths/
    ├── route.ts          # GET (all), POST (create)
    └── [id]/
        └── route.ts      # GET (one), PUT (update), DELETE (remove)
```

## 🔑 Environment Variables

Make sure you have these environment variables set in your `.env.local`:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## 📊 Database Tables

### Projects Table

```sql
CREATE TABLE projects (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  image TEXT,
  tech TEXT[],
  featured BOOLEAN DEFAULT false,
  liveUrl TEXT,
  githubUrl TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Experience Table

```sql
CREATE TABLE experience (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  company TEXT NOT NULL,
  location TEXT,
  period_start DATE,
  period_end DATE,
  period TEXT,
  description TEXT[],
  tech TEXT[],
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Skills Table

```sql
CREATE TABLE skills (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  category TEXT NOT NULL,
  name TEXT NOT NULL,
  icon TEXT,
  level INTEGER CHECK (level >= 0 AND level <= 100),
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

### Strengths Table

```sql
CREATE TABLE strengths (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  icon TEXT,
  title TEXT NOT NULL,
  description TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);
```

## 🚀 API Endpoints

### Projects

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

### Experience

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

### Skills

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

### Strengths

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

## 🔧 Error Handling

All endpoints return a consistent response format:

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

**HTTP Status Codes:**

- `200` - Success (GET, PUT, DELETE)
- `201` - Created (POST)
- `400` - Bad Request
- `404` - Not Found
- `500` - Internal Server Error

## 📝 Usage Examples

### Fetching All Projects

```typescript
const response = await fetch("/api/projects");
const { data, error } = await response.json();

if (error) {
  console.error("Error:", error);
} else {
  console.log("Projects:", data);
}
```

### Creating a New Project

```typescript
const newProject = {
  title: "My New Project",
  description: "A fantastic new project",
  tech: ["React", "TypeScript"],
  featured: true,
};

const response = await fetch("/api/projects", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(newProject),
});

const { data, error } = await response.json();
```

### Updating a Project

```typescript
const updates = {
  featured: false,
  description: "Updated description",
};

const response = await fetch(`/api/projects/${projectId}`, {
  method: "PUT",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify(updates),
});

const { data, error } = await response.json();
```

### Deleting a Project

```typescript
const response = await fetch(`/api/projects/${projectId}`, {
  method: "DELETE",
});

const { data, error } = await response.json();
```

## 🛡️ Security Considerations

- All endpoints use the Supabase anon key
- Consider implementing Row Level Security (RLS) in Supabase
- Add authentication middleware if needed
- Validate input data before processing
- Implement rate limiting for production use

## 🚀 Next Steps

1. **Install Supabase client:**

   ```bash
   npm install @supabase/supabase-js
   ```

2. **Set up environment variables** in `.env.local`

3. **Create database tables** in Supabase using the SQL above

4. **Test endpoints** using tools like Postman or Thunder Client

5. **Add authentication** if required for your use case

6. **Implement client-side hooks** for easy API consumption
