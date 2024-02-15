import { Card } from "@/components/Card";
import { IProject } from "@/interfaces";
import Image from "next/image";

async function getProjects() {
  const res = await fetch("http://localhost:3000/api/projects");
  const data = await res.json();
  return data;
}
export default async function Home() {
  const projects = await getProjects();

  return (
    <main className="container">
      <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3  lg:grid-cols-4">
        {projects.map((project: IProject) => (
          <Card key={project.name} className="w-[230px]">
            <div className="relative z-10 flex h-[150px] w-[230px]  items-center justify-center rounded-full  bg-white shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
              <Image
                src={project.logo}
                alt={project.name}
                className="h-full w-full rounded-xl"
              />
            </div>
            <span className="max-w-[219px]">
              <h2 className="mt-6 text-base font-semibold text-zinc-800 dark:text-zinc-100">
                <a target="_blank" href={project.link}>
                  {project.name}
                </a>
              </h2>
              <Card.Description>{project.description}</Card.Description>
              <p className="relative z-10 mt-6 flex text-sm font-medium text-zinc-400 transition group-hover:text-pink-600 dark:text-zinc-200">
                <span className="h-6 w-6 flex-none">
                  <LinkIcon />
                </span>
                <span className="ml-2">Live Preview</span>
              </p>
            </span>
          </Card>
        ))}
      </div>
    </main>
  );
}
function LinkIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-6 w-6 flex-none">
      <path
        d="M15.712 11.823a.75.75 0 1 0 1.06 1.06l-1.06-1.06Zm-4.95 1.768a.75.75 0 0 0 1.06-1.06l-1.06 1.06Zm-2.475-1.414a.75.75 0 1 0-1.06-1.06l1.06 1.06Zm4.95-1.768a.75.75 0 1 0-1.06 1.06l1.06-1.06Zm3.359.53-.884.884 1.06 1.06.885-.883-1.061-1.06Zm-4.95-2.12 1.414-1.415L12 6.344l-1.415 1.413 1.061 1.061Zm0 3.535a2.5 2.5 0 0 1 0-3.536l-1.06-1.06a4 4 0 0 0 0 5.656l1.06-1.06Zm4.95-4.95a2.5 2.5 0 0 1 0 3.535L17.656 12a4 4 0 0 0 0-5.657l-1.06 1.06Zm1.06-1.06a4 4 0 0 0-5.656 0l1.06 1.06a2.5 2.5 0 0 1 3.536 0l1.06-1.06Zm-7.07 7.07.176.177 1.06-1.06-.176-.177-1.06 1.06Zm-3.183-.353.884-.884-1.06-1.06-.884.883 1.06 1.06Zm4.95 2.121-1.414 1.414 1.06 1.06 1.415-1.413-1.06-1.061Zm0-3.536a2.5 2.5 0 0 1 0 3.536l1.06 1.06a4 4 0 0 0 0-5.656l-1.06 1.06Zm-4.95 4.95a2.5 2.5 0 0 1 0-3.535L6.344 12a4 4 0 0 0 0 5.656l1.06-1.06Zm-1.06 1.06a4 4 0 0 0 5.657 0l-1.061-1.06a2.5 2.5 0 0 1-3.535 0l-1.061 1.06Zm7.07-7.07-.176-.177-1.06 1.06.176.178 1.06-1.061Z"
        fill="currentColor"
      />
    </svg>
  );
}
