import './Footer.css';

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <div className="footer-separator" />
        <div className="footer-content">
          <p>
            Desenvolvido com <span className="footer-heart">♥</span> e muito{' '}
            <span className="footer-code">código</span>
          </p>
          <p>© {year} Jasiel Rasec. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
