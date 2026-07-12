import { contactMethods } from "../../data/social";

function Contact() {
  return (
    <section
      className="bg-black px-4 py-20 text-white sm:px-6 sm:py-24 lg:px-8"
      id="contato"
    >
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-6">
        <h2 className="section-title">
          <span className="bracket">&lt;</span>Contato
          <span className="bracket">/&gt;</span>
        </h2>
        <p className="max-w-3xl text-center text-[0.98rem] leading-8 text-zinc-400">
          Vamos construir algo incrível juntos? Entre em contato através das
          minhas redes sociais.
        </p>

        <div className="mt-4 grid w-full gap-4 sm:grid-cols-2">
          {contactMethods.map((method) => (
            <a
              className="flex items-center gap-4 rounded-[18px] border border-neonPurple/30 bg-white/[0.03] p-4 text-decoration-none transition-all duration-300 hover:-translate-y-1 hover:border-neonMagenta/55 hover:bg-white/[0.06] hover:shadow-[0_18px_40px_rgba(204,102,255,0.12)] sm:p-5"
              href={method.href}
              target={method.href.startsWith("mailto:") ? undefined : "_blank"}
              rel="noopener noreferrer"
              key={method.name}
            >
              <div className="grid min-h-14 min-w-14 place-items-center rounded-[14px] border border-white/10 bg-white/[0.06]">
                <img src={method.icon} alt="" className="h-7 w-7" />
              </div>
              <div className="flex flex-col gap-1 text-white">
                <strong className="text-[0.95rem] font-bold">
                  {method.name}
                </strong>
                <span className="text-sm text-zinc-400">{method.handle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
