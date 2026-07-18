const phoneDisplay = "913-309-6613";
const phoneHref = "tel:9133096613";
const email = "thomas@savasten.com";

const locations = [
  { name: "Lawrence", note: "Primary local service area" },
  { name: "Baldwin City", note: "Nearby cleanouts and pickups" },
  { name: "Overland Park", note: "Johnson County service" },
  { name: "Olathe", note: "Scheduled junk removal" },
  { name: "Kansas City metro", note: "Quoted by distance and load size" },
];

const pricingRows = [
  { load: "Minimum load", amount: "1/8 truck", price: "$100-$150" },
  { load: "Quarter truck", amount: "1/4 truck", price: "$250" },
  { load: "Three-eighths truck", amount: "3/8 truck", price: "$350" },
  { load: "Half truck", amount: "1/2 truck", price: "$450" },
  { load: "Five-eighths truck", amount: "5/8 truck", price: "$550" },
  { load: "Three-quarter truck", amount: "3/4 truck", price: "$650" },
  { load: "Full truck", amount: "10-foot truck", price: "$800" },
];

const extraFees = [
  "Mattresses and box springs",
  "Refrigerators, freezers, and AC units",
  "Long carries over about 75 feet",
  "Upstairs removal with no elevator",
  "Tires, electronics, hot tubs, pianos, and safes",
  "Heavy construction debris, concrete, brick, or shingles",
];

const steps = [
  {
    title: "Send a photo",
    text: "Text a few pictures or call with the details. JayHaul gives you a clear next step without the runaround.",
  },
  {
    title: "Get a volume quote",
    text: "Pricing is based on how much space your junk takes in the truck, with the final quote approved before anything is loaded.",
  },
  {
    title: "Point and it goes",
    text: "The crew lifts, loads, sweeps up, and leaves the space ready to use again.",
  },
];

const trustPoints = [
  "Quote before loading",
  "Before photos on every job",
  "Fast local scheduling",
  "Moving blankets, dollies, and straps",
];

const damageSteps = [
  "Before photos of walls, floors, door frames, stairs, and driveways",
  "Work authorization before removal begins",
  "Clear documentation of existing damage",
  "Careful equipment use for bulky or awkward items",
];

const notAccepted = [
  "Paint, fuel, oil, pesticides, pool chemicals, solvents, propane tanks, fireworks, ammunition, or explosives",
  "Medical waste, needles, biohazards, human waste, or dead animals",
  "Asbestos, old insulation, asbestos siding, asbestos flooring, or popcorn ceiling material",
  "Unknown barrels, unknown liquids, unknown powders, or sealed mystery containers",
  "Large amounts of dirt, wet drywall, concrete, shingles, or liquids unless quoted separately",
  "Cars or anything requiring special licensing",
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
            <a href="#locations">Locations</a>
            <a href="#pricing">Pricing</a>
            <a href="#process">Process</a>
            <a href="#safety">Safety</a>
            <a href="#contact">Contact</a>
          </div>
          <details className="mobile-menu">
            <summary aria-label="Open navigation menu">
              <span />
              <span />
              <span />
            </summary>
            <div className="mobile-menu-panel">
              <a href="#locations">Locations</a>
              <a href="#pricing">Pricing</a>
              <a href="#process">Process</a>
              <a href="#safety">Safety</a>
              <a href="#contact">Contact</a>
              <a className="mobile-menu-call" href={phoneHref}>
                Call or Text {phoneDisplay}
              </a>
            </div>
          </details>
        </nav>

        <div className="hero-grid">
          <div className="hero-copy">
            <p className="eyebrow">Modern local junk removal</p>
            <h1>From Clutter to Clean.</h1>
            <p className="hero-lede">
              JayHaul clears garages, furniture, appliances, rental leftovers,
              and unwanted piles with simple volume-based pricing and a final
              quote before anything is loaded.
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
                <dt>Starting at</dt>
                <dd>$100</dd>
              </div>
            </dl>
          </div>

        </div>
      </section>

      <section className="section location-band" id="locations">
        <div className="section-heading">
          <p className="eyebrow">Service Area</p>
          <h2>Local junk removal across Lawrence and the surrounding metro.</h2>
          <p className="section-lede">
            JayHaul handles cleanouts and pickups throughout these nearby
            communities, with clear quotes before loading starts.
          </p>
        </div>
        <div className="location-grid">
          {locations.map((location) => (
            <article className="location-card" key={location.name}>
              <span aria-hidden="true" />
              <h3>{location.name}</h3>
              <p>{location.note}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section pricing-section" id="pricing">
        <div className="pricing-intro">
          <div>
            <p className="eyebrow">Simple Pricing</p>
            <h2>Junk removal starting at $100.</h2>
            <p className="section-lede">
              JayHaul prices by truck volume, so the quote is easy to
              understand. The price is based on how much space your items take
              in a 10-foot truck, roughly 400 cubic feet.
            </p>
          </div>
          <div className="quote-card">
            <strong>
              "We price based on how much space your junk takes in the truck.
              I&apos;ll give you an exact quote before I load anything."
            </strong>
            <span>Simple, professional, and no surprise math.</span>
          </div>
        </div>

        <div className="pricing-table-wrap" aria-label="Volume-based pricing">
          <table className="pricing-table">
            <thead>
              <tr>
                <th scope="col">Amount of Truck</th>
                <th scope="col">Load Size</th>
                <th scope="col">Price</th>
              </tr>
            </thead>
            <tbody>
              {pricingRows.map((row) => (
                <tr key={row.amount}>
                  <td>{row.load}</td>
                  <td>{row.amount}</td>
                  <td>{row.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="pricing-note">
          <strong>Example:</strong>
          <span>
            Everything here will take about half the truck, so it&apos;s $450
            total. That includes loading, hauling, and disposal.
          </span>
        </div>

        <div className="extra-grid">
          <div>
            <p className="eyebrow">Possible Add-Ons</p>
            <h2>Only a few items may cost extra.</h2>
          </div>
          <div className="fee-list">
            {extraFees.map((fee) => (
              <div key={fee}>{fee}</div>
            ))}
          </div>
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

      <section className="section safety-section" id="safety">
        <div className="section-heading">
          <p className="eyebrow">Property Protection</p>
          <h2>Careful removal starts before the first item moves.</h2>
          <p className="section-lede">
            On-site damage is one of the biggest risks in junk removal. JayHaul
            keeps the process documented, clear, and careful from the start.
          </p>
        </div>
        <div className="safety-grid">
          {damageSteps.map((step) => (
            <article className="safety-card" key={step}>
              <span aria-hidden="true" />
              <p>{step}</p>
            </article>
          ))}
        </div>
        <div className="auth-panel">
          <h3>Work authorization</h3>
          <p>
            Before work begins, customers approve the items to be removed, the
            final quote, and the route needed to move items through tight
            spaces. Existing damage can be documented before loading starts.
          </p>
        </div>
      </section>

      <section className="section no-go-section">
        <div className="no-go-copy">
          <p className="eyebrow">What We Do Not Take</p>
          <h2>Some items are not safe, legal, or practical to haul.</h2>
          <p className="section-lede">
            If an item is hazardous, unknown, extremely heavy, or requires
            special handling, JayHaul may decline it or quote it separately.
          </p>
        </div>
        <div className="no-go-list">
          {notAccepted.map((item) => (
            <div key={item}>{item}</div>
          ))}
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
            <strong className="email-value">{email}</strong>
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
