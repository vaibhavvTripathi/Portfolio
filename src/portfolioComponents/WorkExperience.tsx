import React from "react";
import Timeline from "./Timline";

const WorkExperience = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-2 my-10">Work Experience 💼</h1>
      <div className="rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
        <Timeline />
      </div>
    </div>
  );
};

export default WorkExperience;
