"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const titleLineOne = "Nashik’s 1st & Only";
const titleLineTwo = "Harmony Coach";
const titleLineThree = "Empowering For Women";
const titleToType = `${titleLineTwo} ${titleLineThree}`;
const heroTitle = `${titleLineOne} ${titleToType}`;

const HeroSection = () => {
  const [typedLength, setTypedLength] = useState(0);

  useEffect(() => {
    let characterIndex = 0;

    const typingTimer = window.setInterval(() => {
      characterIndex += 1;
      setTypedLength(characterIndex);

      if (characterIndex === titleToType.length) {
        window.clearInterval(typingTimer);
      }
    }, 30);

    return () => window.clearInterval(typingTimer);
  }, []);

  return (
    <>
        <div className="hero-art" aria-hidden="true">
          <Image
            src="/images/svg/logovectoragni.png"
            alt=""
            width={690}
            height={744}
            className="hero-logo"
            priority
          />
          <Image
            src="/images/svg/rupalisurana.png"
            alt=""
            width={590}
            height={644}
            className="hero-woman"
            priority
          />
        </div>

        <div className="hero-copy">
         
          <h1 id="hero-title" aria-label={heroTitle}>
            <span className="hero-title-measure" aria-hidden="true">
              <span>{titleLineOne}</span>
              <span>{titleLineTwo}</span>
              <span>{titleLineThree}</span>
            </span>
            <span className="hero-title-typed" aria-hidden="true">
              <span>{titleLineOne}</span>
              <span>{titleToType.slice(0, Math.min(typedLength, titleLineTwo.length))}</span>
              <span>
                {typedLength > titleLineTwo.length
                  ? titleLineThree.slice(0, typedLength - titleLineTwo.length - 1)
                  : ""}
              </span>
            </span>
          </h1>
          <p className="hero-description">
          Helping women create harmony across their Personal, Professional and Family lives—so they can live with calm, confidence and fulfilment.

          </p>
          <a href="#discover" className="hero-cta" data-aos="fade-up" data-aos-delay="0">
           Book a Conversation
            <span aria-hidden="true">&#8594;</span>
          </a>
        </div>
    </>
  );
};

export default HeroSection;
