import { ArrowRight, Mouse } from "lucide-react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { type ElementType } from "react";
import { socialLinks } from "../../data/social";

const iconMap: Record<string, ElementType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Email: FaEnvelope,
};

function Hero() {
  return (
    <section
      className="flex min-h-[90vh] flex-col items-center justify-center bg-black px-4 py-20 text-center text-white sm:px-6 md:px-8 lg:px-16"
      id="inicio"
    >
      <span className="mb-3 text-sm uppercase tracking-[0.28em] text-neonCyan sm:text-base">
        Olá, eu sou
      </span>
      <h2 className="mb-3 font-display text-4xl font-black tracking-[0.15em] text-white drop-shadow-[0_0_20px_rgba(255,46,252,0.95)] sm:text-5xl md:text-5xl lg:text-6xl">
        Jasiel
        <span className="ml-2 text-neonPurple drop-shadow-[0_0_20px_rgba(204,102,255,0.85)]">
          Rasec
        </span>
      </h2>
      <h3 className="mb-4 text-lg text-white sm:text-xl md:text-2xl">
        Desenvolvedor <span className="text-neonCyan">Full Stack</span>
      </h3>
      <p className="mb-8 max-w-2xl px-2 text-sm leading-7 text-zinc-400 sm:px-0 sm:text-base md:text-lg">
        Apaixonado por tecnologia, especializado em criar experiências digitais
        modernas e eficientes. Trabalho com <strong>React</strong>,{" "}
        <strong>Node.js</strong> e outras tecnologias para entregar soluções
        inovadoras.
      </p>
      <a
        href="#projetos"
        className="mb-10 inline-flex items-center gap-2 rounded-lg border border-neonMagenta bg-zinc-900 px-8 py-3 text-sm font-semibold text-neonMagenta shadow-[0_0_10px_rgba(255,46,252,0.27)] transition-colors duration-200 hover:bg-neonMagenta hover:text-zinc-900 sm:px-10 sm:text-base"
      >
        Ver Projetos
        <ArrowRight className="h-4 w-4" />
      </a>

      <div className="flex justify-center gap-6 sm:gap-8 md:gap-10">
        {socialLinks.map((social) => {
          const Icon = iconMap[social.name] ?? FaEnvelope;

          return (
            <a
              key={social.name}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.ariaLabel}
              className="z-1001"
            >
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white p-2 text-zinc-900 shadow-[0_0_8px_rgba(255,46,252,0.27)] transition-all duration-200 hover:scale-110 hover:-rotate-6 hover:bg-neonMagenta hover:text-white sm:h-11 sm:w-11">
                <Icon className="h-5 w-5" />
              </div>
            </a>
          );
        })}
      </div>

      <div className="mt-12 animate-bounce sm:mt-14 md:mt-16">
        <Mouse className="h-8 w-8 text-neonCyan sm:h-9 sm:w-9" />
      </div>
    </section>
  );
}

export default Hero;
