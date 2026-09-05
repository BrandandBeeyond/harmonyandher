import { ArrowRight, LeafIcon } from "lucide-react";

const cards = [
    {
        title: "Professional Harmony",
        subtitle: "Grow professionally without losing yourself.",
        description:
            "Build career clarity, confidence and leadership while managing pressure, ambition and growth.",
        button: "Explore Professional Harmony",
    },
    {
        title: "Personal Harmony",
        subtitle: "Come back to yourself.",
        description:
            "Reconnect with your emotions, identity, confidence, well-being and inner peace.",
        button: "Explore Personal Harmony",
    },
    {
        title: "Family Harmony",
        subtitle: "Love deeply without losing yourself.",
        description:
            "Create stronger relationships through communication, compassion, bonding and healthy boundaries.",
        button: "Explore Family Harmony",
    },
];

const ThreeDimensions = () => {
    return (
        <section className="three-dimensions" aria-labelledby="dimensions-title">
            <div className="dimensions-heading">
                <h3 id="dimensions-title" className="text-[clamp(32px,4.3vw,55px)] font-medium leading-[1.03] tracking-[-1.5px] text-white">
                    Three Dimensions of Harmony
                </h3>
                <h3 className="m-0 mt-[5px] font-serif text-[clamp(32px,6.2vw,48px)] font-semibold italic leading-[1.09] tracking-[-0.5px] text-[#fff]">
                    Harmony in Every Part of Her Life
                </h3>
                <div className="mt-8 flex flex-row items-center justify-center gap-3" aria-hidden="true">
                    <div className="line1 h-[2px] w-[150px] bg-gradient-to-r from-transparent to-white" />
                    <LeafIcon size={28} />
                    <div className="line2 h-[2px] w-[150px] bg-gradient-to-r from-white to-transparent" />
                </div>
            </div>

            <div className="dimensions-cards">
                {cards.map((card, index) => {
                    return (
                        <div
                            key={index}
                            className="dimension-card"
                        >
                            <div className="dimension-icon" aria-hidden="true" />
                            <h4 className="pb-2">{card.title}</h4>
                            <p className="dimension-subtitle mt-3">{card.subtitle}</p>
                            <p className="dimension-description pb-2">{card.description}</p>
                            <a href="#discover" className="dimension-button mt-4">
                                <span>{card.button}</span>
                                <ArrowRight size={25} strokeWidth={1.6} aria-hidden="true" />
                            </a>
                        </div>
                    );
                })}
            </div>
        </section>
    );
};

export default ThreeDimensions;
