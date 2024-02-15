import { navLinks } from "@/data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-32 flex-none">
      <div className="border-t border-zinc-100 pb-16 pt-10 dark:border-zinc-700/40">
        <div className="container flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-sm font-medium text-zinc-800 dark:text-zinc-200">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                className="transition hover:text-primary dark:hover:text-primary"
                href={link.href}
              >
                {link.name}
              </Link>
            ))}
          </div>
          <p className="text-sm text-zinc-400 dark:text-zinc-500">
            By <span className="text-primary">Yasser Al Najjar</span>, &copy;{" "}
            {new Date().getFullYear()} All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
