"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AosProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 750,
      easing: "ease-out-cubic",
      once: true,
      offset: 80,
    });

    AOS.refresh();
  }, []);

  return children;
}
