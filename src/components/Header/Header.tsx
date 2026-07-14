import { useState } from "react";
import { Menu, X } from "lucide-react";
import { navLinks } from "../../data/navigation";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="sticky top-0 left-0 z-999 flex w-full items-center justify-between border-b border-white/10 bg-black/85 px-4 py-3 backdrop-blur-[10px] shadow-[0_0_30px_rgba(0,0,0,0.3)] sm:px-6 md:px-8 lg:px-12">
      <h1 className="flex items-center">
        <a href="/" title="<DEV/>">
          <img
            src="/images/logo/logo.svg"
            alt="<DEV/>"
            className="block h-11"
          />
        </a>
      </h1>

      <button
        type="button"
        className="relative z-1001 flex h-9.5 w-9.5 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white transition-all duration-200 hover:bg-white/10 md:hidden"
        aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      <nav
        className={`fixed right-0 top-0 z-1000 flex h-screen w-60 flex-col items-start gap-8 bg-black/95 p-24 pr-6 transition-all duration-300 md:static md:h-auto md:w-auto md:flex-row md:items-center md:justify-end md:bg-transparent md:p-0 md:pr-0 ${isMenuOpen ? "translate-x-0" : "translate-x-full md:translate-x-0"}`}
        aria-label="Menu principal"
      >
        <ul className="flex w-full flex-col gap-6 text-center md:w-auto md:flex-row md:items-center md:justify-end md:gap-8">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={closeMenu}
                className="block border-b border-neonMagenta/70 py-1 text-base font-semibold tracking-[0.03em] text-(--color-text) transition-colors duration-200 hover:text-neonMagenta md:border-none md:p-0"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
