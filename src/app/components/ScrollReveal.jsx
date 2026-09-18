"use client";

import { useEffect, useRef } from "react";
import AOS from "aos";

export default function ScrollReveal({ children }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const elements = rootRef.current.querySelectorAll("h2, h3, h4, p, img");
    const added = [];
    elements.forEach((element) => {
      if (element.closest("[data-aos]")) return;
      element.setAttribute("data-aos", element.tagName === "IMG" ? "fade-left" : "fade-up");
      added.push(element);
    });
    AOS.refreshHard();
    return () => {
      added.forEach((element) => element.removeAttribute("data-aos"));
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}