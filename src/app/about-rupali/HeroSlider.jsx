"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./about.module.css";

const slides = [
  { src: "/images/rupalimam.jpg", alt: "Rupali Surana, Women's Harmony Coach", position: "center 25%" },
  { src: "/images/slider/optimized/happy4.jpg", alt: "Rupali guiding a smiling woman through an ice bath", position: "center 40%" },
  { src: "/images/slider/optimized/happy5.jpg", alt: "Rupali supporting a participant in a poolside ice bath", position: "center 60%" },
  { src: "/images/slider/optimized/happy7.jpg", alt: "Rupali leading a calm breathing moment during an ice bath", position: "center 45%" },
];

export default function HeroSlider() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = setInterval(() => setActive(index => (index + 1) % slides.length), 3500);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className={styles.portrait} data-aos="fade-left" aria-roledescription="carousel" aria-label="Rupali Surana and ice bath experiences">
      <div className={styles.slideTrack} style={{ transform: `translateX(-${active * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={slide.src} className={styles.slide} aria-hidden={index !== active}>
            <Image
              src={slide.src}
              alt={slide.alt}
              fill
              priority={index === 0}
              sizes="(max-width: 800px) 80vw, 380px"
              style={{ objectPosition: slide.position }}
            />
          </div>
        ))}
      </div>
      <div className={styles.slideDots}>
        {slides.map((slide, index) => (
          <button
            key={slide.src}
            type="button"
            aria-label={`Show photo ${index + 1}`}
            aria-current={index === active}
            onClick={() => setActive(index)}
          />
        ))}
      </div>
    </div>
  );
}
