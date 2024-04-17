import RoundedImage from "@/genericComponents/RoundedImage";
import React from "react";
import kafka from "../assets/kafka.webp"
const SmallNote = () => {
  return (
    <div className="my-5">
      <h1 className="text-2xl font-bold mb-2 ">My fundamental belief ✍️</h1>
      <div className="flex items-center gap-5">
        <RoundedImage isRound={false} src={kafka.src} height={30} width={150} alt="Nihillsm"/>
        <h2>
          Nihilism {"isn't"} about despair, {"it's"} about liberation. Once you
          accept the absence of inherent meaning, {"you're"} free to create your
          own purpose and find joy in the act of living.
        </h2>
      </div>
    </div>
  );
};

export default SmallNote;
