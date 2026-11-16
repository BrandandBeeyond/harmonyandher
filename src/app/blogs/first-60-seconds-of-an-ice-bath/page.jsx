import BlogArticle, { blogMetadata } from "../../components/BlogArticle";

const slug = "first-60-seconds-of-an-ice-bath";
const image = "/images/best2.png";
const imageAlt = "Woman taking her first breaths in an ice bath at Touchwood Bliss, Igatpuri";
const description =
  "What happens to a woman's body in the first 60 seconds of an ice bath? Learn about the cold shock response, breath, heart rate and hormones, and try a guided ice bath with Rupali Surana at Touchwood Bliss, Igatpuri.";

export const metadata = blogMetadata({
  slug,
  title: "First 60 Seconds of an Ice Bath: A Woman's Body Explained | Rupali Surana",
  description,
  image,
  imageAlt,
  keywords: [
    "first 60 seconds ice bath", "cold shock response", "ice bath for women", "ice bath benefits for women",
    "ice bath Igatpuri", "ice bath Touchwood Bliss", "ice bath near Nashik", "ice bath near Mumbai",
    "cold water immersion", "ice bath facilitator India", "Rupali Surana", "Harmony & Her",
  ],
});

const sections = [
  {
    p: [
      "You step towards the tub. Your heart is already racing. Then your body meets the ice. For the next <strong>60 seconds</strong>, an incredible chain of reactions unfolds inside you. Understanding it is the first step to staying calm, and it is exactly what Rupali Surana prepares women for at <strong>Touchwood Bliss, Igatpuri</strong>.",
    ],
  },
  {
    id: "seconds-0-10", short: "0–10 seconds: cold shock",
    h: "0 to 10 seconds: the cold shock response",
    p: [
      "The moment cold water touches your skin, thousands of cold receptors fire at once. Your body triggers the <strong>cold shock response</strong>: an involuntary gasp, fast breathing and a sudden rush of adrenaline.",
      "This is the most important moment of the entire ice bath. It is why you should never enter cold water alone or unguided, and why Rupali always begins with slow, grounding breathwork.",
    ],
    img: "/images/bg/youtubebg.jpg",
    alt: "Breathwork session before an ice bath at Touchwood Bliss, Igatpuri",
    caption: "Preparing the breath before the first contact with the cold.",
  },
  {
    id: "seconds-10-30", short: "10–30 seconds: heart and blood",
    h: "10 to 30 seconds: heart, blood vessels and breath",
    ul: [
      "<strong>Blood vessels narrow</strong> (vasoconstriction), moving warm blood towards your heart and vital organs.",
      "<strong>Heart rate and blood pressure rise</strong> briefly as your body works to protect its core.",
      "<strong>Breathing wants to speed up.</strong> This is where long, slow exhales make all the difference.",
    ],
    after: [
      "Women often have slightly more peripheral cooling in the hands and feet, so these first seconds can feel especially intense. That is completely normal.",
    ],
  },
  {
    id: "seconds-30-60", short: "30–60 seconds: calm arrives",
    h: "30 to 60 seconds: the shift to calm",
    p: [
      "If you keep your breath slow, something remarkable happens. The panic begins to soften. Your nervous system realises it is safe, and the <strong>parasympathetic (rest-and-digest) system</strong> starts to take over.",
      "At the same time, your body releases <strong>noradrenaline and dopamine</strong>, the chemicals behind the clear, uplifted feeling many women describe after an ice bath. Research has shown dopamine can rise significantly during cold water immersion.",
    ],
    img: "/images/bg/harmonyhernewhero.jpeg",
    alt: "Woman calmly breathing in an ice bath with Rupali Surana at Touchwood Bliss",
    caption: "Around the one-minute mark, many women find a surprising stillness.",
  },
  {
    id: "womens-body-and-cold", short: "A woman's body and the cold",
    h: "How a woman's body experiences the cold differently",
    p: [
      "Hormones, body composition and the menstrual cycle can all change how cold feels. On some days you may feel strong and steady, on others more sensitive. Rupali's women-centred approach honours this, so your session adapts to your body rather than forcing a fixed time.",
    ],
    ul: [
      "Listen to your cycle and go gentler when you need to.",
      "Avoid ice baths during pregnancy unless your doctor approves.",
      "Focus on calm, not on how long you stay in.",
    ],
    img: "/images/women2.jpeg",
    alt: "Woman with her hand on her heart, tuning in to her body before an ice bath",
    caption: "Tuning in to your body helps you know what it needs today.",
  },
  {
    id: "after-the-first-minute", short: "After the first minute",
    h: "After the first minute",
    p: [
      "Those first 60 seconds teach a powerful lesson: <strong>discomfort passes when you breathe through it</strong>. Women often carry this lesson out of the tub and into work, relationships and everyday stress.",
    ],
    img: "/images/best1.jpg",
    alt: "Rupali Surana guiding a woman through grounding after her ice bath in Igatpuri",
  },
];

const faqs = [
  { q: "Why do I gasp when I enter an ice bath?", a: "The gasp is the cold shock response, an automatic reflex when cold water hits your skin. Slow breathing before and during entry helps you move through it safely." },
  { q: "Is the first minute of an ice bath the hardest?", a: "Yes, for most people the first 30 to 60 seconds are the most intense. Once your breath settles, the body usually begins to calm down." },
  { q: "Is an ice bath safe for women?", a: "For most healthy women, a guided ice bath is safe. If you are pregnant or have heart, blood pressure or other medical conditions, consult your doctor first." },
  { q: "Where can I try a guided ice bath near Nashik or Mumbai?", a: "Rupali Surana hosts guided ice bath sessions at Touchwood Bliss, Igatpuri, easily reachable from Nashik, Mumbai and Pune." },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      headline="What Happens to a Woman's Body During the First 60 Seconds of an Ice Bath?"
      description={description}
      kicker="The Science of Cold"
      readTime="6 min read"
      image={image}
      imageAlt={imageAlt}
      sections={sections}
      faqs={faqs}
    />
  );
}
