import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ThreeDimensions from "./components/ThreeDimensions";
import Transformation from "./components/Transformation";

export default function Home() {
  return (
    <main>
      <section className="hero-banner" aria-labelledby="hero-title">
        <div className="hero-stars" aria-hidden="true" />
        <div className="hero-glow hero-glow-left" aria-hidden="true" />
        <div className="hero-glow hero-glow-top" aria-hidden="true" />
        <div className="hero-beam hero-beam-one" aria-hidden="true" />
        <div className="hero-beam hero-beam-two" aria-hidden="true" />

        <Navbar />
        <HeroSection/>
      
      </section>

      <section id="discover" className="intro-section" aria-labelledby="intro-title">
        <div className="intro-content">
          <h2 id="intro-title">
            She Can Have It All.
            <span>She Just Needs <em>Harmony.</em></span>
          </h2>
          <p className="intro-lead">
            A transformational space for young professional women to create
            harmony between who they are, what they do and how they live.
          </p>
          <p className="intro-detail">
            With <strong>Rupali Surana</strong> - India&apos;s 1st &amp; Only Women
            Harmony Coach exclusively for Young Professionals.
          </p>
          <div className="intro-actions">
            <a href="#journey" className="intro-button intro-button-primary">
              Begin Your Journey <span aria-hidden="true">&#8594;</span>
            </a>
            <a href="/about-rupali" className="intro-button intro-button-secondary">
              Meet Rupali <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </div>
      </section>

      <Transformation />
      <ThreeDimensions/>
    </main>
  );
}
