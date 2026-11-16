import InnerPage, { InnerHero, InfoCards, InnerCta } from "../components/InnerPage";
import ThreeDimensions from "../components/ThreeDimensions";
import WomenChapter from "../components/WomenChapter";

const description =
  "Discover the Harmony & Her approach by Rupali Surana: women-centred coaching, breathwork and guided ice bath experiences at Touchwood Bliss, Igatpuri, to balance personal, professional and family life.";

export const metadata = {
  title: "Our Approach | Harmony & Her by Rupali Surana",
  description,
  keywords: ["women harmony coach", "women's life coaching India", "Rupali Surana", "ice bath Igatpuri", "Touchwood Bliss", "breathwork for women", "Harmony & Her"],
  alternates: { canonical: "/our-approach" },
  openGraph: { title: "Our Approach | Harmony & Her", description, url: "/our-approach", images: ["/images/best1.jpg"] },
};

const steps = [
  { step: "01", title: "Pause and become aware", text: "We begin by slowing down. Through conversation, reflection and breath, you notice where life feels out of balance and what you truly need.", img: "/images/women2.jpeg", alt: "Woman pausing with her hand on her heart" },
  { step: "02", title: "Reconnect with your body", text: "Breathwork, movement and guided ice bath experiences help you calm your nervous system and feel safe, strong and present in your own body.", img: "/images/best1.jpg", alt: "Rupali Surana guiding a woman through breathwork at Touchwood Bliss" },
  { step: "03", title: "Find courage in the cold", text: "With an internationally certified facilitator, the ice bath becomes a safe space to meet discomfort, build resilience and discover your inner strength.", img: "/images/best2.png", alt: "Woman in a guided ice bath at Touchwood Bliss, Igatpuri" },
  { step: "04", title: "Create harmony in daily life", text: "We turn insight into small, practical steps so you can balance who you are, what you do and how you live, at home, at work and within yourself.", img: "/images/women3.jpeg", alt: "Calm, confident woman at home" },
];

export default function OurApproachPage() {
  return (
    <InnerPage>
      <InnerHero
        kicker="Our Approach"
        title="Harmony, not perfection."
        text="A gentle, women-centred path that brings together coaching, breath and the courage of the cold."
      />
      <InfoCards kicker="How we work" title="Four steps back to yourself." items={steps} />
      <ThreeDimensions />
      <WomenChapter />
      <InnerCta
        title="Ready to begin your journey?"
        text="Talk to Rupali about coaching, women's circles or a guided ice bath experience at Touchwood Bliss, Igatpuri."
      />
    </InnerPage>
  );
}
