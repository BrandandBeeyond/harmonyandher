import Image from "next/image";

const WomenChapter = () => {
    return (
        <section className="women-chapter-sec min-h-[550px] py-5 mt-12" aria-labelledby="women-chapter-title">
            <div className="flex h-100 flex-col items-center justify-center">
                <h3
                    id="women-chapter-title"
                    className="
              m-0
              mt-[5px]
              font-serif
              text-[clamp(27px,5.7vw,42px)]
              font-semibold
              leading-[1.3]
              tracking-[-0.5px]
              text-[#fff]
              capitalize
              text-center
            "
                >
                    Your Next Chapter <br /> Begins with you
                </h3>

                <p
                    className="
              mt-[8px]
              font-serif
               text-[18px]
              font-normal
              leading-[1.3]
              tracking-[0.5px]
              text-[#f2eced]
              text-center
            "
                >
                    You don&apos;t have to wait for burnout. You don&apos;t have <br />
                    to wait for a crisis. You don&apos;t have to have all the answers
                </p>

                 <span 
                    className="
              my-[12px]
              font-serif
              text-[clamp(14px,3.2vw,28px)]
              font-semibold
              leading-[1.3]
              tracking-[0.5px]
              text-[#fff]
              text-center
              bg-[#982b6a]
              px-4
              py-2
            "
                >
                  You simply need to take the first step.

                </span>

                <Image
                    src="/images/svg/womens.png"
                    alt="Women supporting one another"
                    width={1700}
                    height={605}
                    className="mx-auto mt-4 h-auto w-[min(90vw,900px)] object-contain"
                />
            </div>
        </section>
    );
};

export default WomenChapter;
