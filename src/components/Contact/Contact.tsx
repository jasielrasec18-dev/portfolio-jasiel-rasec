import { type ElementType } from "react";
import { FaEnvelope, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { contactMethods } from "../../data/social";

const iconMap: Record<string, ElementType> = {
  GitHub: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
  Email: FaEnvelope,
};

function Contact() {
  return (
    <section
      className="bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
      id="contato"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
        <h2 className="relative mx-auto mb-3 text-center font-display text-2xl font-bold tracking-[0.08em] text-white sm:text-3xl">
          <span className="text-neonPurple drop-shadow-[0_0_8px_rgba(204,102,255,0.8)]">
            &lt;
          </span>
          Contato
          <span className="text-neonPurple drop-shadow-[0_0_8px_rgba(204,102,255,0.8)]">
            /&gt;
          </span>
          <span className="absolute left-1/2 bottom-[-1.1rem] h-0.75 w-20 -translate-x-1/2 rounded-full bg-linear-to-r from-neonCyan to-neonMagenta" />
        </h2>
        <p className="max-w-3xl text-center text-[0.98rem] leading-8 text-zinc-400">
          Vamos construir algo incrível juntos? Entre em contato através das
          minhas redes sociais.
        </p>

        <div className="mt-4 grid w-full gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => {
            const Icon = iconMap[method.name] ?? FaEnvelope;

            return (
              <a
                className="flex items-center gap-4 rounded-[18px] border border-neonPurple/30 bg-white/3 p-4 text-decoration-none transition-all duration-300 hover:-translate-y-1 hover:border-neonMagenta/55 hover:bg-white/6 hover:shadow-[0_18px_40px_rgba(204,102,255,0.12)] sm:p-5"
                href={method.href}
                target={
                  method.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel="noopener noreferrer"
                key={method.name}
              >
                <div className="grid min-h-14 min-w-14 place-items-center rounded-[14px] border border-white/10 bg-white/6 text-white">
                  <Icon className="h-7 w-7" />
                </div>
                <div className="flex flex-col gap-1 text-white">
                  <strong className="text-[0.95rem] font-bold">
                    {method.name}
                  </strong>
                  <span className="text-sm text-zinc-400">{method.handle}</span>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Contact;
