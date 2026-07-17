const phoneDisplay = "913-309-6613";
const phoneHref = "tel:9133096613";
const email = "thomas@savasten.com";

const services = [
  "Garage cleanouts",
  "Furniture removal",
  "Appliance pickup",
  "Rental cleanouts",
  "Yard debris hauling",
  "Light demolition debris",
];

const steps = [
  {
    title: "Send a photo",
    text: "Text a few pictures or call with the details. JayHaul gives you a clear next step without the runaround.",
  },
  {
    title: "Get a simple quote",
    text: "You get practical pricing and a pickup window that works for your schedule.",
  },
  {
    title: "Point and it goes",
    text: "The crew lifts, loads, sweeps up, and leaves the space ready to use again.",
  },
];

const trustPoints = [
  "Fast local scheduling",
  "Clean, respectful hauling",
  "Clear communication",
  "Homes, rentals, garages, and offices",
];

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <nav className="nav" aria-label="Primary navigation">
          <a className="brand" href="#top" aria-label="JayHaul Junk Removal home">
            <span className="brand-mark" aria-hidden="true">
              JH
            </span>
            <span>
              <span className="brand-name">JayHaul</span>
              <span className="brand-service">Junk Removal</span>
            </span>
          </a>
          <div className="nav-links">
            <a href="#services">Services</a>
            <a href="#process">Process</a>
            <a href="#contact">Contact</a>
          </div>
          <a className="nav-call" href={phoneHref}>
            {phoneDisplay}
          </a>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Modern local junk removal</p>
            <h1>From Clutter to Clean.</h1>
            <p className="hero-lede">
              JayHaul clears garages, furniture, appliances, rental leftovers,
              and unwanted piles with straightforward pricing and respectful
              service.
            </p>
            <div className="hero-actions">
              <a className="button primary" href={phoneHref}>
                Call or Text
              </a>
              <a className="button secondary" href={`mailto:${email}`}>
                Email JayHaul
              </a>
            </div>
            <dl className="quick-facts" aria-label="JayHaul highlights">
              <div>
                <dt>Phone</dt>
                <dd>{phoneDisplay}</dd>
              </div>
              <div>
                <dt>Email</dt>
                <dd>{email}</dd>
              </div>
              <div>
                <dt>Best for</dt>
                <dd>Cleanouts, pickups, and clutter resets</dd>
              </div>
            </dl>
          </div>

          <div className="hero-visual">
            <img
              className="hero-photo"
              src="/og.png"
              alt="JayHaul Junk Removal truck outside a clean garage"
            />
            <div className="visual-card">
              <strong>Text a photo for a quick estimate.</strong>
              <span>{phoneDisplay}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section service-band" id="services">
        <div className="section-heading">
          <p className="eyebrow">What We Haul</p>
          <h2>Clear space without making it complicated.</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service}>
              <span aria-hidden="true" />
              <h3>{service}</h3>
              <p>
                Easy pickup for the bulky, awkward, or just plain unwanted stuff
                taking over your space.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="section split-section" id="process">
        <div>
          <p className="eyebrow">How It Works</p>
          <h2>Point, approve, and it is gone.</h2>
          <p className="section-lede">
            The whole experience should feel calm and organized. You know what
            is happening, when the crew is coming, and what it will take to get
            your space back.
          </p>
        </div>
        <div className="steps">
          {steps.map((step, index) => (
            <article className="step" key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section trust-section">
        <div className="trust-panel">
          <div>
            <p className="eyebrow">Why JayHaul</p>
            <h2>Trustworthy, quick, and careful with your property.</h2>
          </div>
          <div className="trust-list">
            {trustPoints.map((point) => (
              <div key={point}>{point}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section contact-section" id="contact">
        <div className="contact-copy">
          <p className="eyebrow">Ready for a cleaner space?</p>
          <h2>Book your junk removal quote.</h2>
          <p className="section-lede">
            Call, text, or email JayHaul with what needs to go. Photos help get
            you a faster estimate.
          </p>
        </div>
        <div className="contact-card">
          <a className="contact-row" href={phoneHref}>
            <span>Call or Text</span>
            <strong>{phoneDisplay}</strong>
          </a>
          <a className="contact-row" href={`mailto:${email}`}>
            <span>Email</span>
            <strong>{email}</strong>
          </a>
          <a className="button primary full" href={phoneHref}>
            Start with a Text
          </a>
        </div>
      </section>

      <footer className="footer">
        <a className="brand" href="#top" aria-label="JayHaul Junk Removal home">
          <span className="brand-mark" aria-hidden="true">
            JH
          </span>
          <span>
            <span className="brand-name">JayHaul</span>
            <span className="brand-service">Junk Removal</span>
          </span>
        </a>
        <p>From Clutter to Clean.</p>
      </footer>
    </main>
  );
}
