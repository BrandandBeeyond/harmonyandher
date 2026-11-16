import Image from "next/image";
import Link from "next/link";
import Navbar from "../components/Navbar";

export const metadata = {
  title: "Blogs | Harmony & Her",
  description: "Thoughts and practical guidance for women creating a life in harmony.",
};

export default function BlogsPage() {
  return (
    <main className="blogs-page">
      <section className="blogs-hero">
        <Navbar />
        <div className="blogs-hero-inner">
          <p className="blogs-kicker">The Harmony Journal</p>
          <h1>Blogs</h1>
          <p>
            Reflections, tools and honest conversations for women building a
            life that feels as good as it looks.
          </p>
        </div>
      </section>

      <section className="blogs-content" aria-labelledby="latest-story-title">
        <div className="blogs-section-heading">
          <p className="blogs-kicker">From the journal</p>
          <h2>Ideas to help you return to yourself.</h2>
        </div>

        <article className="blog-feature-card">
          <div className="blog-feature-image">
            <Image
              src="/images/slider/optimized/happy4.jpg"
              alt="A woman experiencing an ice bath with support"
              fill
              sizes="(max-width: 400px) 100vw, 32vw"
            />
          </div>
          <div className="blog-feature-copy">
            <div className="blog-meta">
              <span>Women&apos;s Wellness</span>
              <span>8 min read</span>
            </div>
            <h2 id="latest-story-title">
              The ice bath: discovering your inner strength with Rupali Surana.
            </h2>
            <p>
              An ice bath can be more than a test of endurance. With the right
              guidance, it becomes a safe, intentional space to meet yourself
              with courage, clarity and compassion.
            </p>
            <p>
              Discover how Rupali combines international certification with a
              women-centred approach to help you take your next brave step.
            </p>
            <Link className="blog-read-more" href="/blogs/ice-bath-facilitator-in-nashik">
              Read the full story <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </article>

        <article className="blog-feature-card">
          <div className="blog-feature-image">
            <Image
              src="/images/slider/optimized/happy2.jpg"
              alt="Ice bath therapy for stress relief at Touchwood Bliss, Igatpuri"
              fill
              sizes="(max-width: 400px) 100vw, 32vw"
            />
          </div>
          <div className="blog-feature-copy">
            <div className="blog-meta">
              <span>Stress Relief</span>
              <span>7 min read</span>
            </div>
            <h2>Ice bath therapy for stress relief: find calm in the cold.</h2>
            <p>
              Learn how guided cold water immersion calms the nervous system,
              lifts your mood and builds resilience to everyday stress.
            </p>
            <p>
              Experience it safely with Rupali Surana at Touchwood Bliss,
              Igatpuri, near Nashik and Mumbai.
            </p>
            <Link className="blog-read-more" href="/blogs/ice-bath-therapy-for-stress-relief">
              Read the full story <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </article>
        <article className="blog-feature-card">
          <div className="blog-feature-image">
            <Image
              src="/images/best2.png"
              alt="A woman in the first moments of an ice bath at Touchwood Bliss, Igatpuri"
              fill
              sizes="(max-width: 400px) 100vw, 32vw"
            />
          </div>
          <div className="blog-feature-copy">
            <div className="blog-meta">
              <span>The Science of Cold</span>
              <span>6 min read</span>
            </div>
            <h2>What happens to a woman&apos;s body in the first 60 seconds of an ice bath?</h2>
            <p>
              From the cold shock gasp to the shift into calm, here is what your body goes through, second by second.
            </p>
            <p>
              Learn how to breathe through it safely with Rupali Surana at Touchwood Bliss, Igatpuri.
            </p>
            <Link className="blog-read-more" href="/blogs/first-60-seconds-of-an-ice-bath">
              Read the full story <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </article>

        <article className="blog-feature-card">
          <div className="blog-feature-image">
            <Image
              src="/images/bg/bgintro.png"
              alt="A woman building mental resilience in a guided ice bath in Igatpuri"
              fill
              sizes="(max-width: 400px) 100vw, 32vw"
            />
          </div>
          <div className="blog-feature-copy">
            <div className="blog-meta">
              <span>Mind and Resilience</span>
              <span>6 min read</span>
            </div>
            <h2>Beyond the chill: how ice baths help women embrace mental resilience.</h2>
            <p>
              Discover how the cold trains you to pause, stay grounded and trust your own strength.
            </p>
            <p>
              A women-centred ice bath experience near Nashik and Mumbai.
            </p>
            <Link className="blog-read-more" href="/blogs/ice-bath-mental-resilience-for-women">
              Read the full story <span aria-hidden="true">&#8594;</span>
            </Link>
          </div>
        </article>
      </section>
    </main>
  );
}
