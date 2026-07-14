import { useRef } from "react";
import { certifications } from "../../data/certifications";

function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: "left" | "right") => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>(".certification-card");
    const amount = card ? card.offsetWidth + 21 : track.clientWidth * 0.6;
    track.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <h2 className="relative mx-auto mb-12 text-center font-display text-2xl font-bold tracking-[0.08em] text-white sm:text-3xl">
          <span className="text-neonPurple drop-shadow-[0_0_8px_rgba(204,102,255,0.8)]">&lt;</span>
          Certificações
          <span className="text-neonPurple drop-shadow-[0_0_8px_rgba(204,102,255,0.8)]">/&gt;</span>
          <span className="absolute left-1/2 bottom-[-1.1rem] h-[3px] w-20 -translate-x-1/2 rounded-full bg-gradient-to-r from-neonCyan to-neonMagenta" />
        </h2>

        <div className="mt-12 grid items-center gap-4 sm:mt-16 lg:grid-cols-[auto_1fr_auto]">
          <button
            type="button"
            className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/80 text-xl transition-all duration-300 hover:scale-105 hover:border-white/25 hover:bg-white/10 lg:flex"
            aria-label="Voltar certificados"
            onClick={() => scrollByCard("left")}
          >
            ←
          </button>

          <div
            ref={trackRef}
            className="flex gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {certifications.map((cert) => (
              <article
                key={cert.id}
                className="certification-card min-w-[320px] max-w-[520px] flex-[0_0_88%] overflow-hidden rounded-[24px] border border-neonPurple/20 bg-[rgba(10,10,20,0.95)] shadow-[0_28px_70px_rgba(0,0,0,0.25)] transition-all duration-300 hover:-translate-y-2 hover:border-neonPurple/40 hover:shadow-[0_35px_90px_rgba(184,77,255,0.1)] sm:flex-[0_0_60%] lg:flex-[0_0_46%]"
              >
                <img
                  src={cert.image}
                  alt={`Certificação ${cert.title}`}
                  loading="lazy"
                  className="h-[260px] w-full object-cover transition-transform duration-400 hover:scale-103"
                />
                <div className="p-7">
                  <h3 className="mb-3 text-2xl text-white">{cert.title}</h3>
                  <p className="text-[0.95rem] leading-8 text-zinc-400">
                    {cert.issuer} - {cert.year}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="hidden h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-black/80 text-xl transition-all duration-300 hover:scale-105 hover:border-white/25 hover:bg-white/10 lg:flex"
            aria-label="Avançar certificados"
            onClick={() => scrollByCard("right")}
          >
            →
          </button>
        </div>
      </div>
    </section>
  );
}

export default Certifications;
