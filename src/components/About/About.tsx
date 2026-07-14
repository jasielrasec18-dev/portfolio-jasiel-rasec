import { technologies } from "../../data/technologies";

function About() {
  return (
    <section
      className="bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
      id="sobre"
    >
      <div className="mx-auto max-w-7xl">
        <h2 className="relative mx-auto mb-12 text-center font-display text-2xl font-bold tracking-[0.08em] text-white sm:text-3xl">
          <span className="text-neonPurple drop-shadow-[0_0_8px_rgba(204,102,255,0.8)]">&lt;</span>
          Sobre <span className="text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.9)]">Mim</span>
          <span className="text-neonPurple drop-shadow-[0_0_8px_rgba(204,102,255,0.8)]">/&gt;</span>
          <span className="absolute left-1/2 bottom-[-1.1rem] h-[3px] w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-neonCyan to-neonMagenta" />
        </h2>

        <div className="mx-auto mt-12 grid w-full max-w-6xl gap-10 sm:mt-16 sm:gap-12 lg:grid-cols-[420px_1fr] lg:items-start lg:gap-16">
          <div className="flex justify-center lg:justify-start">
            <div className="flex h-[220px] w-[220px] items-center justify-center overflow-hidden rounded-full border border-neonPurple/40 bg-[radial-gradient(circle_at_center,_#101017_30%,_#040405_100%)] shadow-[0_0_80px_rgba(204,102,255,0.45)] sm:h-[280px] sm:w-[280px] md:h-[320px] md:w-[320px] lg:h-[420px] lg:w-[420px]">
              <img
                src="/images/profile.jfif"
                alt="Jasiel Rasec"
                className="h-full w-full object-cover"
              />
            </div>
          </div>

          <div className="flex w-full flex-col gap-6">
            <p className="m-0 text-[0.95rem] leading-7 text-zinc-300">
              Atuo como Desenvolvedor Full Stack com foco em{" "}
              <strong className="font-bold text-neonCyan">React</strong>,{" "}
              <strong className="font-bold text-neonPurple">Next.js</strong>,{" "}
              <strong className="font-bold text-neonMagenta">Node.js</strong> e{" "}
              <strong className="font-bold text-neonPurple">TypeScript</strong>,
              desenvolvendo interfaces performáticas, APIs e aplicações
              responsivas com atenção especial à experiência do usuário,
              organização de código e qualidade visual.
            </p>

            <p className="m-0 text-[0.95rem] leading-7 text-zinc-300">
              Estou em constante evolução no universo tech, criando projetos
              práticos, explorando novas tecnologias e aprimorando minhas
              habilidades para desenvolver soluções cada vez mais completas e
              profissionais.
            </p>

            <div className="mt-6 w-full">
              <h3 className="mb-6 text-xs font-bold uppercase tracking-[0.2em] text-zinc-500">
                Tecnologias Principais
              </h3>
              <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                {technologies.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex h-[130px] cursor-default flex-col items-center justify-center rounded-2xl border border-neonPurple/30 bg-[rgba(20,20,28,0.9)] px-3 py-5 text-center backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-neonPurple hover:bg-[rgba(20,20,28,1)] hover:shadow-[0_0_24px_rgba(204,102,255,0.35)]"
                  >
                    <img
                      src={tech.icon}
                      alt={tech.name}
                      className="mb-3 h-11 w-11 drop-shadow-[0_0_6px_rgba(204,102,255,0.3)] transition-transform duration-300 hover:scale-110"
                    />
                    <span className="text-sm font-semibold text-white">
                      {tech.name}
                    </span>
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
