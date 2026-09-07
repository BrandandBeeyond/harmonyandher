import Image from "next/image";

export default function MeetRupali() {
  return (
    <section id="about-rupali" className="meet-rupali-section" aria-labelledby="meet-rupali-title">
      <div className="meet-rupali-inner">
        <div className="meet-rupali-visual">
          <Image
            src="/images/rupalimam.jpg"
            alt="Rupali Surana"
            fill
            unoptimized
            sizes="(max-width: 900px) 80vw, 360px"
          />
        </div>

        <div className="meet-rupali-copy">
          <h2 id="meet-rupali-title">Meet Rupali Surana</h2>
          <h3>Nashik&apos;s <span className="text-[45px]">1</span> st &amp;  Only Harmony Coach Exclusively for Women</h3>
          <p>
            Rupali Surana is a Women Harmony Coach dedicated to helping women create greater harmony across their personal, professional and family lives.

          </p>
          <p>
            She believes that women don’t need to choose between success and happiness, ambition and well-being, or relationships and individuality. They can create harmony between them.


          </p>
          <p>
            Through coaching, mindful practices and transformative experiences, Rupali helps women pause, reflect, reconnect and consciously create the life they truly want.

          </p>
        </div>
      </div>
    </section>
  );
}
