import { useState } from 'react';
import { navLinks } from '../../data/navigation';
import './Header.css';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className="site-header">
      <h1 className="logo">
        <a href="/" title="<DEV/>">
          <img src="/images/logo/logo.svg" alt="<DEV/>" />
        </a>
      </h1>

      <button
        type="button"
        className="menu-icon"
        aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
        aria-expanded={isMenuOpen}
        onClick={() => setIsMenuOpen((open) => !open)}
      >
        <img src="/images/icons/hamburguer.svg" alt="" />
      </button>

      <nav className={`nav-container ${isMenuOpen ? 'nav-container--open' : ''}`}>
        <nav className="site-nav" aria-label="Menu principal">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href} onClick={closeMenu}>
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </nav>
    </header>
  );
}

export default Header;
