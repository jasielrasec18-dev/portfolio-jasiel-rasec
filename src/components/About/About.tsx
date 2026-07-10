import { technologies } from '../../data/technologies';
import './About.css';

function About() {
  return (
    <section className="about-section" id="sobre">
      <div className="about-container">
        <h2 className="section-title">
          <span className="bracket">&lt;</span>Sobre <span className="highlight-mim">Mim</span>
          <span className="bracket">/&gt;</span>
        </h2>

        <div className="about-main">
          <div className="about-image">
            <div className="image-circle">
              <img src="/images/profile.jfif" alt="Jasiel Rasec" />
            </div>
          </div>

          <div className="about-text">
            <p className="intro-text">
              Transformo ideias em aplicações modernas, escaláveis e com experiências digitais
              bem construídas.
            </p>

            <p className="main-text">
              Atuo como Desenvolvedor Full Stack com foco em <strong className="highlight-react">React</strong>,{' '}
              <strong className="highlight-nextjs">Next.js</strong>,{' '}
              <strong className="highlight-node">Node.js</strong> e{' '}
              <strong className="highlight-ts">TypeScript</strong>, desenvolvendo interfaces
              performáticas, APIs e aplicações responsivas com atenção especial à experiência do
              usuário, organização de código e qualidade visual.
            </p>

            <p className="outro-text">
              Estou em constante evolução no universo tech, criando projetos práticos, explorando
              novas tecnologias e aprimorando minhas habilidades para desenvolver soluções cada
              vez mais completas e profissionais.
            </p>

            <div className="technologies-section">
              <h3 className="tech-title">Tecnologias Principais</h3>
              <div className="tech-grid">
                {technologies.map((tech) => (
                  <div className="tech-item" key={tech.name}>
                    <img src={tech.icon} alt={tech.name} />
                    <span>{tech.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
