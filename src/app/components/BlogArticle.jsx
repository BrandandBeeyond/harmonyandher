import Image from "next/image";
import Link from "next/link";
import Navbar from "./Navbar";

export function blogMetadata({ slug, title, description, keywords, image, imageAlt }) {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: `/blogs/${slug}` },
    openGraph: { title, description, url: `/blogs/${slug}`, type: "article", images: [{ url: image, alt: imageAlt }] },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  };
}

const html = (s) => ({ __html: s });

export default function BlogArticle({ slug, headline, description, kicker, readTime, image, imageAlt, sections, faqs }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "BlogPosting",
        headline,
        description,
        image,
        author: { "@type": "Person", name: "Rupali Surana" },
        publisher: { "@type": "Organization", name: "Harmony & Her" },
        datePublished: "2026-11-16",
        mainEntityOfPage: `/blogs/${slug}`,
        contentLocation: { "@type": "Place", name: "Touchwood Bliss, Igatpuri, Maharashtra, India" },
      },
      {
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
      },
    ],
  };

  return (
    <main className="blog-article-page">
      <script type="application/ld+json" dangerouslySetInnerHTML={html(JSON.stringify(jsonLd))} />
      <section className="blog-article-hero">
        <Navbar />
        <div className="blog-article-hero-inner">
          <Link href="/blogs" className="blog-back-link">&#8592; Back to Blogs</Link>
          <p className="blogs-kicker">{kicker}</p>
          <h1>{headline}</h1>
          <div className="blog-article-byline">
            <span>By Rupali Surana</span>
            <span>{readTime}</span>
          </div>
        </div>
      </section>

      <article className="blog-article-layout">
        <div className="blog-article-main">
          <div className="blog-article-feature-image">
            <Image src={image} alt={imageAlt} fill priority sizes="(max-width: 800px) 100vw, 820px" />
          </div>
          <div className="blog-article-body">
            {sections.map((s, i) => (
              <section key={i}>
                {s.h && <h2 id={s.id}>{s.h}</h2>}
                {s.p?.map((t, j) => <p key={j} dangerouslySetInnerHTML={html(t)} />)}
                {s.ul && <ul>{s.ul.map((t, j) => <li key={j} dangerouslySetInnerHTML={html(t)} />)}</ul>}
                {s.after?.map((t, j) => <p key={j} dangerouslySetInnerHTML={html(t)} />)}
                {s.img && (
                  <figure className="blog-inline-figure">
                    <div className="blog-inline-image">
                      <Image src={s.img} alt={s.alt} fill sizes="(max-width: 800px) 100vw, 820px" style={{ objectPosition: s.pos || "center" }} />
                    </div>
                    {s.caption && <figcaption>{s.caption}</figcaption>}
                  </figure>
                )}
              </section>
            ))}

            <h2 id="frequently-asked-questions">Frequently asked questions</h2>
            {faqs.map((f) => (
              <div key={f.q}>
                <h3>{f.q}</h3>
                <p>{f.a}</p>
              </div>
            ))}

            <h2 id="book-your-ice-bath">Experience it with Rupali</h2>
            <p>
              Ready to feel this for yourself? Join Rupali Surana, internationally certified ice bath facilitator, for a
              guided <strong>ice bath experience at Touchwood Bliss, Igatpuri</strong>, near Nashik and Mumbai.{" "}
              <Link href="/contact">Get in touch</Link> to reserve your place, or read{" "}
              <Link href="/blogs/ice-bath-therapy-for-stress-relief">Ice Bath Therapy for Stress Relief</Link>.
            </p>
            <p><em>Disclaimer: This article is for information only and is not medical advice. Please consult your doctor before trying cold water therapy.</em></p>
          </div>
        </div>

        <aside className="blog-article-aside">
          <span>In this story</span>
          {sections.filter((s) => s.id && s.short).map((s) => (
            <a key={s.id} href={`#${s.id}`}>{s.short}</a>
          ))}
          <a href="#frequently-asked-questions">FAQs</a>
        </aside>
      </article>
    </main>
  );
}
