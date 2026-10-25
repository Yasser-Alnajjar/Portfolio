import type { Metadata } from "next";
import "./globals.css";
import { Inter, Inter_Tight, JetBrains_Mono } from "next/font/google";
import { ThemeProvider, Toaster } from "@components";

export const metadata: Metadata = {
  title: "Yasser Alnajjar - Front-End Developer (React.js - Next.js)",
  description:
    "Dynamic Next.js Developer with a proven track record in enhancing user experience and optimizing application performance. Expert in React.js, Next.js, and modern front-end technologies.",
};

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const interTight = Inter_Tight({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  variable: "--font-inter-tight",
});
const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500"],
  variable: "--font-jetbrains",
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
