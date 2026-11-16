import InnerPage, { InnerHero, InnerCta } from "../components/InnerPage";
import HappyWomans from "../components/HappyWomans";
import Transformation from "../components/Transformation";

const description =
  "Read and watch real stories from women who experienced coaching, breathwork and guided ice baths with Rupali Surana at Touchwood Bliss, Igatpuri.";

export const metadata = {
  title: "Testimonials | Women Growing in Harmony | Harmony & Her",
  description,
  keywords: ["Rupali Surana reviews", "ice bath experience reviews", "ice bath Igatpuri", "Touchwood Bliss", "women coaching testimonials", "Harmony & Her"],
  alternates: { canonical: "/testimonials" },
  openGraph: { title: "Testimonials | Harmony & Her", description, url: "/testimonials", images: ["/images/slider/optimized/happy3.jpg"] },
};

export default function TestimonialsPage() {
  return (
    <InnerPage>
      <InnerHero
        kicker="Testimonials"
        title="Stories of courage and calm."
        text="Real women, real experiences. Hear how Harmony & Her helped them find strength, balance and joy."
      />
      <HappyWomans />
      <Transformation />
      <InnerCta
        title="Write your own story"
        text="Join the women who have discovered their inner strength with Rupali Surana at Touchwood Bliss, Igatpuri."
      />
    </InnerPage>
  );
}
