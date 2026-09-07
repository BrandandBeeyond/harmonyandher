import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import ThreeDimensions from "./components/ThreeDimensions";
import Transformation from "./components/Transformation";
import WomenChapter from "./components/WomenChapter";
import YoutubeVideo from "./components/YoutubeVideo";
import MeetRupali from "./components/MeetRupali";
import HappyWomans from "./components/HappyWomans";
import Footer from "./components/Footer";
import ScrollReveal from "./components/ScrollReveal";

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

      <ScrollReveal>
      <section id="discover" className="intro-section" aria-labelledby="intro-title">
        <div className="intro-content">
          <h2 id="intro-title">
            She Can Have It All.
            <span>She Just Needs <em>Harmony.</em></span>
          </h2>
          <p className="intro-lead">
      A transformational space that helps women create harmony between who they are, what they do and how they live.

          </p>
          <p className="intro-detail">
            With <strong className="text-[#982b6a]">Rupali Surana -  Women Harmony Coach</strong> , helping women balance their personal, professional and family lives.

          </p>
          <div className="intro-actions">
            <a href="#journey" className="intro-button intro-button-primary" data-aos="fade-up" data-aos-delay="0">
              Begin Your Journey <span aria-hidden="true">&#8594;</span>
            </a>
            <a href="/about-rupali" className="intro-button intro-button-secondary" data-aos="fade-up" data-aos-delay="150">
              Meet Rupali <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </div>
      </section>

      <Transformation />
      <ThreeDimensions/>
      <WomenChapter/>
      <YoutubeVideo />
      <MeetRupali />
      <HappyWomans />
      <Footer />
      </ScrollReveal>
    </main>
  );
}
