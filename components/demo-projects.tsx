 "use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import styles from "./demo-projects.module.css";


const demoLinks = [
  ["Business Website", "/demos/business-website"],
  ["E-commerce", "/demos/ecommerce"],
  ["Salon Booking", "/demos/salon-booking"],
  ["CRM Dashboard", "/demos/crm"],
] as const;

function DemoNav({ active }: { active: string }) {
  return (
    <header className={styles.nav}>
      <Link href="/" className={styles.brand}>NAVRIVA <span>DEMO STUDIO</span></Link>
      <nav>{demoLinks.map(([label, href]) => <Link key={href} className={active === href ? styles.active : ""} href={href}>{label}</Link>)}</nav>
      <Link className={styles.navCta} href="/#contact">Discuss a project ↗</Link>
    </header>
  );
}

function DemoFooter() {
  return <footer className={styles.footer}>Concept demonstration by <b>NAVRIVA TECHNOLOGY</b> · Building Tomorrow’s Digital World.</footer>;
}

export function BusinessWebsiteDemo() {
  const [sent, setSent] = useState(false);
  return <main className={styles.page}>
    <DemoNav active="/demos/business-website" />
    <section className={styles.businessHero}>
      <div className={styles.heroCopy}>
        <span className={styles.kicker}>YOUR BUSINESS, ONLINE</span>
        <h1>Make a great first impression.</h1>
        <p>A clean, confident website concept for a growing local business. Introduce your services, build trust and turn visitors into enquiries.</p>
        <Link  className={styles.goldButton} href="#enquiry">Request a consultation ↗</Link>
        <div className={styles.trustLine}><span>✓ Mobile-friendly</span><span>✓ Clear services</span><span>✓ Easy enquiries</span></div>
      </div>
      <div className={styles.businessVisual}>
        <div className={styles.visualTop}><span>STUDIO / 01</span><span>EST. 2026</span></div>
        <div className={styles.visualShape}><span>GROW<br/>WITH<br/><i>CONFIDENCE.</i></span></div>
        <div className={styles.visualBottom}><b>Thoughtful service.</b><span>Designed around your goals.</span></div>
      </div>
    </section>
    <section className={styles.section}>
      <div className={styles.sectionHead}><span className={styles.kicker}>WHAT WE OFFER</span><h2>Everything your customer needs to know.</h2></div>
      <div className={styles.threeGrid}>
        {["A clear introduction","Services at a glance","A simple way to connect"].map((x, i) => <article className={styles.infoCard} key={x}><small>0{i+1}</small><h3>{x}</h3><p>{["Tell your story with a strong headline and helpful business information.","Explain your offerings with concise descriptions and clear calls to action.","Make it easy for interested visitors to send an enquiry or request a callback."][i]}</p></article>)}
      </div>
    </section>
    <section className={styles.enquiryBand} id="enquiry">
      <div><span className={styles.kicker}>LET’S TALK</span><h2>Have a business idea?</h2><p>Use this sample enquiry interaction to preview the customer journey.</p></div>
      {sent ? <div className={styles.success}>Thanks! This demo enquiry was submitted locally.</div> : <form className={styles.miniForm} onSubmit={e => {e.preventDefault(); setSent(true);}}><input aria-label="Your name" required placeholder="Your name"/><input aria-label="Email address" type="email" required placeholder="Email address"/><button className={styles.goldButton}>Send enquiry ↗</button></form>}
    </section>
    <DemoFooter />
  </main>;
}

const products = [
  { name: "Everyday Tote", type: "Accessories", price: 899, mark: "TOTE", tone: "sand" },
  { name: "Minimal Watch", type: "Lifestyle", price: 2499, mark: "TIME", tone: "blue" },
  { name: "Classic Sneakers", type: "Footwear", price: 1899, mark: "MOVE", tone: "rose" },
  { name: "Desk Essentials", type: "Workspace", price: 1199, mark: "WORK", tone: "sage" },
];

export function EcommerceDemo() {
  const [cart, setCart] = useState<string[]>([]);
  const [category, setCategory] = useState("All");
  const filtered = useMemo(() => products.filter(p => category === "All" || p.type === category), [category]);
  return <main className={styles.shopPage}>
    <DemoNav active="/demos/ecommerce" />
    <section className={styles.shopHero}><span className={styles.kicker}>THE EVERYDAY EDIT</span><h1>Good things.<br/><i>Thoughtfully chosen.</i></h1><p>A sample storefront with product categories and a working demo cart.</p><div className={styles.cartPill}>Your bag <b>{cart.length}</b></div></section>
    <section className={styles.section}>
      <div className={styles.shopToolbar}><div><span className={styles.kicker}>CURATED FOR YOU</span><h2>Featured products</h2></div><div className={styles.filters}>{["All","Accessories","Lifestyle","Footwear","Workspace"].map(c => <button key={c} onClick={() => setCategory(c)} className={category === c ? styles.filterActive : ""}>{c}</button>)}</div></div>
      <div className={styles.productGrid}>{filtered.map((p) => <article className={styles.productCard} key={p.name}><div className={`${styles.productArt} ${styles[p.tone]}`}><span>{p.mark}</span><small>DEMO PRODUCT</small></div><div className={styles.productMeta}><div><h3>{p.name}</h3><p>{p.type}</p></div><b>₹{p.price.toLocaleString("en-IN")}</b></div><button className={styles.darkButton} onClick={() => setCart(old => [...old, p.name])}>Add to bag +</button></article>)}</div>
      {cart.length > 0 && <div className={styles.cartSummary}><b>{cart.length} item(s) in your demo bag</b><span>{cart.join(" · ")}</span><button onClick={() => setCart([])}>Clear bag</button></div>}
    </section>
    <DemoFooter />
  </main>;
}

export function SalonBookingDemo() {
  const [submitted, setSubmitted] = useState(false);
  return <main className={styles.salonPage}>
    <DemoNav active="/demos/salon-booking" />
    <section className={styles.salonHero}><div><span className={styles.kicker}>THE SELF-CARE SPACE</span><h1>A little time<br/><i>just for you.</i></h1><p>A calm, modern salon website concept with service information and an appointment request form.</p><a href="#book" className={styles.salonButton}>Book an appointment ↓</a></div><div className={styles.salonArt}><span>PAUSE.</span><b>RESET.</b><i>GLOW.</i></div></section>
    <section className={styles.section}><div className={styles.sectionHead}><span className={styles.kicker}>OUR SERVICES</span><h2>Choose your moment.</h2></div><div className={styles.threeGrid}>{[["Signature Haircut","From ₹799"],["Skin Refresh Facial","From ₹1,299"],["Relaxing Spa Ritual","From ₹1,599"]].map(([name, price], i) => <article className={styles.salonService} key={name}><small>0{i+1}</small><h3>{name}</h3><b>{price}</b><p>Personalised care in a welcoming, comfortable space.</p></article>)}</div></section>
    <section className={styles.bookingSection} id="book"><div><span className={styles.kicker}>RESERVE YOUR TIME</span><h2>Request an appointment.</h2><p>Choose a preferred date and time. This demo confirms locally and does not send a real booking.</p></div>
      {submitted ? <div className={styles.success}>Your sample appointment request is ready. The live version can connect to a booking backend.</div> : <form className={styles.bookingForm} onSubmit={e => {e.preventDefault(); setSubmitted(true);}}><label>Your name<input required placeholder="Full name"/></label><label>Service<select><option>Signature Haircut</option><option>Skin Refresh Facial</option><option>Relaxing Spa Ritual</option></select></label><label>Preferred date<input required type="date"/></label><label>Preferred time<select><option>10:00 AM</option><option>12:00 PM</option><option>2:00 PM</option><option>4:00 PM</option></select></label><button className={styles.salonButton}>Request booking ↗</button></form>}
    </section>
    <DemoFooter />
  </main>;
}

const initialLeads = [
  { name: "Aarav Mehta", service: "Business website", status: "New" },
  { name: "Mira Shah", service: "E-commerce store", status: "Contacted" },
  { name: "Rohan Patil", service: "CRM solution", status: "In progress" },
  { name: "Anaya Desai", service: "Appointment booking", status: "Completed" },
];

export function CRMDemo() {
  const [leads, setLeads] = useState(initialLeads);
  const [search, setSearch] = useState("");
  const visible = leads.filter(l => `${l.name} ${l.service}`.toLowerCase().includes(search.toLowerCase()));
  const updateStatus = (name: string, status: string) => setLeads(old => old.map(l => l.name === name ? {...l, status} : l));
  return <main className={styles.crmPage}>
    <DemoNav active="/demos/crm" />
    <div className={styles.crmLayout}>
      <aside className={styles.crmSidebar}><div className={styles.crmLogo}>N<span>V</span> <small>WORKSPACE</small></div><p>OVERVIEW</p><Link  href="" className={styles.sideActive}>▦ Dashboard</Link><Link  href="#">◷ Enquiries</Link><Link   href="#">▤ Projects</Link><Link  href="#">⚙ Settings</Link><div className={styles.crmUser}><b>Demo Admin</b><small>Administrator</small></div></aside>
      <section className={styles.crmMain}><div className={styles.crmTop}><div><span className={styles.kicker}>WORKSPACE / OVERVIEW</span><h1>Good morning, Admin</h1><p>Here’s what’s happening with your enquiries today.</p></div><span className={styles.demoBadge}>DEMO DATA</span></div>
        <div className={styles.statsGrid}>{[["Total enquiries",String(leads.length)],["New enquiries",String(leads.filter(l=>l.status==="New").length)],["In progress",String(leads.filter(l=>l.status==="In progress").length)],["Completed",String(leads.filter(l=>l.status==="Completed").length)]].map(([label,value])=><article className={styles.statCard} key={label}><small>{label}</small><b>{value}</b><span>Sample workspace</span></article>)}</div>
        <div className={styles.leadPanel}><div className={styles.leadHead}><div><h2>Recent enquiries</h2><p>Search leads and update their status.</p></div><input value={search} onChange={e=>setSearch(e.target.value)} placeholder="Search enquiries..."/></div>
          <div className={styles.tableWrap}><table><thead><tr><th>Customer</th><th>Service</th><th>Status</th></tr></thead><tbody>{visible.map(l=><tr key={l.name}><td><b>{l.name}</b></td><td>{l.service}</td><td><select value={l.status} onChange={e=>updateStatus(l.name,e.target.value)}><option>New</option><option>Contacted</option><option>In progress</option><option>Completed</option></select></td></tr>)}</tbody></table>{visible.length===0 && <p className={styles.empty}>No matching demo enquiries.</p>}</div>
        </div>
        <p className={styles.crmNotice}>This is a frontend demonstration with sample data only. No customer records are stored or transmitted.</p>
      </section>
    </div>
    <DemoFooter />
  </main>;
}
