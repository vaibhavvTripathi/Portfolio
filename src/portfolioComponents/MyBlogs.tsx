"use client";
import { cn } from "@/utils/cn";
import React, { useState } from "react";
import { BentoGrid, BentoGridItem } from "../genericComponents/BentoGrid";
import {
  IconArrowWaveRightUp,
  IconBoxAlignRightFilled,
  IconBoxAlignTopLeft,
  IconClipboardCopy,
  IconFileBroken,
  IconSignature,
  IconTableColumn,
} from "@tabler/icons-react";
import { motion } from "framer-motion";
import { Tab } from "@/genericComponents/Tabs";

const propTabs = [
  {
    title: "Playground",
    value: "playground",
  },
  {
    title: "Content",
    value: "content",
  },
  {
    title: "Random",
    value: "random",
  },
];

const dummyLyrics = [
  { value: "It's a beautiful day", duration: 2 },
  { value: "Don't let it get away", duration: 2 },
  { value: "It's a beautiful day", duration: 2 },
  { value: "Touch me, take me to that other place", duration: 2 },
  { value: "Teach me, yeah, I know I'm not a hopeless case", duration: 2 },
  // Repeat the existing entries or add new ones to reach a total of at least 30 entries
  { value: "See the world in green and blue", duration: 2 },
  { value: "See China right in front of you", duration: 2 },
  { value: "See the canyons broken by cloud", duration: 2 },
  { value: "See the tuna fleets clearing the sea out", duration: 2 },
  { value: "See the Bedouin fires at night", duration: 2 },
  { value: "See the oil fields at first light", duration: 2 },
  { value: "See the bird with a leaf in her mouth", duration: 2 },
  { value: "After the flood, all the colors came out", duration: 2 },
  { value: "It was a beautiful day", duration: 2 },
  { value: "Don't let it get away", duration: 2 },
  { value: "Beautiful day", duration: 2 },
  { value: "Touch me, take me to that other place", duration: 2 },
  { value: "Reach me, I know I'm not a hopeless case", duration: 2 },
  { value: "What you don't have, you don't need it now", duration: 2 },
  { value: "What you don't know, you can feel it somehow", duration: 2 },
  { value: "What you don't have, you don't need it now", duration: 2 },
  { value: "Don't need it now", duration: 2 },
  { value: "Was a beautiful day", duration: 2 },
  { value: "It was a beautiful day", duration: 2 },
  { value: "Yeah, yeah, yeah", duration: 2 },
  { value: "Touch me, take me to that other place", duration: 2 },
  { value: "Reach me, I know I'm not a hopeless case", duration: 2 },
  { value: "What you don't have, you don't need it now", duration: 2 },
  { value: "Was a beautiful day", duration: 2 },
  { value: "Oh, oh", duration: 2 },
];
export function BentoGridDemo() {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const selectedTab = newTabs.splice(idx, 1);
    newTabs.unshift(selectedTab[0]);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <div className="mt-[5rem]">
      <h1 className="text-2xl font-bold mb-2 my-10">Blogs 📰</h1>

      <BentoGrid className="max-w-4xl mx-auto">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            description={item.description}
            header={item.header}
            icon={item.icon}
            className={i === 3 || i === 6 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  );
}
const Skeleton = () => (
  <div className="flex flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100"></div>
);
const items = [
  {
    title: "The Dawn of Innovation",
    description: "Explore the birth of groundbreaking ideas and inventions.",
    header: <Skeleton />,
    icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Digital Revolution",
    description: "Dive into the transformative power of technology.",
    header: <Skeleton />,
    icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
  },
  {
    title: "The Art of Design",
    description: "Discover the beauty of thoughtful and functional design.",
    header: <Skeleton />,
    icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
  },
];
