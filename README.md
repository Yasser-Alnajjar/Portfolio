# Graphic Designer Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. Designed specifically for Graphic Designer Mohamed Bakkar Abdel WahaA to showcase his creative skills, projects, and professional experience.

## 🎨 Design Features

- **Dark Theme** with Vanilla Latte accent color (#F5E6D3)
- **Modern Typography** using Poppins font family
- **12-Column Grid Layout** for easy development and maintenance
- **Smooth Animations** powered by Framer Motion
- **Fully Responsive** design for all devices
- **Professional Layout** optimized for job applications and client presentations

## 🚀 Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Poppins (Google Fonts)
- **UI Components**: Radix UI primitives

## 📁 Project Structure

```
Mohamed-protfolio/
├── app/
│   ├── globals.css          # Global styles and Tailwind imports
│   ├── layout.tsx           # Root layout component
│   └── page.tsx             # Main page with all sections
├── components/
│   ├── Navigation.tsx       # Navigation bar component
│   ├── Hero.tsx            # Home section with introduction
│   ├── About.tsx           # About section with bio and strengths
│   ├── Skills.tsx          # Technical skills showcase
│   ├── Experience.tsx      # Professional experience timeline
│   ├── Contact.tsx         # Contact form and information
│   └── atoms/              # Reusable UI components
├── hooks/                   # Custom React hooks
├── lib/                     # Utility functions
├── public/                  # Static assets (logo.jpg, yasser.jpg)
├── styles/                  # Additional CSS files
├── tailwind.config.js       # Tailwind configuration
├── package.json             # Dependencies and scripts
└── README.md               # This file
```

## 📚 Documentation

This project includes comprehensive documentation for all APIs, components, and functions:

- **[API Documentation](./API_DOCUMENTATION.md)** - Complete guide to all public APIs, components, hooks, types, and utilities
- **[Component Catalog](./COMPONENT_CATALOG.md)** - Detailed catalog of all UI components with props and usage examples  
- **[Quick Reference](./QUICK_REFERENCE.md)** - Concise reference guide for quick development

### Documentation Highlights

- **50+ UI Components** with full TypeScript support
- **Custom React Hooks** for common functionality
- **RESTful API endpoints** for data management
- **TypeScript interfaces** for all data structures
- **Usage examples** and best practices
- **Responsive design patterns**

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or bun

### Installation

1. **Clone the repository**

   ```bash
   git clone <your-repo-url>
   cd Mohamed-protfolio
   ```

2. **Install dependencies**

   ```bash
   npm install
   # or
   yarn install
   # or
   bun install
   ```

3. **Run the development server**

   ```bash
   npm run dev
   # or
   yarn dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🎯 Customization Guide

### 1. Personal Information

Update the following files with your information:

- **Hero Section** (`components/Hero.tsx`): Replace "Mohamed Bakkar Abdel WahaA" with your actual name
- **About Section** (`components/About.tsx`): Update bio, strengths, and background
- **Experience Section** (`components/Experience.tsx`): Replace with your work history
- **Contact Section** (`components/Contact.tsx`): Update contact details and social links

### 2. Profile Picture

Replace the placeholder in `components/Hero.tsx` with your actual profile picture:

```typescript
// Replace the logo.jpg with your profile picture
<Image
  src="/your-profile-picture.jpg"
  alt="Your Name"
  fill
  className="object-cover"
  priority
/>
```

### 3. Skills

Update the `skillCategories` array in `components/Skills.tsx`:

```typescript
const skillCategories = [
  {
    category: "Design Tools",
    skills: [
      { name: "Adobe Photoshop", icon: "🎨", level: 95 },
      // Add your skills here
    ],
  },
];
```

### 4. Experience

Edit the `experiences` array in `components/Experience.tsx`:

```typescript
const experiences = [
  {
    title: "Your Job Title",
    company: "Company Name",
    location: "City, Country",
    period: "Start Date - End Date",
    description: [
      "Your job description...",
      // Add more descriptions
    ],
    tech: ["Skill 1", "Skill 2", "Skill 3"],
  },
];
```

### 5. Contact Information

Update the contact details in `components/Contact.tsx`:

```typescript
const contactInfo = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    value: "your.email@example.com",
    link: "mailto:your.email@example.com",
  },
  // Add more contact methods
];
```

### 6. Colors and Styling

Modify the color palette in `tailwind.config.js`:

```javascript
colors: {
  'vanilla-latte': '#F5E6D3', // Your accent color
  'dark-bg': '#0A0A0A',       // Background color
  // ... other colors
}
```

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

## 🎨 Design System

### Colors

- **Primary Background**: #0A0A0A (Dark)
- **Surface**: #1A1A1A (Dark Surface)
- **Cards**: #2A2A2A (Dark Card)
- **Accent**: #F5E6D3 (Vanilla Latte)
- **Text Primary**: #FFFFFF (White)
- **Text Secondary**: #A0A0A0 (Gray)

### Typography

- **Font Family**: Poppins
- **Weights**: 400 (Regular), 500 (Medium), 700 (Bold)
- **Headings**: 2xl-5xl sizes
- **Body**: Base size with relaxed line height

### Spacing

- **Section Padding**: 4rem (mobile) / 6rem (desktop)
- **Grid Gap**: 1rem (mobile) / 1.5rem (desktop)
- **Card Padding**: 1.5rem

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

The project can be deployed to any platform that supports Next.js:

- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📞 Support

If you have any questions or need help customizing the portfolio, please open an issue on GitHub.

---

**Happy designing! 🎨✨**
