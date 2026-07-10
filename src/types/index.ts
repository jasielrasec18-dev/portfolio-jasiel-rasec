export interface NavLink {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  icon: string;
  ariaLabel: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  year: string;
  image: string;
}

export interface ContactMethod {
  name: string;
  href: string;
  icon: string;
  handle: string;
}
