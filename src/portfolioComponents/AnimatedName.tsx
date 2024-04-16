"use client";
import RoundedImage from "@/genericComponents/RoundedImage";
import { TypewriterEffectSmooth } from "../genericComponents/TypeWriterComponent";
import user_img from "../assets/meri_photuk.jpeg";
import { motion, stagger, useAnimate, useInView } from "framer-motion";
import Socials from "./Socials";
export function AnimatedName() {
  const words = [
    {
      text: "Vaibhav",
    },
    {
      text: "Tripathi",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  return (
    <div className="flex items-center justify-around mt-10 ">
      <div className="flex flex-col w-fit  ">
        <TypewriterEffectSmooth words={words} />
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
          }}
          className="text-neutral-600 w-fit dark:text-neutral-200 text-xs sm:text-base px-1"
        >
          A product minded dev. Well versed with frontend and backend
          technologies.
        </motion.p>
      </div>
      <RoundedImage isRound={false} src={user_img.src} alt="vaibhav" height={50} width={150} />
    </div>
  );
}
