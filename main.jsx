import React from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

const phone = '415-378-0179'
const cleanPhone = phone.replaceAll('-', '')
const img = (name) => `/${name}`

const products = [
  { title: 'Complete Home System Package', tag: 'Best Seller', image: 'whole-home-system.png', description: 'A full-home water treatment solution built to improve water quality at the main point of entry, helping your entire home enjoy cleaner, softer water.', bullets: ['Whole-home treatment','Cleaner showers','Better taste and smell','Appliance protection'] },
  { title: 'Water Softener with Chlorine Filtration', tag: 'Family Favorite', image: 'softener-system.png', description: 'Designed to reduce hardness and chlorine so your water feels better on skin, hair, dishes, laundry, and plumbing fixtures.', bullets: ['Softer skin and hair','Less scale buildup','Cleaner dishes','Lower soap usage'] },
  { title: 'Tankless Reverse Osmosis Drinking System', tag: 'Drinking Water Upgrade', image: 'reverse-osmosis-system.png', description: 'A sleek under-sink drinking water system for crisp, clean water straight from the tap.', bullets: ['Great-tasting water','Under-sink design','Daily drinking water','Modern filtration'] }
]

const installs = [
  ['install-single-garage.jpg','Whole home water filtration installation'],
  ['install-double-system.jpg','Dual tank whole home water system'],
  ['install-outdoor-brick.jpg','Outdoor whole home water filtration install'],
  ['install-clean-wall.jpg','Clean garage water filtration setup'],
  ['install-corner-system.jpg','Bay Area home water softener installation'],
  ['kitchen-clean-water.jpg','Clean drinking water from kitchen faucet']
]

const areas = ['San Francisco','Daly City','San Mateo','Burlingame','Oakland','Berkeley','San Rafael','Mill Valley','San Jose','Walnut Creek','Fremont','Palo Alto']
const faqs = [
  ['Do you service all of the Bay Area?', 'Yes. We serve homes across San Francisco and most Bay Area cities within roughly 60 to 90 minutes of San Francisco.'],
  ['Is installation included?', 'Most systems can be professionally installed by a licensed local installer. Exact installation details depend on your home setup and system selection.'],
  ['Will this help with hard water?', 'Yes. Whole-home softening and filtration systems are designed to reduce hardness, chlorine taste and smell, sediment, and common water quality issues depending on the selected package.'],
  ['How fast can I get a quote?', 'Submit a quote request or call directly and we will help you figure out the right setup for your home as quickly as possible.']
]

function CTA({children, secondary=false}) {
  return <a className={secondary ? 'btn secondary' : 'btn'} href={secondary ? `tel:${cleanPhone}` : '#quote'}>{children}</a>
}

function App() {
  return <main>
    <div className="topbar">Save up to 40% on complete home water systems for Bay Area homeowners</div>

    <header className="nav">
      <a className="brand" href="#"><span className="drop">💧</span><span><b>Honest Water Co</b><small>San Francisco Dealer</small></span></a>
      <nav><a href="#products">Products</a><a href="#areas">Service Areas</a><a href="#process">How It Works</a><a href="#gallery">Gallery</a><a href="#faq">FAQs</a></nav>
      <a className="phone" href={`tel:${cleanPhone}`}>{phone}</a>
    </header>

    <section className="trust">
      {['Lifetime Warranty','Professional Installation','Trusted Product Line','Family-Owned Service'].map((x,i)=><div className="trust-card" key={x}><span>{['🛡️','🔧','⭐','🏠'][i]}</span><b>{x}</b><small>{['Clean water protection for life','Installed by local licensed pros','Dealer-backed systems and support','Local Bay Area care and follow-up'][i]}</small></div>)}
    </section>

    <section className="hero">
      <div className="hero-copy">
        <div className="pill">Bay Area whole-home water treatment</div>
        <h1>Trusted Water Treatment & Filtration Services in San Francisco</h1>
        <p>Get cleaner, softer, better-tasting water throughout your entire home with Honest Water Co systems, now available for San Francisco and Bay Area homeowners through your local dealer.</p>
        <div className="actions"><CTA>Get My Free Quote →</CTA><CTA secondary>Call {phone}</CTA></div>
        <small>Serving homes within roughly 60–90 minutes of San Francisco.</small>
      </div>
      <div className="hero-card"><img src={img('honest-water-ro-system.png')} alt="Honest Water reverse osmosis system" /></div>
    </section>

    <section id="products" className="section gray">
      <p className="eyebrow">Our most popular systems</p>
      <h2>Whole-home water solutions built for Bay Area families.</h2>
      <p className="center">From showers to drinking water, we help homeowners choose the right system for their home, budget, and water quality goals.</p>
      <div className="cards">{products.map(p=><article className="card" key={p.title}><span className="tag">{p.tag}</span><div className="product-img"><img src={img(p.image)} alt={p.title}/></div><h3>{p.title}</h3><p>{p.description}</p><ul>{p.bullets.map(b=><li key={b}>✓ {b}</li>)}</ul><CTA>Request Quote</CTA></article>)}</div>
    </section>

    <section id="process" className="section split"><div><p className="eyebrow left">Simple process</p><h2>From quick quote to clean water.</h2><p>We keep the process simple, local, and transparent so you can make a confident decision without pressure.</p></div><div className="steps">{['Request a Quote','Match the System','Install & Enjoy'].map((s,i)=><div className="step" key={s}><b>0{i+1}</b><h3>{s}</h3><p>{['Tell us about your home and what you want improved.','We recommend the right whole-home or drinking water setup.','A professional installer completes the setup and you enjoy better water.'][i]}</p></div>)}</div></section>

    <section id="areas" className="area"><div><h2>Serving San Francisco and the greater Bay Area.</h2><p>We help homeowners across the Bay Area within roughly an hour to an hour and a half from San Francisco.</p></div><div className="area-grid">{areas.map(a=><span key={a}>{a}</span>)}</div></section>

    <section id="gallery" className="section">
      <div className="title-row"><div><p className="eyebrow left">Install gallery</p><h2>Real installs. Clean setups. Better water.</h2></div><CTA>Schedule My Install</CTA></div>
      <div className="gallery">{installs.map(([src,alt])=><img key={src} src={img(src)} alt={alt}/>)}</div>
    </section>

    <section id="faq" className="section gray"><p className="eyebrow">FAQs</p><h2>Common questions answered.</h2><div className="faq">{faqs.map(([q,a])=><div key={q}><h3>{q}</h3><p>{a}</p></div>)}</div></section>

    <section id="quote" className="quote"><div><p className="eyebrow left">Quick quote</p><h2>Ready to enjoy cleaner water?</h2><p>Call now or request a free quote and we’ll help you choose the right system for your home.</p><a className="btn light" href={`tel:${cleanPhone}`}>{phone}</a></div><form><input placeholder="Full name"/><input placeholder="Phone number"/><input placeholder="City"/><select><option>What are you interested in?</option><option>Whole-home filtration</option><option>Water softener</option><option>Reverse osmosis drinking water</option><option>Not sure yet</option></select><textarea placeholder="Tell us about your water concerns"/><button type="button">Submit Quote Request</button></form></section>

    <footer><b>Honest Water Co SF</b><p>Family-owned local dealer helping San Francisco and Bay Area homeowners upgrade to cleaner, softer, better-tasting water.</p><a href={`tel:${cleanPhone}`}>{phone}</a></footer>
    <a className="mobile-call" href={`tel:${cleanPhone}`}>Call for Quick Quote</a>
  </main>
}

createRoot(document.getElementById('root')).render(<App />)
