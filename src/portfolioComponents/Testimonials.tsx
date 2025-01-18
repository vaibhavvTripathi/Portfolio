"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { cn } from "@/utils/cn";

let interval: any;

type Card = {
  id: number;
  name: string;
  designation: string;
  content: React.ReactNode;
  ld: string;
};

export const CardStack = ({
  items,
  offset,
  scaleFactor,
}: {
  items: Card[];
  offset?: number;
  scaleFactor?: number;
}) => {
  const CARD_OFFSET = offset || 10;
  const SCALE_FACTOR = scaleFactor || 0.06;
  const [cards, setCards] = useState<Card[]>(items);

  useEffect(() => {
    startFlipping();

    return () => clearInterval(interval);
  }, []);
  const startFlipping = () => {
    interval = setInterval(() => {
      setCards((prevCards: Card[]) => {
        const newArray = [...prevCards]; // create a copy of the array
        newArray.unshift(newArray.pop()!); // move the last element to the front
        return newArray;
      });
    }, 5000);
  };

  return (
    <div className="relative  h-60 w-60 md:h-60 md:w-full">
      {cards.map((card, index) => {
        return (
          <motion.div
            key={card.id}
            className="absolute dark:bg-black bg-white h-60 w-60 md:h-60 md:w-full rounded-3xl p-4 shadow-xl border border-neutral-200 dark:border-white/[0.1]  shadow-black/[0.1] dark:shadow-white/[0.05] flex flex-col justify-between"
            style={{
              transformOrigin: "top center",
            }}
            animate={{
              top: index * -CARD_OFFSET,
              scale: 1 - index * SCALE_FACTOR, // decrease scale for cards that are behind
              zIndex: cards.length - index, //  decrease z-index for the cards that are behind
            }}
          >
            <div className="font-normal text-neutral-700 dark:text-neutral-200">
              {card.content}
            </div>
            <div className="mt-3">
              <div className="flex items-center gap-1">
                <a target="blank" href={card.ld}>
                  <LinkedInIcon />
                </a>
                <p className="text-neutral-500 font-medium dark:text-white">
                  {card.name}
                </p>
              </div>
              <p className="text-neutral-400 font-normal dark:text-neutral-200">
                {card.designation}
              </p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export function CardStackDemo() {
  return (
    <>
      <h1 className="text-2xl font-bold mb-2 my-10">
        What people gotta say about me 👀
      </h1>
      <div className="h-[20rem] flex items-center justify-center w-full">
        <CardStack items={CARDS} />
      </div>
    </>
  );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <span
      className={cn(
        "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
        className
      )}
    >
      {children}
    </span>
  );
};

const CARDS = [
  {
    id: 0,
    name: "Eatesh Kandpal",
    designation: "Senior Engineer at Bloomberg | Ex-Microsoft",
    content: (
      <p>
        I{"'"}ve known Vaibhav for over a year now, witnessing his evolution
        from a keen newcomer to a reliable tech lead. Starting out as a young
        engineer, he dedicated himself to mastering every facet of full-stack
        development, spanning from <Highlight>UI design</Highlight> to{" "}
        <Highlight>backend intricacies</Highlight>. Vaibhav
        {"'"}s contributions have been instrumental in the success of Shipotle
        {"'"}s products & platforms. Without hesitation, I wholeheartedly
        endorse him as an exemplary engineer/tech-lead for any software
        engineering team.
      </p>
    ),
    ld: "https://www.linkedin.com/in/eateshk/",
  },
];
