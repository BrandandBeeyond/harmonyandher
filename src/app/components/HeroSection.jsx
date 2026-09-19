"use client";

import Image from "next/image";
const HeroSection = () => {
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
            src="/images/svg/womenbanner.png"
            alt=""
            width={590}
            height={644}
            className="hero-woman"
            priority
          />
        </div>

        <div className="hero-copy">
         
          <h1 id="hero-title" data-aos="fade-up">
            <span className="hero-title-line">Nashik&rsquo;s <span className="hero-ordinal">1<sup>st</sup></span> &amp; Only</span>
            <span className="hero-title-line">Harmony Coach</span>
            <span className="hero-title-line">Empowering For Women</span>
          </h1>
          <p className="hero-description" data-aos="fade-up" data-aos-delay="100">
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
