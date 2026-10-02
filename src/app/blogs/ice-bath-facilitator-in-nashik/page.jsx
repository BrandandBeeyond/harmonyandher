import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import Link from "next/link";
import Navbar from "../../components/Navbar";

const slug = "ice-bath-facilitator-in-nashik";
const sourcePath = path.join(process.cwd(), "rupali-surana-first-ice-bath-seo-blog.md");

export const metadata = {
  title: "Best Ice Bath Facilitator in India | Rupali Surana",
  description:
    "Meet Rupali Surana, an internationally certified ice bath facilitator and Women’s Harmony Coach guiding safe, empowering ice bath experiences in Igatpuri.",
  alternates: { canonical: `/blogs/${slug}` },
};

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function inlineMarkup(value) {
  return escapeHtml(value)
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*([^*]+)\*/g, "<em>$1</em>");
}

function parseMarkdown(source) {
  const content = source
    .replace(/â€™/g, "’")
    .replace(/â€”/g, "—")
    .replace(/â€œ|â€/g, '"')
    .replace(/â€œ|â€/g, '"')
    .split(/\r?\n/);
  const start = content.findIndex((line) => line.startsWith("# Rupali Surana:"));
  const end = content.findIndex((line) => line.startsWith("## Publishing Instructions"));
  const lines = content.slice(start, end > start ? end : content.length);
  const blocks = [];
  let index = 0;

  while (index < lines.length) {
    const line = lines[index].trim();
    if (!line || line === "---") {
      index += 1;
      continue;
    }

    const heading = line.match(/^(#{1,3})\s+(.+)$/);
    if (heading) {
      blocks.push({ type: `h${heading[1].length}`, text: heading[2] });
      index += 1;
      continue;
    }

    if (/^[-*]\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^[-*]\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^[-*]\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ul", items });
      continue;
    }

    if (/^\d+\.\s+/.test(line)) {
      const items = [];
      while (index < lines.length && /^\d+\.\s+/.test(lines[index].trim())) {
        items.push(lines[index].trim().replace(/^\d+\.\s+/, ""));
        index += 1;
      }
      blocks.push({ type: "ol", items });
      continue;
    }

    const paragraph = [line];
    index += 1;
    while (
      index < lines.length &&
      lines[index].trim() &&
      !/^(#{1,3})\s+/.test(lines[index].trim()) &&
      !/^[-*]\s+/.test(lines[index].trim()) &&
      !/^\d+\.\s+/.test(lines[index].trim())
    ) {
      paragraph.push(lines[index].trim());
      index += 1;
    }
    blocks.push({ type: "p", text: paragraph.join(" ") });
  }

  return blocks;
}

function ArticleBlocks({ blocks }) {
  return blocks.map((block, index) => {
    if (block.type === "ul" || block.type === "ol") {
      const List = block.type === "ul" ? "ul" : "ol";
      return (
        <List key={`${block.type}-${index}`}>
          {block.items.map((item) => (
            <li key={item} dangerouslySetInnerHTML={{ __html: inlineMarkup(item) }} />
          ))}
        </List>
      );
    }

    const Tag = block.type;
    const id = /^h[23]$/.test(block.type)
      ? block.text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")
      : undefined;
    return <Tag id={id} key={`${block.type}-${index}`} dangerouslySetInnerHTML={{ __html: inlineMarkup(block.text) }} />;
  });
}

export default function IceBathBlogPage() {
  const blocks = parseMarkdown(fs.readFileSync(sourcePath, "utf8"))
    .filter((block, index) => !(index === 0 && block.type === "h1"));

  return (
    <main className="blog-article-page">
      <section className="blog-article-hero">
        <Navbar />
        <div className="blog-article-hero-inner">
          <Link href="/blogs" className="blog-back-link">&#8592; Back to Blogs</Link>
          <p className="blogs-kicker">Wellness and Transformation</p>
          <h1>Rupali Surana: An Internationally Certified Ice Bath Facilitator Helping Women</h1>
          <div className="blog-article-byline">
            <span>By Rupali Surana</span>
            <span>8 min read</span>
          </div>
        </div>
      </section>

      <article className="blog-article-layout">
        <div className="blog-article-main">
          <div className="blog-article-feature-image">
            <Image
              src="/images/slider/optimized/happy5.jpg"
              alt="Rupali Surana guiding a transformational ice bath experience for women at Touchwood Bliss, Igatpuri"
              fill
              priority
              sizes="(max-width: 800px) 100vw, 820px"
            />
          </div>
          <div className="blog-article-body">
            <ArticleBlocks blocks={blocks} />
          </div>
        </div>

        <aside className="blog-article-aside">
          <span>In this story</span>
          <a href="#who-is-rupali-surana">Who is Rupali Surana?</a>
          <a href="#safety-comes-before-intensity">Safety comes before intensity</a>
          <a href="#experience-an-ice-bath-with-rupali-surana">Experience an ice bath</a>
          <a href="#frequently-asked-questions">FAQs</a>
        </aside>
      </article>
    </main>
  );
}
