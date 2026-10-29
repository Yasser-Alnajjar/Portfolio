import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider, Toaster } from "@components";

export const metadata: Metadata = {
  title: "Yasser Alnajjar - Front-End Developer (React.js - Next.js)",
  description:
    "Dynamic Next.js Developer with a proven track record in enhancing user experience and optimizing application performance. Expert in React.js, Next.js, and modern front-end technologies.",
};

const inter = localFont({
  src: "../fonts/Inter.ttf",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const interTight = localFont({
  src: "../fonts/InterTight.ttf",
  variable: "--font-inter-tight",
  weight: "100 900",
  display: "swap",
});

const jetbrains = localFont({
  src: "../fonts/JetBrainsMono.ttf",
  variable: "--font-jetbrains",
  weight: "100 800",
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`dark ${inter.variable} ${interTight.variable} ${jetbrains.variable}`}
      suppressHydrationWarning
    >
      <body className="bg-background font-sans text-foreground antialiased">
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <Toaster richColors />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
