import { ArrowDownIcon } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { IResume } from "@/interfaces";
import { resume } from "@/data";

export function Resume() {
  return (
    <section className="rounded-2xl border border-zinc-100 p-6 dark:border-zinc-700/40 mt-10">
      <h2 className="flex items-center text-sm font-semibold text-zinc-900 dark:text-zinc-100">
        <span>
          <BriefcaseIcon className="h-6 w-6 flex-none" />
        </span>
        <span className="ml-3">Work Experience</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role) => (
          <Role role={role} key={role.company} />
        ))}
      </ol>
      <Link
        href={"/Front-End-Yasser-Alnajjar.pdf"}
        passHref
        download={"Front-End-Yasser-Alnajjar.pdf"}
      >
        <Button
          variant="secondary"
          className="group mt-6 w-full group-hover:bg-pink-600"
        >
          Download CV
          <ArrowDownIcon className="h-4 w-4 stroke-zinc-400 transition group-active:stroke-zinc-600 dark:group-hover:stroke-zinc-50 dark:group-active:stroke-zinc-50" />
        </Button>
      </Link>
    </section>
  );
}
function Role({ role }: { role: IResume }) {
  const { company, end, start, title } = role;
  return (
    <li className="flex gap-4">
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-zinc-900 dark:text-zinc-100">
          {company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-zinc-500 dark:text-zinc-400">{title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-zinc-400 dark:text-zinc-500"
          aria-label={`${start} until ${end}`}
        >
          <time dateTime={start}>{start}</time>{" "}
          <span aria-hidden="true">—</span> <time dateTime={end}>{end}</time>
        </dd>
      </dl>
    </li>
  );
}
function BriefcaseIcon({ ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      <path
        d="M2.75 9.75a3 3 0 0 1 3-3h12.5a3 3 0 0 1 3 3v8.5a3 3 0 0 1-3 3H5.75a3 3 0 0 1-3-3v-8.5Z"
        className="fill-zinc-100 stroke-zinc-400 dark:fill-zinc-100/10 dark:stroke-zinc-500"
      />
      <path
        d="M3 14.25h6.249c.484 0 .952-.002 1.316.319l.777.682a.996.996 0 0 0 1.316 0l.777-.682c.364-.32.832-.319 1.316-.319H21M8.75 6.5V4.75a2 2 0 0 1 2-2h2.5a2 2 0 0 1 2 2V6.5"
        className="stroke-zinc-400 dark:stroke-zinc-500"
      />
    </svg>
  );
}
