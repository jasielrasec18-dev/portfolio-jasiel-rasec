import type { Project } from '../../types';
import { projects } from '../../data/projects';
import './Projects.css';

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card">
      <div className="project-image">
        <img src={project.image} alt={project.title} loading="lazy" />
      </div>

      <div className="project-content">
        <h3>{project.title}</h3>
        <p>{project.description}</p>

        <div className="project-techs">
          {project.technologies.map((tech) => (
            <span key={tech}>{tech}</span>
          ))}
        </div>

        <div className="project-links">
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-btn">
              Ver Projeto
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="project-btn project-btn--secondary"
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
    <section className="projects-section" id="projetos">
      <div className="projects-container">
        <h2 className="section-title">
          <span className="bracket">&lt;</span>Meus <span className="highlight-mim">Projetos</span>
          <span className="bracket">/&gt;</span>
        </h2>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
