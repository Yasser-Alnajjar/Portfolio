import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: "#0d6efd",
        indigo: "#6610f2",
        pink: "#d63384",
        danger: "#dc3545",
        orange: "#fd7e14",
        warning: "#ffc107",
        green: "#198754",
        teal: "#20c997",
        cyan: "#0dcaf0",
        gray: "#6c757d",
        black: "#1a1c1f",
        white: "#ffffff",
      },
      container: {
        center: true,
        padding: {
          DEFAULT: '1rem',
          sm: '2rem',
          lg: '4rem',
          xl: '5rem',
          '2xl': '6rem',
        },
      },
    },
  },
  darkMode: 'class',
  plugins: [],
};

export default config;