import InnerPage, { InnerHero, InfoCards, InnerCta } from "../components/InnerPage";
import YoutubeVideo from "../components/YoutubeVideo";

const description =
  "Explore Harmony & Her experiences: guided ice baths, breathwork, women's circles and 1:1 coaching with Rupali Surana at Touchwood Bliss, Igatpuri, near Nashik and Mumbai.";

export const metadata = {
  title: "Experiences | Ice Bath, Breathwork & Women's Circles in Igatpuri",
  description,
  keywords: ["ice bath Igatpuri", "ice bath Touchwood Bliss", "ice bath near Nashik", "ice bath near Mumbai", "breathwork workshop", "women's retreat Igatpuri", "women's circle", "Rupali Surana"],
  alternates: { canonical: "/experiences" },
  openGraph: { title: "Experiences | Harmony & Her", description, url: "/experiences", images: ["/images/bg/harmonyhernewhero.jpeg"] },
};

const experiences = [
  { title: "Guided Ice Bath", text: "A safe, step-by-step cold immersion experience with an internationally certified facilitator. Meet the cold with calm breath and discover your inner strength.", img: "/images/slider/optimized/happy5.jpg", alt: "Guided ice bath at Touchwood Bliss, Igatpuri" },
  { title: "Breathwork Sessions", text: "Simple, powerful breathing practices to calm the mind, release stress and prepare the body for the ice.", img: "/images/bg/youtubebg.jpg", alt: "Breathwork session on the lawn at Touchwood Bliss" },
  { title: "Women's Circles", text: "A warm, supportive space to share, listen and grow together with women who understand your journey.", img: "/images/bestbg.png", alt: "Women's circle with Rupali Surana in Igatpuri" },
  { title: "1:1 Harmony Coaching", text: "Personal coaching to help you balance your personal, professional and family life with clarity and confidence.", img: "/images/rupalimam.jpg", alt: "Rupali Surana, Women's Harmony Coach", pos: "center 20%" },
  { title: "Retreats at Touchwood Bliss", text: "Immersive days in the Sahyadri hills of Igatpuri combining nature, breath, ice and reflection.", img: "/images/bg/harmonyhernewhero.jpeg", alt: "Ice bath by the pool with hills at Touchwood Bliss, Igatpuri" },
  { title: "Corporate & Group Sessions", text: "Ice bath and breathwork sessions for teams, communities and groups who want to build resilience together.", img: "/images/slider/optimized/happy7.jpg", alt: "Group ice bath session near Nashik" },
];

export default function ExperiencesPage() {
  return (
    <InnerPage>
      <InnerHero
        kicker="Experiences"
        title="Feel it to believe it."
        text="Guided ice baths, breathwork and women's circles at Touchwood Bliss, Igatpuri, designed to help you return to yourself."
      />
      <InfoCards kicker="What we offer" title="Experiences that stay with you." items={experiences} />
      <YoutubeVideo />
      <InnerCta
        title="Book your experience"
        text="Sessions are held at Touchwood Bliss, Igatpuri, easily reachable from Nashik, Mumbai and Pune. Reach out to check upcoming dates."
      />
    </InnerPage>
  );
}
