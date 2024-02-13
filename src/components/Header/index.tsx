"use client";
import Link from "next/link";
import ThemeToggle from "../ToggleTheme";
import clsx from "clsx";
import { usePathname } from "next/navigation";
import { Fragment, ReactNode } from "react";
import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon, SidebarCloseIcon } from "lucide-react";
import { navLinks } from "@/data";

function NavItem({ href, children }: { href: string; children: ReactNode }) {
  let isActive = usePathname() === href;

  return (
    <Link
      href={href}
      className={clsx(
        "relative block px-3 py-2 transition",
        isActive
          ? "text-primary dark:text-primary"
          : "hover:text-primary dark:hover:text-primary"
      )}
    >
      {children}
      {isActive && (
        <span className="absolute inset-x-1 -bottom-px h-px bg-gradient-to-r from-primary/0 via-primary/40 to-primary/0 dark:from-primary/0 dark:via-primary/40 dark:to-primary/0" />
      )}
    </Link>
  );
}

function DesktopNavigation({ ...props }) {
  return (
    <nav {...props}>
      <ul className=" flex whitespace-nowrap rounded-full bg-white/90 px-3 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 ">
        {navLinks.map((link) => (
          <li key={link.href}>
            <NavItem href={link.href}>{link.name}</NavItem>
          </li>
        ))}
      </ul>
    </nav>
  );
}
function MobileNavigation({ ...props }) {
  return (
    <Popover {...props}>
      <Popover.Button className="group flex items-center rounded-full bg-white/90 px-4 py-2 text-sm font-medium text-zinc-800 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:text-zinc-200 dark:ring-white/10 dark:hover:ring-white/20 dark:hover:text-primary hover:text-primary">
        Menu
        <ChevronDownIcon
          size={18}
          className="ml-3 stroke-zinc-500 group-hover:stroke-primary dark:group-hover:stroke-primary"
        />
      </Popover.Button>
      <Transition.Root>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <Popover.Overlay className="fixed inset-0 z-50 bg-zinc-800/40 backdrop-blur-sm dark:bg-black/80" />
        </Transition.Child>
        <Transition.Child
          as={Fragment}
          enter="duration-150 ease-out"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="duration-150 ease-in"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          <Popover.Panel
            focus
            className="fixed inset-x-4 top-8 z-50 origin-top rounded-3xl bg-white p-8 ring-1 ring-zinc-900/5 dark:bg-zinc-900 dark:ring-zinc-800"
          >
            <div className="flex flex-row-reverse items-center justify-between">
              <Popover.Button aria-label="Close menu" className="-m-1 p-1">
                <SidebarCloseIcon className="h-6 w-6 text-zinc-500 dark:text-zinc-400" />
              </Popover.Button>
              <h2 className="text-sm font-medium text-zinc-600 dark:text-zinc-400">
                Navigation
              </h2>
            </div>
            <nav className="mt-6">
              <ul className="-my-2 divide-y divide-zinc-100 text-base text-zinc-800 dark:divide-zinc-100/5 dark:text-zinc-300 ">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <Popover.Button
                      as={Link}
                      href={link.href}
                      className="block py-2"
                    >
                      {link.name}
                    </Popover.Button>
                  </li>
                ))}
              </ul>
            </nav>
          </Popover.Panel>
        </Transition.Child>
      </Transition.Root>
    </Popover>
  );
}
export function Header() {
  return (
    <header className="relative z-50 flex justify-center gap-5 py-5">
      <MobileNavigation className="md:hidden" />
      <DesktopNavigation className="hidden md:block" />
      <ThemeToggle />
    </header>
  );
}
