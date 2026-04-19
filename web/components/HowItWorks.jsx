import { howItWorks } from '../lib/constants.js';

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="horizontal-section">
      <div className="horizontal-intro">
        <div className="section-kicker">How it works</div>
        <h2 className="section-title">A five-stage AI pipeline, visualized.</h2>
      </div>
      <div className="how-grid">
        {howItWorks.map((step, index) => {
          const Icon = step.icon;
          return (
            <article className="process-card" key={step.title}>
              <span className="process-number">{String(index + 1).padStart(2, '0')}</span>
              <div className="process-icon">
                <Icon size={42} />
              </div>
              <h3>{step.title}</h3>
              <p>{step.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
