import React from 'react';
import { createRoot } from 'react-dom/client';
import { Droplets, ShieldCheck, Wrench, Star, Home, CheckCircle2, Sparkles, Phone, MapPin, CalendarDays, ArrowRight, Waves, Gauge, Filter } from 'lucide-react';
import "../style.css";

const img = (name) => `/${name}`;

function App() {
  const serviceAreas = ['San Francisco', 'Daly City', 'Burlingame', 'San Mateo', 'Redwood City', 'Palo Alto', 'San Jose', 'Marin County', 'East Bay'];
  const products = [
    { title: 'Whole-Home Filtration', text: 'Cleaner water from every tap with carbon filtration built for daily use.', image: 'whole-home-system.png' },
    { title: 'Water Softening', text: 'Reduce hard-water scale, dry skin, cloudy glassware, and appliance wear.', image: 'softener-system.png' },
    { title: 'Reverse Osmosis Drinking Water', text: 'Crisp, better-tasting drinking water from a dedicated kitchen faucet.', image: 'reverse-osmosis-system.png' }
  ];
  const installs = ['install-double-system.jpg', 'install-clean-wall.jpg', 'install-corner-system.jpg', 'install-single-garage.jpg', 'install-outdoor-brick.jpg'];

  return (
    <main>
      <header className="nav">
        <a className="brand" href="#top" aria-label="Golden Crest Water home">
         <img className="logo" src={img('logo-golden-crest.png')} alt="Golden Crest Water logo" />
        </a>
        <nav className="links">
          <a href="#systems">Systems</a>
          <a href="#process">Process</a>
          <a href="#gallery">Gallery</a>
          <a href="#areas">Areas</a>
          <a href="#quote" className="nav-cta">Get Quote</a>
        </nav>
      </header>

      <section id="top" className="hero">
        <div className="hero-copy">
          <div className="eyebrow"><Droplets size={17} /> Bay Area Whole-Home Water Treatment</div>
          <h1>Premium Water Filtration for Bay Area Homes</h1>
          <p className="lead">Golden Crest Water helps homeowners get cleaner, softer, better-tasting water with professionally installed filtration, softener, and reverse osmosis systems.</p>
          <div className="hero-actions">
            <a href="#quote" className="button primary">Request a Free Quote <ArrowRight size={18} /></a>
            <a href="#systems" className="button secondary">View Systems</a>
          </div>
          <div className="contact-info">
  <a href="tel:4155470434">(415) 547-0434</a>

  <a href="mailto:info@goldencrestwater.com">
    info@goldencrestwater.com
  </a>
</div>
          <div className="proof-row">
            <span><CheckCircle2 size={17} /> Free water consultation</span>
            <span><CheckCircle2 size={17} /> Local Bay Area service</span>
            <span><CheckCircle2 size={17} /> Installed by qualified pros</span>
          </div>
        </div>
        <div className="hero-media">
          <div className="image-card big"><img src={img('whole-home-system.png')} alt="Whole home water filtration system" /></div>
          <div className="floating-card top"><ShieldCheck size={20} /> Lifetime warranty options</div>
          <div className="floating-card bottom"><Sparkles size={20} /> Cleaner water from every tap</div>
        </div>
      </section>

      <section className="trust-grid" aria-label="Golden Crest Water benefits">
        <div><ShieldCheck /><h3>Strong Warranty Options</h3><p>Protection-focused system options built for long-term home use.</p></div>
        <div><Wrench /><h3>Professional Installation</h3><p>We coordinate clean installations with qualified local pros.</p></div>
        <div><Star /><h3>Premium Product Line</h3><p>Filtration, softening, and drinking-water solutions for your home.</p></div>
        <div><Home /><h3>Local Bay Area Service</h3><p>Built for homeowners across the Peninsula, SF, South Bay, and nearby areas.</p></div>
      </section>

      <section className="split problem">
        <div>
          <div className="eyebrow">Why homeowners upgrade</div>
          <h2>Bay Area water can still leave your home with problems.</h2>
          <p>Even when water meets municipal standards, many homeowners still deal with chlorine taste, mineral buildup, dry skin, cloudy dishes, and appliance scale.</p>
        </div>
        <div className="problem-list">
          <p><Waves /> Chlorine taste and odor</p>
          <p><Gauge /> Hard-water scale buildup</p>
          <p><Sparkles /> Dry skin and dull hair</p>
          <p><Filter /> Better water for drinking, cooking, and showers</p>
        </div>
      </section>

      <section id="systems" className="section">
        <div className="section-head">
          <div className="eyebrow">Water systems</div>
          <h2>Choose the right setup for your home.</h2>
          <p>Start with a free consultation. We’ll help match your water concerns, home size, and budget to the right system.</p>
        </div>
        <div className="product-grid">
          {products.map((p) => (
            <article className="product-card" key={p.title}>
              <div className="product-img"><img src={img(p.image)} alt={p.title} /></div>
              <h3>{p.title}</h3>
              <p>{p.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="process" className="section process-section">
        <div className="section-head compact">
          <div className="eyebrow">How it works</div>
          <h2>Simple process. Clean install. Better water.</h2>
        </div>
        <div className="steps">
          <div><span>01</span><h3>Free Consultation</h3><p>Tell us what you want to fix: taste, hardness, scale, shower feel, or drinking water.</p></div>
          <div><span>02</span><h3>System Recommendation</h3><p>We recommend a practical setup based on your home and goals.</p></div>
          <div><span>03</span><h3>Professional Install</h3><p>Your system is installed cleanly and placed where it fits best.</p></div>
          <div><span>04</span><h3>Enjoy Better Water</h3><p>Cleaner water for showers, laundry, cooking, and drinking.</p></div>
        </div>
      </section>

      <section id="gallery" className="section gallery-section">
        <div className="section-head">
          <div className="eyebrow">Install gallery</div>
          <h2>Real system layouts for modern homes.</h2>
          <p>Every home is different. Systems can be installed in garages, side yards, utility spaces, and other clean service areas.</p>
        </div>
        <div className="gallery">
          {installs.map((file, idx) => <img key={file} src={img(file)} alt={`Water filtration installation example ${idx + 1}`} />)}
        </div>
      </section>

      <section className="section why">
        <div className="why-card dark">
          <div className="eyebrow">Why Golden Crest Water</div>
          <h2>A more personal alternative to overpriced corporate water companies.</h2>
          <p>We’re focused on helping local homeowners get practical, premium water treatment without the confusing pitch, inflated pricing, or one-size-fits-all approach.</p>
        </div>
        <div className="why-card checklist">
          <p><CheckCircle2 /> Local, responsive communication</p>
          <p><CheckCircle2 /> Clear recommendations</p>
          <p><CheckCircle2 /> Whole-home and drinking-water options</p>
          <p><CheckCircle2 /> Built around trust, reviews, and long-term service</p>
        </div>
      </section>

      <section id="areas" className="section areas">
        <div className="section-head compact">
          <div className="eyebrow"><MapPin size={16} /> Service areas</div>
          <h2>Serving homeowners across the Bay Area.</h2>
        </div>
        <div className="area-tags">{serviceAreas.map(area => <span key={area}>{area}</span>)}</div>
      </section>

      <section id="quote" className="quote">
        <div>
          <div className="eyebrow">Free quote</div>
          <h2>Ready to upgrade your home’s water?</h2>
          <p>Request a free consultation and we’ll help you choose the right filtration, softening, or reverse osmosis setup for your home.</p>
        </div>
        <form className="quote-form">
          <label>Name<input placeholder="Your name" /></label>
          <label>Phone<input placeholder="Your phone number" /></label>
          <label>City<input placeholder="City" /></label>
          <label>What are you interested in?<select><option>Whole-home filtration</option><option>Water softener</option><option>Reverse osmosis drinking water</option><option>Not sure yet</option></select></label>
          <button type="button" className="button primary full"><CalendarDays size={18} /> Request Consultation</button>
          <small>Form placeholder. Replace this area with your GoHighLevel embed when ready.</small>
        </form>
      </section>

      <footer>
        <div><img src={img('logo-golden-crest.png')} alt="Golden Crest Water logo" /><p>Premium water filtration, softening, and drinking-water systems for Bay Area homeowners.</p></div>
        <div><strong>Golden Crest Water</strong><p>Bay Area, California</p><p><Phone size={14} /> Add your phone number</p></div>
      </footer>
    </main>
  );
}

createRoot(document.getElementById('root')).render(<App />);
