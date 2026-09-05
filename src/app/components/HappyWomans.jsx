"use client";

import { useEffect, useRef } from "react";
import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";

const stats = [
  { number: "1,500+", label: "Women Impacted" },
  { number: "500+", label: "Harmony Sessions" },
  { number: "100+", label: "Workshops & Experiences" },
];

const cardCount = 20;

export default function HappyWomans() {
  const sectionRef = useRef(null);
  const ringRef = useRef(null);
  const draggerRef = useRef(null);

  useEffect(() => {
    const section = sectionRef.current;
    const ring = ringRef.current;
    const dragger = draggerRef.current;
    const cards = gsap.utils.toArray(".happy-ring-card", ring);

    if (!section || !ring || !dragger || !cards.length) return undefined;

    gsap.registerPlugin(Draggable);
    gsap.set(ring, { rotationY: 180 });
    gsap.set(cards, {
      rotateY: (index) => index * -18,
      transformOrigin: "50% 50% 560px",
      z: -560,
      opacity: 1,
      backfaceVisibility: "hidden",
    });

    const entrance = gsap.fromTo(
      cards,
      { y: 80, opacity: 0 },
      {
        duration: 1.2,
        y: 0,
        opacity: 1,
        stagger: 0.045,
        ease: "expo.out",
      }
    );

    let previousX = 0;
    const draggable = Draggable.create(dragger, {
      type: "x",
      allowNativeTouchScrolling: false,
      onPress() {
        previousX = this.x;
      },
      onDrag() {
        const delta = this.x - previousX;
        gsap.set(ring, { rotationY: `+=${delta * 0.42}` });
        previousX = this.x;
      },
      onRelease() {
        gsap.set(dragger, { x: 0 });
      },
    });

    const handleWheel = (event) => {
      const direction = event.deltaY < 0 ? 1 : -1;
      gsap.to(ring, {
        rotationY: `+=${direction * 18}`,
        duration: 0.65,
        ease: "power2.out",
        overwrite: true,
      });
    };

    section.addEventListener("wheel", handleWheel, { passive: true });

    return () => {
      entrance.kill();
      section.removeEventListener("wheel", handleWheel);
      draggable.forEach((instance) => instance.kill());
    };
  }, []);

  return (
    <>
      <section ref={sectionRef} className="happy-womans-section" aria-labelledby="happy-womans-title">
        <h2 id="happy-womans-title">Women Growing in Harmony</h2>
        <div className="happy-carousel" aria-label="Drag to explore stories of happy women">
          <div ref={ringRef} className="happy-ring">
            {Array.from({ length: cardCount }, (_, index) => (
              <div className="happy-ring-card" key={index} aria-hidden="true" />
            ))}
          </div>
          <div ref={draggerRef} className="happy-dragger" aria-hidden="true" />
        </div>
        <div className="happy-stats">
          {stats.map((stat) => (
            <div key={stat.number}>
              <strong>{stat.number}</strong>
              <span>{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-harmony-her relative -top-[220px] min-h-[800px]"></section>
      <div className="-mt-[200px]"></div>
    </>

  );
}
