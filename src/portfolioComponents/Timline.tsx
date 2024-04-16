"use client";
import { Chrono } from "react-chrono";

const Timeline = () => {
  return (
    <Chrono
      disableToolbar
      disableInteraction
      activeItemIndex={0}
      itemWidth={1500}
      items={[
        {
          title: "Feb 2024",
          cardTitle: "Ascendiya Technologies Private Limited",
          url: "http://google.com",
          cardSubtitle: "Tech Lead",
          cardDetailedText: [
            `1. Architectured and developed APIs in C#(dotnet) by following best REST practices.
          `,
            `2. Led a team that migrated frontend state-management code from Context-API to React-Query.`,
          ],
        },
        {
          title: "Sep 2023",
          cardTitle: "Ascendiya Technologies Private Limited",
          cardSubtitle: `SWE Intern`,
          cardDetailedText: [
            `1. Developed fullstack web apps using Next js and . NET, SignalR
          `,
            `2. Wrote azure functions for the inventory management for a e-commerce project.`,
          ],
        },
      ]}
      mode="VERTICAL"
    />
  );
};

export default Timeline;
