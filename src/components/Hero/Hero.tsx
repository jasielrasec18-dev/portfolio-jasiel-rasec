import { socialLinks } from '../../data/social';

function Hero() {
  return (
    <section className="flex min-h-[90vh] flex-col items-center justify-center bg-black px-8 py-16 text-center text-white md:px-8 lg:px-16" id="inicio">
      <span className="mb-2 text-lg tracking-[0.2em] text-neonCyan">Olá, eu sou</span>
      <h2 className="mb-2 font-display text-4xl font-black tracking-[0.12em] text-white drop-shadow-[0_0_20px_#ff2efc] sm:text-5xl lg:text-6xl">
        Jasiel<span className="text-neonPurple drop-shadow-[0_0_20px_#cc66ff]">Rasec</span>
      </h2>
      <h3 className="mb-4 text-xl text-white sm:text-2xl">
        Desenvolvedor <span className="text-neonCyan">Full Stack</span>
      </h3>
      <p className="mb-8 max-w-2xl text-base text-[var(--color-text-muted)] sm:text-lg">
        Apaixonado por tecnologia, especializado em criar experiências digitais modernas e
        eficientes. Trabalho com <strong>React</strong>, <strong>Node.js</strong> e outras
        tecnologias para entregar soluções inovadoras.
      </p>
      <a
        href="#projetos"
        className="mb-12 inline-block rounded-lg border border-neonMagenta bg-zinc-900 px-10 py-3 text-base font-semibold text-neonMagenta shadow-[0_0_10px_rgba(255,46,252,0.27)] transition-colors duration-200 hover:bg-neonMagenta hover:text-zinc-900"
      >
        Ver Projetos
      </a>

      <div className="flex justify-center gap-8 sm:gap-10">
        {socialLinks.map((social) => (
          <a
            key={social.name}
            href={social.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={social.ariaLabel}
            className="z-[1001]"
          >
            <img
              src={social.icon}
              alt={social.name}
              className="h-9 w-9 rounded-full bg-white p-2 shadow-[0_0_8px_rgba(255,46,252,0.27)] transition-all duration-200 hover:scale-110 hover:rotate-[-6deg] hover:bg-neonMagenta hover:brightness-110"
            />
          </a>
        ))}
      </div>

      <div className="mt-16 animate-bounce">
        <img src="/images/icons/mouse.svg" alt="" />
      </div>
    </section>
  );
}

export default Hero;
