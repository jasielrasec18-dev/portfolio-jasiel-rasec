import type { Project } from "../../types";
import { projects } from "../../data/projects";

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group overflow-hidden rounded-[24px] border border-white/10 bg-[rgba(10,10,20,0.95)] shadow-[0_24px_80px_rgba(0,0,0,0.35)] transition-all duration-300 hover:-translate-y-2 hover:border-neonMagenta/50 hover:shadow-[0_30px_100px_rgba(204,102,255,0.2)]">
      <div className="aspect-[16/10] w-full overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-400 group-hover:scale-104"
        />
      </div>

      <div className="p-5 sm:p-6 md:p-7">
        <h3 className="mb-3 font-display text-2xl text-white">
          {project.title}
        </h3>
        <p className="mb-6 leading-7 text-zinc-400">{project.description}</p>

        <div className="mb-5 flex flex-wrap gap-2 sm:mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="rounded-full border border-neonPurple/40 bg-neonPurple/10 px-3 py-1 text-sm text-white"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-gradient-to-r from-[#b84dff] to-[#6f00ff] px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:opacity-90"
            >
              Ver Projeto
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full border border-white/20 px-5 py-2.5 text-sm font-semibold text-white transition-transform duration-300 hover:-translate-y-0.5 hover:bg-white/10"
            >
              Ver no GitHub
            </a>
          )}
        </div>
      </div>
    </article>
  );
}

function Projects() {
  return (
    <section
      className="bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
      id="projetos"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="relative mx-auto mb-12 text-center font-display text-2xl font-bold tracking-[0.08em] text-white sm:text-3xl">
          <span className="text-neonPurple drop-shadow-[0_0_8px_rgba(204,102,255,0.8)]">&lt;</span>
          Meus <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">Projetos</span>
          <span className="text-neonPurple drop-shadow-[0_0_8px_rgba(204,102,255,0.8)]">/&gt;</span>
          <span className="absolute left-1/2 bottom-[-1.1rem] h-[3px] w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-neonCyan to-neonMagenta" />
        </h2>

        <div className="mt-12 grid gap-6 sm:mt-16 md:grid-cols-2 lg:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
