export interface IProject {
  title?: string;
  description?: string;
  image: string;
  tech?: Array<string>;
  featured?: boolean;
  liveurl: string | null;
}
