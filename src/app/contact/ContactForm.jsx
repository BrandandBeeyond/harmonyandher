"use client";
import { useState } from "react";
import styles from "./contact.module.css";
export default function ContactForm() {
  const [status, setStatus] = useState("");
  function handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Hello Harmony & Her!\nName: ${data.get("name")}\nEmail: ${data.get("email")}\nPhone: ${data.get("phone") || "Not provided"}\nInterested in: ${data.get("interest")}\n\n${data.get("message")}`;
    window.open(`https://wa.me/917030081814?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
    setStatus("Review your enquiry in WhatsApp and press Send there. If it did not open, use the WhatsApp link on this page.");
  }
  return <form onSubmit={handleSubmit} className={styles.form}>
    <label>Your name *<input name="name" autoComplete="name" placeholder="Full name" required maxLength={100} /></label>
    <label>Email address *<input name="email" type="email" autoComplete="email" placeholder="you@example.com" required maxLength={254} /></label>
    <label>Phone number (optional)<input name="phone" type="tel" autoComplete="tel" placeholder="Your contact number" maxLength={30} /></label>
    <label>I&apos;m interested in *<select name="interest" defaultValue="" required><option value="" disabled>Select an experience</option><option>One-to-one coaching</option><option>Harmony circles &amp; group programs</option><option>Workshops &amp; retreats</option><option>Collaborations</option><option>I would like some guidance</option></select></label>
    <label>What&apos;s on your mind? *<textarea name="message" rows={5} required maxLength={3000} placeholder="Share what you are looking for, or simply say hello..." /></label>
    <p className={styles.hint}>This opens WhatsApp with your details. Review your message and press Send there.</p>
    <button type="submit">Continue on WhatsApp <span aria-hidden="true">&#8599;</span></button>
    <p role="status" className={styles.hint}>{status}</p>
  </form>;
}