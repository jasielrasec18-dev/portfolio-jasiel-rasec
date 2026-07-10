import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'super-mario-galaxy',
    title: 'Super Mario Galaxy',
    description:
      'Landing page "Super Mario Galaxy" em versão responsiva, com foco em layout e interações visuais para uma experiência imersiva e divertida.',
    image: '/images/landing-page-super-mario.JPG',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    liveUrl: 'https://super-mario-galaxy.vercel.app/',
    githubUrl: 'https://github.com/jasielrasec18-dev/super-mario-galaxy',
  },
  {
    id: 'aura-studio',
    title: 'Aura Studio',
    description:
      'Landing page responsiva desenvolvida com HTML, CSS, JavaScript e GSAP, focada em animações suaves, performance e experiência visual moderna.',
    image: '/images/aura-studio.JPG',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    liveUrl: 'https://jasielrasec18-dev.github.io/aura-studio/',
    githubUrl: 'https://github.com/jasielrasec18-dev/aura-studio/',
  },
];
