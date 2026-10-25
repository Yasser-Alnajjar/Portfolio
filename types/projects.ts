export interface IProject {
  title?: string;
  description?: string;
  image: string;
  tech?: Array<string>;
  featured?: boolean;
  featured_order?: number;
  liveurl: string | null;
}
