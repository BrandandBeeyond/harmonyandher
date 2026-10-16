import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import HeroSlider from "./HeroSlider";
import styles from "./about.module.css";

export const metadata = {
  title: "About Rupali Surana | Harmony & Her",
  description:
    "Meet Rupali Surana, India's 1st & only Women's Harmony Coach, exclusively for young professionals.",
};

const shifts = [
  {
    title: ["A kinder", "inner voice"],
    text: "Explore self-love, recognise your worth and build a stronger relationship with yourself.",
  },
  {
    title: ["Space for", "your needs"],
    text: "Express what matters to you, set healthy boundaries and make choices with greater clarity.",
  },
  {
    title: ["Harmony in", "everyday life"],
    text: "Bring emotional awareness and practical habits into work, relationships and your own wellbeing.",
  },
];

const certifications = [
  {
    image: "/images/certificates/cert1.png",
    width: 1448,
    height: 1086,
    title: "Certified Ice Bath Facilitator",
    issuer: "House of Light & Abundance",
    text: "Certified by the House of Light & Abundance to lead and facilitate ice bath sessions safely and confidently. Her approach combines breathwork, mindful preparation and guided cold exposure to help participants discover courage, resilience and a deeper connection with themselves.",
  },
  {
    image: "/images/certificates/cert2.png",
    width: 1086,
    height: 1448,
    title: "Practitioner of Neuro-Linguistic Programming",
    issuer: "Anil Thomas Fellowship · DeLozier & Associates",
    text: "Completed an intensive 80-hour Practitioner of NLP programme conducted by Anil Thomas Fellowship and DeLozier & Associates. Her training includes emotional regulation, belief transformation, behavioural change, communication, goal setting and personal growth techniques.",
  },
  {
    image: "/images/certificates/cert4.png",
    width: 1086,
    height: 1448,
    title: "Sound & Meditation Training",
    issuer: "SAMA · Sound and Meditation Academy",
    text: "Completed the Foundation Sound and Meditation Training – Singing Bowl Module, covering the science of sound healing, using singing bowls for meditation, self-healing techniques and energy cleansing.",
  },
  {
    image: "/images/certificates/cert3.png",
    width: 1448,
    height: 1086,
    title: "Adult CPR & First Aid",
    issuer: "Dr Ankur Pranav · MBBS, DNB",
    text: "Trained in adult CPR and first aid, so every session and ice bath experience is held with care and safety in mind.",
  },
  {
    image: "/images/certificates/supermom.png",
    width: 1086,
    height: 1448,
    title: "Super Mom Recognition",
    issuer: "Lokmat Sakhi",
    text: "Honoured by Lokmat Sakhi under the “Super Mom” recognition for embodying the strength, courage and sensitivity of motherhood while inspiring her family and society through her independent identity and positive contribution.",
  },
];

export default function AboutRupaliPage() {
  return (
    <div className={styles.page}>
      <div className={styles.navBand}>
        <Navbar />
      </div>

      <main>
        <section className={styles.hero} aria-labelledby="about-title">
          <div className={styles.heroCopy}>
            <h1 id="about-title" data-aos="fade-up">
              You Care For
              <br />
              So Many People.
              <em>
                You Deserve
                <br />
                Care Too.
              </em>
            </h1>
            <p data-aos="fade-up" data-aos-delay="100">
              A stronger relationship with yourself.
              <br />
              More harmony in the life you are building.
            </p>
            <a href="#introduction" className={styles.heroButton} data-aos="fade-up" data-aos-delay="200">
              Meet Rupali <span aria-hidden="true">&#10230;</span>
            </a>
          </div>

          <HeroSlider />
        </section>

        <div className={`${styles.band} ${styles.waveBg}`}>
          <p>
            India&rsquo;s 1<sup>st</sup> &amp; Only Women&rsquo;s Harmony Coach, Exclusively for Young
            Professionals
          </p>
        </div>

        <section id="introduction" className={styles.intro} aria-labelledby="intro-title">
          <div className={styles.introHeading}>
            <p className={styles.eyebrow}>A Personal Introduction</p>
            <h2 id="intro-title">
              Namaste,
              <br />
              I am Rupali
              <br />
              Surana.
            </h2>
            <p className={styles.eyebrow}>Founder, Harmony &amp; Her</p>
          </div>

          <div className={styles.introBody}>
            <p>
              I help young professional women build a stronger relationship with themselves and bring
              more harmony into their personal, professional and family lives.
            </p>
            <p>
              Between career goals, relationships and everyday responsibilities, it is easy to keep
              putting yourself last. You may appear confident to the world while quietly carrying
              self-doubt, emotional pressure or the feeling that you are never doing enough.
            </p>
            <p>
              Through Harmony &amp; Her, I invite you to pause, listen to yourself and make space for
              your own needs, dreams and wellbeing.
            </p>
            <p>
              My approach brings together self-love, emotional awareness and practical everyday habits.
              <br />
              We explore how you speak to yourself, recognise your worth, express your needs and set
              healthy boundaries. The purpose is to help you make choices with greater clarity and
              confidence.
            </p>
            <p>
              As an international ice bath coach and facilitator, I also bring guided ice bath
              experiences and breathwork into my work. These are part of a wider journey of
              self-discovery, supported through coaching and reflection.
            </p>
            <a href="/contact" className={styles.cta}>
              Book a Conversation <span aria-hidden="true">&#8594;</span>
            </a>
          </div>
        </section>

        <section className={`${styles.shifts} ${styles.waveBg}`} aria-labelledby="shifts-title">
          <div className={styles.shiftsInner}>
            <div className={styles.shiftsHead}>
              <h2 id="shifts-title">
                Small Shifts.
                <br />
                Deeper Connection.
              </h2>
              <p>
                A compassionate space to explore your inner world, recognise what you need and bring
                that awareness into everyday life.
              </p>
            </div>
            <ol className={styles.shiftList}>
              {shifts.map((item, index) => (
                <li key={item.text} data-aos="fade-up" data-aos-delay={index * 120}>
                  <span className={styles.shiftNumber}>{String(index + 1).padStart(2, "0")}</span>
                  <h3>
                    {item.title[0]}
                    <br />
                    {item.title[1]}
                  </h3>
                  <p>{item.text}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section className={styles.belief} aria-labelledby="belief-title">
          <span className={styles.quoteMark} aria-hidden="true">&ldquo;</span>
          <h2 id="belief-title">
            Your wellbeing deserves a place
            <br />
            in the life you are building.
          </h2>
          <p>The belief at the heart of my work</p>
        </section>

        <section className={styles.certs} aria-labelledby="certs-title">
          <div className={styles.certsHead}>
            <div>
              <p className={styles.eyebrow}>Training &amp; Credentials</p>
              <h2 id="certs-title">
                Certifications
                <em>&amp; Recognition</em>
              </h2>
            </div>
            <p>
              Rupali Surana brings together professional training, practical experience and a deeply
              compassionate approach to support women in their journey towards emotional strength,
              self-awareness and inner harmony.
            </p>
          </div>

          <div className={styles.certGrid}>
            {certifications.map((cert, index) => (
              <article key={cert.title} className={styles.certCard} data-aos="fade-up" data-aos-delay={(index % 3) * 120}>
                <div className={styles.certImage}>
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate – ${cert.issuer}`}
                    width={cert.width}
                    height={cert.height}
                    sizes="(max-width: 700px) 70vw, 240px"
                  />
                </div>
                <h3>{cert.title}</h3>
                <p className={styles.certIssuer}>{cert.issuer}</p>
                <p className={styles.certText}>{cert.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className={styles.closing} aria-labelledby="closing-title">
          <p className={styles.closingEyebrow} data-aos="fade-up">Your next chapter begins with you</p>
          <h2 id="closing-title" data-aos="fade-up" data-aos-delay="100">
            Let&rsquo;s begin your journey
            <br />
            towards a life that feels
            <br />
            more like you.
          </h2>
          <p className={styles.closingText} data-aos="fade-up" data-aos-delay="200">
            Whether you want to feel more connected to yourself, navigate change or find a healthier
            balance between work and relationships, I am here to support your next step.
          </p>
          <a href="/contact" className={styles.closingButton} data-aos="fade-up" data-aos-delay="300">
            Connect with Rupali <span aria-hidden="true">&#10230;</span>
          </a>
        </section>
      </main>

      <Footer />
    </div>
  );
}
