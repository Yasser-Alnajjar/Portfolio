import { StaticImageData } from "next/image";

export interface IProject {
  logo: StaticImageData;
  name: string;
  description: string;
  link: string;
}
export interface INavLink {
  href: string;
  name: string;
}
export interface IResume {
  company: string;
  title: string;
  start: string;
  end: string;
}
