"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ArrowUpRight, Menu, X, Code2, Smartphone, ShoppingCart, Workflow, BrainCircuit, Cloud, ShieldCheck, Zap, Users, Globe2, CheckCircle2, Mail, MapPin, Phone, Sparkles } from "lucide-react";

const services = [
  { icon: Code2, title: "Custom Software Development", text: "Purpose-built web applications and software that streamline the way your business works." },
  { icon: Globe2, title: "Web & E-commerce Development", text: "Fast, responsive websites and online stores designed to turn visitors into customers." },
  { icon: Smartphone, title: "Mobile App Development", text: "Intuitive mobile experiences that keep your customers connected wherever they are." },
  { icon: Workflow, title: "CRM & ERP Solutions", text: "Bring customer relationships, operations and business workflows into one place." },
  { icon: BrainCircuit, title: "AI & Business Automation", text: "Reduce repetitive work and make smarter decisions with practical automation." },
  { icon: Cloud, title: "Cloud & API Integration", text: "Connect your tools, services and data with secure, scalable integrations." },
];
const projects = [
  {
    title: "Business Website",
    category: "Website Development",
    description: "Modern responsive website for small and growing businesses.",
    tech: ["Next.js", "Tailwind CSS"],
    image: "/project/business-apoitment.png",
    demo: "/demos/business-website"
  },
  {
    title: "E-commerce Platform",
    category: "E-commerce",
    description: "Online shopping experience with product and order management.",
    tech: ["React", "Node.js", "MongoDB"],
    image: "/project/e-commerce-booking.png",
    demo: "/demos/ecommerce"
  },
  {
    title: "CRM Management System",
    category: "Custom Software",
    description: "Manage customers, enquiries and business operations in one place.",
    tech: ["Next.js", "Express.js", "MongoDB"],
    image: "/project/CRM management system.png",
    demo: "/demos/crm"
  },
  {
    title: "Salon & Appointment Booking",
    category: "Salon Booking System",
    description: "Salon services, date/time selection and booking confirmation.",
    tech: ["Angular", "Node.js"],
    image: "/project/solen-appointment.png",
    demo: "/demos/salon-booking"
  }
];
const navItems = [{ label: "Home", href: "#home" }, { label: "About", href: "#about" }, { label: "Services", href: "#services" },  { label: "Projects", href: "#projects" }, { label: "Process", href: "#process" }, { label: "Pricing", href: "#pricing" }, { label: "Contact", href: "#contact" }];

export function Header() {
  const [open, setOpen] = useState(false);
  return <header className="site-header"><div className="container nav-wrap">
    <Link href="#home" className="brand" aria-label="NAVRIVA TECHNOLOGY home"><span className="brand-mark">N<span>V</span></span><span className="brand-copy"><b>NAVRIVA</b><small>TECHNOLOGY</small></span></Link>
    <nav className={open ? "nav-links nav-open" : "nav-links"}>{navItems.map(item => <a key={item.href} href={item.href} onClick={() => setOpen(false)}>{item.label}</a>)}<a className="nav-cta" href="#contact" onClick={() => setOpen(false)}>Let’s Talk <ArrowUpRight size={15}/></a></nav>
    <button className="mobile-toggle" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
  </div></header>;
}

export function Hero() {
  return <section id="home" className="hero"><div className="hero-grid"/><div className="container hero-inner">
    <div className="hero-copy"><div className="eyebrow"><span/> DIGITAL INNOVATION PARTNER</div><h1>Building tomorrow’s <em>digital world.</em></h1><p className="hero-lead">We turn ambitious ideas into reliable digital products—websites, software and intelligent solutions that help businesses move forward.</p><div className="hero-actions"><a href="#contact" className="button button-gold">Start a Project <ArrowUpRight size={18}/></a><a href="#services" className="text-link">Explore our services <ArrowRight size={17}/></a></div><div className="hero-note"><span className="note-icon"><ShieldCheck size={17}/></span><span>Thoughtful technology. Built around your business.</span></div></div>
    <div className="hero-art"><div className="orbit orbit-one"/><div className="orbit orbit-two"/><div className="glow-core"><span>NV</span></div><div className="float-card card-top"><Sparkles size={16}/> Ideas into impact</div><div className="float-card card-bottom"><span className="pulse-dot"/> Built for what’s next</div><div className="art-caption">INNOVATE <i>·</i> BUILD <i>·</i> GROW</div></div>
  </div><div className="hero-bottom container"><span>WEB & SOFTWARE</span><span className="gold-line"/><span>PRODUCT ENGINEERING</span><span className="gold-line"/><span>BUSINESS AUTOMATION</span></div></section>;
}

export function About() {
  return <section id="about" className="section about-section"><div className="container about-grid"><div><div className="eyebrow eyebrow-dark"><span/> WHO WE ARE</div><h2>Technology should make <em>business simpler.</em></h2><p className="section-lead">NAVRIVA TECHNOLOGY is a digital solutions brand focused on helping businesses build, improve and scale through thoughtful technology.</p><p className="body-copy">From your first business website to a custom platform that supports daily operations, we bring together clean design, dependable engineering and a practical understanding of your goals.</p><a href="#contact" className="dark-link">Let’s build something meaningful <ArrowUpRight size={17}/></a></div><div className="about-panel"><div className="panel-symbol">NV</div><div className="panel-rule"/><p>BUILD WITH PURPOSE.</p><h3>Make your next<br/><em>move digital.</em></h3><div className="panel-bottom"><span>NAVRIVA TECHNOLOGY</span><span>01 / 03</span></div></div></div></section>;
}

export function Services() {
  return <section id="services" className="section services-section"><div className="container"><div className="section-heading"><div><div className="eyebrow"><span/> WHAT WE DO</div><h2>Digital solutions for <em>real progress.</em></h2></div><p>Flexible technology services designed around your needs today—and your ambitions for tomorrow.</p></div><div className="service-grid">{services.map((s, i) => <article className="service-card" key={s.title}><div className="service-top"><span className="service-icon"><s.icon size={23}/></span><span className="service-number">0{i + 1}</span></div><h3>{s.title}</h3><p>{s.text}</p><a href="#contact" aria-label={`Enquire about ${s.title}`}><ArrowUpRight size={19}/></a></article>)}</div></div></section>;
}





export function Projects() {
  return (
    <section id="projects" className="section projects-section">
      <div className="container">
        <div className="section-heading">
          <div>
            <div className="eyebrow">
              <span /> OUR PROJECTS
            </div>
            <h2>Ideas transformed into <em>digital solutions.</em></h2>
          </div>
          <p>
            Explore the types of digital products and solutions
            we build for businesses.
          </p>
        </div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <article className="project-card" key={project.title}>
              <div className="project-preview">
                <Image
                  src={project.image}
                  alt={`${project.title} preview`}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="project-image"
                />
                <span className="project-number">0{index + 1}</span>
                <span className="project-category">
                  {project.category}
                </span>
              </div>

              <div className="project-content">
                <h3>{project.title}</h3>
                <p>{project.description}</p>

                <div className="project-tech">
                  {project.tech.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>

                <Link href={project.demo} className="dark-link">
                  View Project ↗
                </Link>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}


export function Process() {
  const steps = [{ n: "01", title: "Discover", text: "We understand your goals, audience and the challenge to solve." }, { n: "02", title: "Plan & design", text: "We shape the right solution, user experience and delivery roadmap." }, { n: "03", title: "Build & refine", text: "We develop, test and improve with clear communication throughout." }, { n: "04", title: "Launch & support", text: "We help you go live and plan the next stage of growth." }];
  return <section id="process" className="section process-section"><div className="container"><div className="eyebrow"><span/> HOW WE WORK</div><div className="section-heading process-heading"><h2>A clear path from <em>idea to impact.</em></h2><p>Good outcomes come from a thoughtful process, transparent collaboration and attention to detail.</p></div><div className="process-grid">{steps.map(s => <div className="process-step" key={s.n}><span>{s.n}</span><h3>{s.title}</h3><p>{s.text}</p></div>)}</div></div></section>;
}

export function Pricing() {
  const pricingPlans = [
  {
    id: "starter",
    name: "Starter Website",
    subtitle: "Get your business online",
    price: "₹4,999",
    period: "Starting from",
    popular: false,
    features: [
      "Responsive Website Design",
      "Up to 5 Pages",
      "Basic SEO Setup",
      "Contact Form",
      "1 Month Support",
    ],
  },
  {
    id: "business",
    name: "Business Website",
    subtitle: "Grow your brand",
    price: "₹8,999",
    period: "Starting from",
    popular: true,
    features: [
      "Premium Website Design",
      "Up to 8 Pages",
      "SEO Optimization",
      "Enquiry Integration",
      "3 Months Support",
    ],
  },
  {
    id: "premium",
    name: "Premium Website",
    subtitle: "Stand out professionally",
    price: "₹14,999",
    period: "Starting from",
    popular: false,
    features: [
      "Custom UI/UX Design",
      "Advanced Features",
      "API Integration",
      "Admin Dashboard",
      "6 Months Support",
    ],
  },
  {
    id: "ecommerce",
    name: "E-commerce Website",
    subtitle: "Start selling online",
    price: "₹29,999 +",
    period: "Starting from",
    popular: false,
    features: [
      "Online Store",
      "Product Management",
      "Shopping Cart & Checkout",
      "Payment Gateway Integration",
      "Order Management",
    ],
  },
];

  return <section id="pricing" className="section pricing-section"><div className="container"><div className="section-heading"><div><div className="eyebrow"><span/> PRICING</div><h2>Simple, transparent <em>pricing.</em></h2></div><p>We offer clear pricing for our website development services. No hidden fees, no surprises—just straightforward packages to suit your needs.</p></div><div className="pricing-grid">{pricingPlans.map(plan => <article key={plan.id} className={plan.popular ? "pricing-card popular" : "pricing-card"}><div className="pricing-header"><h3>{plan.name}</h3><p>{plan.subtitle}</p></div><div className="pricing-body"><span className="price"> {plan.price}</span><span className="period"> {plan.period}</span><ul>{plan.features.map((f, i) => <li key={i}>{f}</li>)}</ul></div><a href="#contact" className="button button-gold pricing-cta">Enquire Now <ArrowUpRight size={18}/></a></article>)}</div></div></section>;
}






export function Contact() {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", service: "Website development", message: "" });
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true); setError("");
    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";
      const response = await fetch(`${apiUrl}/api/enquiries`, {
        method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form)
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.message || "Unable to send your enquiry.");
      setSent(true);
      setForm({ name: "", email: "", phone: "", service: "Website development", message: "" });
    } catch (err) {
      setError(err instanceof Error ? err.message : "Something went wrong. Please try again.");
    } finally { setLoading(false); }
  }
  return <section id="contact" className="section contact-section"><div className="container contact-grid"><div className="contact-copy"><div className="eyebrow"><span/> LET’S CONNECT</div><h2>Have an idea? <em>Let’s make it real.</em></h2><p>Tell us a little about what you’re building. We’ll take it from there.</p><div className="contact-details"><div><Mail size={18}/><span><small>EMAIL</small><b>Business email to be configured</b></span></div><div><MapPin size={18}/><span><small>LOCATION</small><b>Kalyan, Maharashtra, India</b></span></div></div></div><form className="contact-form" onSubmit={submit}><div className="form-title"><h3>Start a conversation</h3><p>Fields marked * are required. Your details are sent securely to our enquiry inbox.</p></div>{sent ? <div className="success-message"><CheckCircle2 size={22}/><div><b>Thank you for reaching out.</b><p>Your enquiry has been received. Our team will contact you soon.</p></div></div> : <><label>Your name *<input required maxLength={100} value={form.name} onChange={e => setForm({...form, name:e.target.value})} placeholder="Enter your name"/></label><label>Work email *<input type="email" required value={form.email} onChange={e => setForm({...form, email:e.target.value})} placeholder="you@company.com"/></label><label>Phone / WhatsApp<input type="tel" maxLength={30} value={form.phone} onChange={e => setForm({...form, phone:e.target.value})} placeholder="Optional contact number"/></label><label>What do you need?<select value={form.service} onChange={e => setForm({...form, service:e.target.value})}><option>Website development</option><option>Custom software</option><option>Mobile app</option><option>CRM / ERP</option><option>AI & automation</option><option>Cloud & API integration</option><option>Other</option></select></label><label>Project details *<textarea required maxLength={5000} rows={4} value={form.message} onChange={e => setForm({...form, message:e.target.value})} placeholder="Tell us about your idea..."/></label>{error && <p className="form-error" role="alert">{error}</p>}<button className="button button-gold form-submit" type="submit" disabled={loading}>{loading ? "Sending..." : "Send Enquiry"} <ArrowUpRight size={18}/></button><p className="form-disclaimer">Your enquiry is stored securely for the NAVRIVA team to follow up.</p></>}</form></div></section>;
}

export function WhatsAppButton() {
  const number = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER;
  if (!number) return null;
  const cleanNumber = number.replace(/[^0-9]/g, "");
  if (!cleanNumber) return null;
  return <a className="whatsapp-float" href={`https://wa.me/${cleanNumber}?text=${encodeURIComponent("Hello NAVRIVA TECHNOLOGY, I would like to discuss a project.")}`} target="_blank" rel="noreferrer" aria-label="Chat with NAVRIVA TECHNOLOGY on WhatsApp">WhatsApp ↗</a>;
}

export function Footer() {
  return <footer className="footer"><div className="container footer-main"><div><Link href="#home" className="brand footer-brand"><span className="brand-mark">N<span>V</span></span><span className="brand-copy"><b>NAVRIVA</b><small>TECHNOLOGY</small></span></Link><p>Building Tomorrow’s Digital World.</p></div><div className="footer-links"><a href="#about">About</a><a href="#services">Services</a><a href="#projects">Projects</a><a href="#process">Our Process</a><a href="#pricing">Pricing</a><a href="#contact">Contact</a></div><a href="#home" className="back-top">BACK TO TOP ↑</a></div><div className="container footer-bottom"><span>© {new Date().getFullYear()} NAVRIVA TECHNOLOGY. All rights reserved.</span><span>Designed for a digital future.</span></div></footer>;
}
