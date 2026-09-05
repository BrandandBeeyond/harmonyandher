import Image from "next/image";

const transformationImages = [
  { src: "/images/women2.jpeg", alt: "A woman receiving support during a guided session" },
  { src: "/images/women1.png", alt: "A woman finding calm during a wellness experience" },
  { src: "/images/women3.jpeg", alt: "A woman taking part in a personal transformation session" },
];

export default function Transformation() {
  return (
    <>
      <section className="relative min-h-[500px]  bg-transformation">
        <div className="relative z-10 mx-auto flex min-h-[550px] max-w-[1440px] items-center gap-[65px] px-16">
          <div className="flex shrink-0 gap-[18px]">
            {transformationImages.map((image) => (
              <div
                key={image.src}
                className="relative h-[325px]
                w-[130px]
                overflow-hidden
                rounded-[32px]"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  quality={100}
                  className="object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>

          <div className="max-w-[790px]">

            <h2
              className="
              m-0
              text-[clamp(42px,4.3vw,70px)]
              font-medium
              leading-[1.03]
              tracking-[-1.5px]
              text-[#414044]
            "
            >
              She&apos;s Doing Everything.
            </h2>



            <h3
              className="
              m-0
              mt-[5px]
              font-serif
              text-[clamp(32px,6.2vw,58px)]
              font-semibold
              italic
              leading-[1.07]
              tracking-[-0.5px]
              text-[#a52a70]
            "
            >
              But Is She Feeling Fulfilled?
            </h3>



            <div
              className="
              mt-[18px]
              max-w-[760px]
              font-serif
              text-[clamp(17px,1.35vw,22px)]
              font-semibold
              leading-[1.55]
              text-[#283d52]
            "
            >
              <p className="m-0">
                Managing her career. Nurturing relationships. Meeting expectations. Taking care of everyone. Trying to stay healthy and happy.

              </p>

              <p className="mt-[2px]">
                And somewhere along the way,

                <span className="text-[#a52a70]">
               she forgets herself.
                </span>
              </p>
            </div>

          </div>

        </div>

      </section>
    </>

  );
}
