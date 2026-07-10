import { socialLinks } from '../../data/social';
import './Hero.css';

function Hero() {
  return (
    <section className="hero-section" id="inicio">
      <span className="hero-intro">Olá, eu sou</span>
      <h2 className="hero-title">
        Jasiel<span className="neon">Rasec</span>
      </h2>
      <h3 className="hero-role">
        Desenvolvedor <span className="highlight">Full Stack</span>
      </h3>
      <p className="hero-desc">
        Apaixonado por tecnologia, especializado em criar experiências digitais modernas e
        eficientes. Trabalho com <strong>React</strong>, <strong>Node.js</strong> e outras
        tecnologias para entregar soluções inovadoras.
      </p>
      <a href="#projetos" className="hero-btn">
        Ver Projetos
      </a>

      <div className="hero-socials">
        {socialLinks.map((social) => (
          <a key={social.name} href={social.href} target="_blank" rel="noopener noreferrer" aria-label={social.ariaLabel}>
            <img src={social.icon} alt={social.name} />
          </a>
        ))}
      </div>

      <div className="hero-mouse">
        <img src="/images/icons/mouse.svg" alt="" />
      </div>
    </section>
  );
}

export default Hero;
