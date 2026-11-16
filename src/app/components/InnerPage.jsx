import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ScrollReveal from "./ScrollReveal";

export function InnerHero({ kicker, title, text }) {
  return (
    <section className="blogs-hero">
      <Navbar />
      <div className="blogs-hero-inner">
        <p className="blogs-kicker">{kicker}</p>
        <h1>{title}</h1>
        <p>{text}</p>
      </div>
    </section>
  );
}

export function InfoCards({ kicker, title, items }) {
  return (
    <section className="blogs-content">
      <div className="blogs-section-heading">
        <p className="blogs-kicker">{kicker}</p>
        <h2>{title}</h2>
      </div>
      <div className={`inner-card-grid${items.length === 4 ? " inner-card-grid-4" : ""}`}>
        {items.map((it) => (
          <article key={it.title} className="inner-card">
            {it.img && (
              <div className="inner-card-image">
                <Image src={it.img} alt={it.alt} fill sizes="(max-width: 800px) 100vw, 33vw" style={{ objectPosition: it.pos || "center" }} />
              </div>
            )}
            <div className="inner-card-copy">
              {it.step && <span className="inner-card-step">{it.step}</span>}
              <h3>{it.title}</h3>
              <p>{it.text}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function InnerCta({ title, text }) {
  return (
    <section className="blogs-content inner-cta">
      <h2>{title}</h2>
      <p>{text}</p>
      <Link className="blog-read-more" href="/contact">
        Get in touch <span aria-hidden="true">&#8594;</span>
      </Link>
    </section>
  );
}

export default function InnerPage({ children }) {
  return (
    <main className="blogs-page">
      {children[0]}
      <ScrollReveal>
        {children.slice(1)}
        <Footer />
      </ScrollReveal>
    </main>
  );
}
