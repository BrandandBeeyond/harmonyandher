"use client";

import { useEffect } from "react";
import Lenis from "lenis";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export default function SmoothScroll({ children }) {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis({
      duration: 1.1,
      smoothWheel: true,
      syncTouch: false,
    });

    const updateScrollTrigger = () => ScrollTrigger.update();
    const render = (time) => lenis.raf(time * 1000);

    lenis.on("scroll", updateScrollTrigger);
    gsap.ticker.add(render);
    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.off("scroll", updateScrollTrigger);
      gsap.ticker.remove(render);
      lenis.destroy();
    };
  }, []);

  return children;
}
