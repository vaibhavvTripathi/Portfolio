import { Navbar } from "@/genericComponents/Navbar";
import { AnimatedName } from "@/portfolioComponents/AnimatedName";
import Footer from "@/portfolioComponents/Footer";
import { BentoGridDemo } from "@/portfolioComponents/MyBlogs";
import { MyProjects } from "@/portfolioComponents/MyProjects";
import MyTechStack from "@/portfolioComponents/MyTechStack";
import SmallNote from "@/portfolioComponents/SmallNote";
import Socials from "@/portfolioComponents/Socials";
import { InfiniteMovingCardsDemo } from "@/portfolioComponents/Testimonials";
import WorkExperience from "@/portfolioComponents/WorkExperience";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <div className="w-full md:w-1/2 p-2 mx-auto">
        <Navbar />
        <div className="px-5">
          <AnimatedName />
          <MyProjects />
          <BentoGridDemo />
          <WorkExperience />
          <MyTechStack />
          <InfiniteMovingCardsDemo />
          <SmallNote />
          <Socials />
          <Footer />
        </div>
      </div>
    </>
  );
}
