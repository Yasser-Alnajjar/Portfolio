import Link from "next/link";
import clsx from "clsx";
import { ReactNode } from "react";

export function Card({
  className,
  children,
}: {
  className: string;
  children: ReactNode;
}) {
  return <div className={clsx(className, "")}>{children}</div>;
}

Card.Link = function CardLink({
  children,
  href,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <Link href={href} className="text-red-700">
      <span className="text-red-700">{children}</span>
    </Link>
  );
};

Card.Title = function CardTitle({
  href,
  children,
}: {
  children: ReactNode;
  href: string;
}) {
  return (
    <h2 className="text-base font-semibold tracking-tight text-zinc-800 dark:text-zinc-100">
      {href ? <Card.Link href={href}>{children}</Card.Link> : children}
    </h2>
  );
};

Card.Description = function CardDescription({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <p className="relative z-10 mt-2 text-sm text-zinc-600 dark:text-zinc-400">
      {children}
    </p>
  );
};
