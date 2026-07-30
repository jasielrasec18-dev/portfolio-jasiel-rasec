import type { Project } from '../types';

export const projects: Project[] = [
  {
    id: 'annybeatriz-nutricionista',
    title: 'Anny Beatriz | Nutricionista',
    description:
      'Landing page sob medida para a nutricionista Anny Beatriz. Inclui apresentação profissional, áreas de atuação, etapas de atendimento e canais de contato. Layout responsivo e identidade visual leve.',
    image: '/images/anny-nutricionista.gif',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'IntersectionObsever API'],
    liveUrl: 'http://annybeatriznutricionista.com.br/',
    githubUrl: 'https://github.com/jasielrasec18-dev/anny-nutricionista',
  },
  {
    id: 'aura-studio',
    title: 'Aura Studio',
    description:
      'Landing page responsiva desenvolvida com HTML, CSS, JavaScript e GSAP, focada em animações suaves, performance e experiência visual moderna.',
    image: '/images/aura-studio.gif',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    liveUrl: 'https://jasielrasec18-dev.github.io/aura-studio/',
    githubUrl: 'https://github.com/jasielrasec18-dev/aura-studio/',
  },
  {
    id: 'super-mario-galaxy',
    title: 'Super Mario Galaxy',
    description:
      'Landing page "Super Mario Galaxy" desenvolvida com HTML, CSS, JavaScript e GSAP em versão responsiva, com foco em layout e interações visuais e modernas para uma experiência imersiva e divertida.',
    image: '/images/super-mario-galaxy.gif',
    technologies: ['HTML5', 'CSS3', 'JavaScript', 'GSAP'],
    liveUrl: 'https://super-mario-galaxy.vercel.app/',
    githubUrl: 'https://github.com/jasielrasec18-dev/super-mario-galaxy',
  }
];
