import BlogArticle, { blogMetadata } from "../../components/BlogArticle";

const slug = "ice-bath-mental-resilience-for-women";
const image = "/images/bg/bgintro.png";
const imageAlt = "Woman building mental resilience through a guided ice bath at Touchwood Bliss, Igatpuri";
const description =
  "Beyond the chill: discover how ice baths help women build mental resilience, emotional strength and self-trust. Guided ice bath experiences with Rupali Surana at Touchwood Bliss, Igatpuri, near Nashik and Mumbai.";

export const metadata = blogMetadata({
  slug,
  title: "How Ice Baths Help Women Build Mental Resilience | Rupali Surana",
  description,
  image,
  imageAlt,
  keywords: [
    "ice bath mental resilience", "ice bath for women", "mental health ice bath", "cold water therapy for anxiety",
    "ice bath Igatpuri", "ice bath Touchwood Bliss", "ice bath near Nashik", "ice bath near Mumbai",
    "women's wellness retreat Igatpuri", "Women's Harmony Coach", "Rupali Surana", "Harmony & Her",
  ],
});

const sections = [
  {
    p: [
      "An ice bath is cold. That part is obvious. What surprises most women is what happens <strong>beyond the chill</strong>: a quiet, steady sense of strength that stays long after they step out of the water. At <strong>Touchwood Bliss, Igatpuri</strong>, Rupali Surana uses the ice bath as a doorway to mental resilience.",
    ],
  },
  {
    id: "what-is-mental-resilience", short: "What is mental resilience?",
    h: "What is mental resilience?",
    p: [
      "Mental resilience is your ability to stay grounded when life gets hard, and to recover after it does. It isn't about never feeling stress. It is about trusting that you can <strong>feel discomfort and still choose your response</strong>.",
      "For many women juggling careers, families and expectations, that kind of steadiness can feel out of reach. The ice bath offers a direct, physical way to practise it.",
    ],
    img: "/images/women1.png",
    alt: "Woman sitting alone, carrying the invisible weight of everyday stress",
    caption: "Resilience begins when we stop carrying everything alone.",
  },
  {
    id: "how-ice-baths-build-resilience", short: "How ice baths build resilience",
    h: "How ice baths build resilience",
    ul: [
      "<strong>Training the pause:</strong> the cold creates an urge to panic. Breathing through it teaches your brain to pause before reacting.",
      "<strong>Rewiring your stress response:</strong> regular, controlled exposure to a safe stressor (hormesis) helps your nervous system recover faster from everyday pressure.",
      "<strong>Quieting the inner critic:</strong> there is no room for overthinking in ice water. You are fully present.",
      "<strong>Proof of strength:</strong> each session is evidence that you can do hard things, which slowly builds deep self-trust.",
      "<strong>Mood support:</strong> the rise in dopamine and noradrenaline after cold exposure leaves many women feeling clear and uplifted.",
    ],
    img: "/images/rupalimam.jpg",
    pos: "center 20%",
    alt: "Rupali Surana, internationally certified ice bath facilitator and Women's Harmony Coach",
    caption: "Rupali Surana, Women's Harmony Coach and certified ice bath facilitator.",
  },
  {
    id: "why-women-centred", short: "A women-centred approach",
    h: "Why a women-centred approach matters",
    p: [
      "Women often carry invisible loads: caring for others, holding emotions, keeping everything together. Rupali, a Women's Harmony Coach and <strong>internationally certified ice bath facilitator</strong>, creates a safe, non-judgemental space where women can let go of that weight.",
      "Sessions combine breathwork, intention setting, the ice bath and a supportive sharing circle. It is not about competing or pushing limits. It is about meeting yourself with courage and compassion.",
    ],
    img: "/images/bestbg.png",
    alt: "Women's circle with Rupali Surana at Touchwood Bliss, Igatpuri near Nashik",
    caption: "Courage feels lighter when it is shared.",
  },
  {
    id: "carry-it-into-life", short: "Carry it into everyday life",
    h: "Carrying resilience into everyday life",
    p: [
      "The real transformation happens outside the tub. Women describe staying calmer in difficult conversations, handling work pressure with more clarity and feeling more confident in their own decisions.",
      "Set in the peaceful Sahyadri hills, <strong>Touchwood Bliss in Igatpuri</strong> is the ideal place to begin, a calm retreat within easy reach of <strong>Nashik, Mumbai and Pune</strong>.",
    ],
    img: "/images/women3.jpeg",
    alt: "Calm, confident woman carrying ice bath resilience into everyday life",
  },
];

const faqs = [
  { q: "Can ice baths help with anxiety?", a: "Many people find that regular guided ice baths help them feel calmer and less reactive. They are a supportive practice, not a replacement for professional mental health care." },
  { q: "How often should I take an ice bath for mental resilience?", a: "Consistency matters more than intensity. Short, guided sessions a few times a week, or regular retreat experiences, can help build resilience over time." },
  { q: "Do I need to be fit to try an ice bath?", a: "No. You don't need to be an athlete. With proper screening and guidance, most healthy women can safely experience an ice bath." },
  { q: "Where can women experience a guided ice bath in Maharashtra?", a: "Rupali Surana guides women-centred ice bath experiences at Touchwood Bliss, Igatpuri, near Nashik and Mumbai." },
];

export default function Page() {
  return (
    <BlogArticle
      slug={slug}
      headline="Beyond the Chill: How Ice Baths Help Women Embrace Mental Resilience"
      description={description}
      kicker="Mind and Resilience"
      readTime="6 min read"
      image={image}
      imageAlt={imageAlt}
      sections={sections}
      faqs={faqs}
    />
  );
}
