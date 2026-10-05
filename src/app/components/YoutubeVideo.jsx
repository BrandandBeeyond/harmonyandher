"use client";

import { useEffect, useRef } from "react";

let apiPromise;
function loadYouTube() {
  if (window.YT?.Player) return Promise.resolve(window.YT);
  if (!apiPromise) {
    apiPromise = new Promise((resolve, reject) => {
      const previous = window.onYouTubeIframeAPIReady;
      window.onYouTubeIframeAPIReady = () => {
        previous?.();
        resolve(window.YT);
      };
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        script.onerror = () => { apiPromise = undefined; reject(new Error("Video unavailable")); };
        document.head.appendChild(script);
      }
    });
  }
  return apiPromise;
}

export default function YoutubeVideo() {
  const sectionRef = useRef(null);
  const playerHost = useRef(null);

  useEffect(() => {
    let player;
    let ready = false;
    let visible = false;
    let disposed = false;
    let loading = false;
    const host = playerHost.current;
    const sync = () => {
      if (!ready || disposed) return;
      if (visible && !document.hidden) {
        player.mute();
        player.setPlaybackRate(2);
        player.playVideo();
      } else player.pauseVideo();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting && entry.intersectionRatio >= 0.3;
      if (visible && !loading) {
        loading = true;
        loadYouTube().then((YT) => {
          if (disposed) return;
          const mount = document.createElement("div");
          host.appendChild(mount);
          player = new YT.Player(mount, {
            width: "100%",
            height: "100%",
            videoId: "krekSsZAlGw",
            playerVars: { playsinline: 1, controls: 0, disablekb: 1, rel: 0, origin: window.location.origin },
            events: {
              onReady: () => {
                if (disposed) return;
                ready = true;
                const iframe = player.getIframe();
                iframe.title = "Discover Your Path to Harmony";
                iframe.tabIndex = -1;
                iframe.setAttribute("allow", "autoplay; encrypted-media; picture-in-picture");
                sync();
              },
              onStateChange: (event) => {
                if (disposed) return;
                if (event.data === YT.PlayerState.PLAYING) {
                  player.mute();
                  player.setPlaybackRate(2);
                  if (!visible || document.hidden) player.pauseVideo();
                }
              },
            },
          });
        }).catch(() => { loading = false; });
      }
      sync();
    }, { threshold: [0, 0.3] });
    observer.observe(sectionRef.current);
    document.addEventListener("visibilitychange", sync);
    return () => {
      disposed = true;
      observer.disconnect();
      document.removeEventListener("visibilitychange", sync);
      player?.destroy();
      host.replaceChildren();
    };
  }, []);

  return (
    <section ref={sectionRef} className="youtube-section" aria-labelledby="youtube-title">
      <div className="youtube-card">
        <div ref={playerHost} className="youtube-player-fill" />
        <a href="https://www.youtube.com/watch?v=krekSsZAlGw" className="youtube-play z-10" aria-label="Watch the full video on YouTube" data-aos="fade-up">
          <span aria-hidden="true" />
        </a>
        <div className="youtube-content pointer-events-none">
          <h2 id="youtube-title">Discover Your Path to Harmony</h2>
          <p>See how Harmony &amp; Her can help you pause, reconnect and create meaningful change in every area of your life.</p>
        </div>
      </div>
    </section>
  );
}