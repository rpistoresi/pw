export class Project {
  title: string;
  subtitle: string;
  img: { src: string, alt: string };
  content: string;
  actions: { prefix: string, icon: string, url: string }[];
  url: string;
}
