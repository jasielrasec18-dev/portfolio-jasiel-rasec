import { useRef } from 'react';
import { certifications } from '../../data/certifications';
import './Certifications.css';

function Certifications() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 'left' | 'right') => {
    const track = trackRef.current;
    if (!track) return;
    const card = track.querySelector<HTMLElement>('.certification-card');
    const amount = card ? card.offsetWidth + 21 : track.clientWidth * 0.6;
    track.scrollBy({ left: direction === 'left' ? -amount : amount, behavior: 'smooth' });
  };

  return (
    <section className="certifications-section">
      <div className="certifications-container">
        <h2 className="section-title">
          <span className="bracket">&lt;</span>Certificações<span className="bracket">/&gt;</span>
        </h2>

        <div className="certifications-carousel">
          <button
            type="button"
            className="certifications-arrow certifications-arrow--left"
            aria-label="Voltar certificados"
            onClick={() => scrollByCard('left')}
          />

          <div className="certifications-grid" ref={trackRef}>
            {certifications.map((cert) => (
              <article className="certification-card" key={cert.id}>
                <img src={cert.image} alt={`Certificação ${cert.title}`} loading="lazy" />
                <div className="certification-info">
                  <h3>{cert.title}</h3>
                  <p>
                    {cert.issuer} - {cert.year}
                  </p>
                </div>
              </article>
            ))}
          </div>

          <button
            type="button"
            className="certifications-arrow certifications-arrow--right"
            aria-label="Avançar certificados"
            onClick={() => scrollByCard('right')}
          />
        </div>
      </div>
    </section>
  );
}

export default Certifications;
