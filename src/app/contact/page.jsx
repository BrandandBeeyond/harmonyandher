import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ContactForm from "./ContactForm";
import styles from "./contact.module.css";
export const metadata = { title: "Contact Us | Harmony & Her", description: "Connect with Rupali Surana for coaching, harmony circles and workshops." };
export default function ContactPage() {
  return <div className={styles.page}>
    <div className={styles.hero}><Navbar /><div className={styles.heroCopy}>
      <p className={styles.eyebrow}>CONTACT US</p>
      <h1>Every new chapter starts<br />with a <em>conversation.</em></h1>
      <p>You don&apos;t need to have it all figured out. Let&apos;s explore what harmony could look like for you.</p>
    </div></div>
    <main className={styles.content}>
      <section className={styles.intro} aria-labelledby="contact-title">
        <p className={styles.eyebrow}>A SPACE FOR YOU</p>
        <h2 id="contact-title">We&apos;d love to<br /><em>hear your story.</em></h2>
        <p>Whether you&apos;re seeking more balance, a fresh perspective, or space to reconnect with yourself, you&apos;re welcome here.</p>
        <div className={styles.coach}><h3>Rupali Surana</h3><p>Women Harmony Coach</p></div>
        <h3>Let&apos;s talk about</h3>
        <ul><li>One-to-one coaching &amp; personal growth</li><li>Harmony circles &amp; group programs</li><li>Workshops, retreats &amp; collaborations</li></ul>
        <div className={styles.links}><span>Prefer a quick conversation?</span><a href="tel:+917030081814">+91 70300 81814</a><a href="https://wa.me/917030081814" target="_blank" rel="noopener noreferrer">Chat on WhatsApp &#8599;</a></div>
        <p className={styles.note}>A small step. A meaningful beginning.</p>
      </section>
      <section className={styles.card} aria-labelledby="form-title"><p className={styles.eyebrow}>LET&apos;S BEGIN</p><h2 id="form-title">Start a conversation</h2><p>Tell us a little about yourself and what brings you here.</p><ContactForm /></section>
    </main>
    <div className={styles.closing}>Your journey. Your pace. <em>Your harmony.</em></div>
    <Footer />
  </div>;
}