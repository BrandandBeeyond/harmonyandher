"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { Draggable } from "gsap/Draggable";
import { gsap } from "gsap";

const stats = [
  { number: "1,500+", label: "Women Impacted" },
  { number: "500+", label: "Harmony Sessions" },
  { number: "100+", label: "Workshops & Experiences" },
];

// Twelve positions complete the ring; six cards remain visible across the front arc.
const cardCount = 12;
const cardAngle = 30;

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
    const updateLayout = () => {
      const viewport = window.innerWidth;
      const ringRadius = viewport <= 640
        ? Math.min(section.clientWidth * 0.45, 190)
        : viewport <= 900
          ? 420
          : 560;
      gsap.set(cards, {
        rotateY: (index) => index * -cardAngle,
        transformOrigin: `50% 50% ${ringRadius}px`,
        z: -ringRadius,
        backfaceVisibility: "hidden",
      });
    };
    updateLayout();
    window.addEventListener("resize", updateLayout);
    const entrance = gsap.fromTo(cards, { y: 80, opacity: 0 }, {
      duration: 1.2, y: 0, opacity: 1, stagger: 0.045, ease: "expo.out",
    });
    let rotationY = 180;
    const rotateTo = gsap.quickTo(ring, "rotationY", {
      duration: 0.42,
      ease: "power2.out",
    });
    let previousX = 0;
    const draggable = Draggable.create(dragger, {
      type: "x",
      allowNativeTouchScrolling: true,
      onPress() { previousX = this.x; },
      onDrag() {
        const delta = this.x - previousX;
        rotationY += delta * 0.42;
        rotateTo(rotationY);
        previousX = this.x;
      },
      onRelease() { gsap.set(dragger, { x: 0 }); },
    });
    const handleWheel = (event) => {
      rotationY += Math.sign(event.deltaY) * -18;
      rotateTo(rotationY);
    };
    section.addEventListener("wheel", handleWheel, { passive: true });
    return () => {
      window.removeEventListener("resize", updateLayout);
      entrance.kill();
      rotateTo.tween?.kill();
      gsap.killTweensOf(ring);
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
              <div className="happy-ring-card" key={index} aria-hidden="true">
                <Image
                  src={`/images/slider/optimized/happy${(index % 6) + 1}.jpg`}
                  alt=""
                  fill
                  sizes="(max-width: 640px) 32vw, 152px"
                  style={{ objectFit: "cover", objectPosition: "center" }}
                  loading="eager"
                  draggable={false}
                />
              </div>
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

      <section className="bg-harmony-her relative -top-[220px] min-h-[400px] sm:min-h-[800px]"></section>
      <div className="-mt-[253px]"></div>
    </>

  );
}
