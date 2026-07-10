import { contactMethods } from '../../data/social';
import './Contact.css';

function Contact() {
  return (
    <section className="contact-section" id="contato">
      <div className="contact-container">
        <h2 className="section-title">
          <span className="bracket">&lt;</span>Contato<span className="bracket">/&gt;</span>
        </h2>
        <p className="contact-description">
          Vamos construir algo incrível juntos? Entre em contato através das minhas redes sociais.
        </p>

        <div className="contact-methods">
          {contactMethods.map((method) => (
            <a
              className="contact-card"
              href={method.href}
              target={method.href.startsWith('mailto:') ? undefined : '_blank'}
              rel="noopener noreferrer"
              key={method.name}
            >
              <div className="contact-icon">
                <img src={method.icon} alt="" />
              </div>
              <div className="contact-info">
                <strong>{method.name}</strong>
                <span>{method.handle}</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Contact;
