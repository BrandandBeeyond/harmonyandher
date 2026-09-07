"use client";

import { useLayoutEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function splitText(element) {
  const walker = document.createTreeWalker(element, NodeFilter.SHOW_TEXT);
  const textNodes = [];
  let node;

  while ((node = walker.nextNode())) {
    if (node.textContent.trim()) textNodes.push(node);
  }

  textNodes.forEach((textNode) => {
    const fragment = document.createDocumentFragment();
    const parts = textNode.textContent.split(/(\s+)/);

    parts.forEach((part) => {
      if (/\s+/.test(part) || !part) {
        fragment.appendChild(document.createTextNode(part));
        return;
      }

      const word = document.createElement("span");
      word.className = "scroll-reveal-word";
      word.textContent = part;
      fragment.appendChild(word);
    });

    textNode.parentNode.replaceChild(fragment, textNode);
  });

  return element.querySelectorAll(".scroll-reveal-word");
}

export default function ScrollReveal({ children }) {
  const rootRef = useRef(null);

  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return undefined;

    const splitElements = root.querySelectorAll("h2, h3, h4, p");
    const originalMarkup = Array.from(splitElements, (element) => ({
      element,
      html: element.innerHTML,
    }));
    const wordGroups = [];

    splitElements.forEach((element) => {
      wordGroups.push({
        element,
        words: Array.from(splitText(element)),
      });
    });

    const context = gsap.context(() => {
      const words = wordGroups.flatMap(({ words: groupWords }) => groupWords);
      gsap.set(words, { display: "inline-block", opacity: 0, y: 24 });
      gsap.set(root.querySelectorAll("img"), { opacity: 0, y: 35, scale: 0.96 });

      wordGroups.forEach(({ element, words: groupWords }) => {
        gsap.to(groupWords, {
          opacity: 1,
          y: 0,
          duration: 0.65,
          stagger: 0.035,
          ease: "power3.out",
          scrollTrigger: {
            trigger: element,
            start: "top 88%",
            once: true,
          },
        });
      });

      gsap.utils.toArray("img", root).forEach((image) => {
        gsap.to(image, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.9,
          ease: "power3.out",
          scrollTrigger: {
            trigger: image,
            start: "top 88%",
            once: true,
          },
        });
      });
    }, root);

    return () => {
      context.revert();
      originalMarkup.forEach(({ element, html }) => {
        element.innerHTML = html;
      });
    };
  }, []);

  return <div ref={rootRef}>{children}</div>;
}
