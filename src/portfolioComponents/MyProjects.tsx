"use client";

import Image from "next/image";
import { Tabs } from "../genericComponents/Tabs";

export function MyProjects() {
  const tabs = [
    {
      title: "Key Jet",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-blue-800">
          <p>Key Jet</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Rythm",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-500 to-blue-800">
          <p>Rythm</p>
          <DummyContent />
        </div>
      ),
    }
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start ">
      <h1 className="text-2xl font-bold mb-2 my-5">My Projects 📁</h1>
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
