import React from "react";
import azureFunctions from "../assets/azurefunctions.svg";
import csharp from "../assets/c-sharp-c.svg";
import cosmosdb from "../assets/cosmosdb.svg";
import dotnet from "../assets/dotnet.svg";
import express from "../assets/express-original.svg";
import git from "../assets/file-type-git.svg";
import node from "../assets/file-type-node.svg";
import js from "../assets/javascript-js.svg";
import mui from "../assets/material-ui.svg";
import mongo from "../assets/mongodb-original-wordmark.svg";
import next from "../assets/next-js.svg";
import react from "../assets/react.svg";
import tanstack from "../assets/tanstack.png";
import signalR from "../assets/signalr.png";
import ts from "../assets/typescript-icon.svg";
import { AnimatedTooltip } from "@/genericComponents/AnimatedTooltip";

const techWithDetails: {
  id: number;
  name: string;
  designation: string;
  image: string;
}[] = [
  {
    id: 1,
    name: "Azure Functions",
    designation: "Technology",
    image: azureFunctions.src,
  },
  { id: 2, name: "C#", designation: "Technology", image: csharp.src },
  { id: 3, name: "CosmosDB", designation: "Technology", image: cosmosdb.src },
  { id: 4, name: ".NET", designation: "Technology", image: dotnet.src },
  { id: 5, name: "Express", designation: "Technology", image: express.src },
  { id: 6, name: "Git", designation: "Technology", image: git.src },
  { id: 7, name: "Node.js", designation: "Technology", image: node.src },
  { id: 8, name: "JavaScript", designation: "Technology", image: js.src },
  { id: 9, name: "Material-UI", designation: "Technology", image: mui.src },
  { id: 10, name: "MongoDB", designation: "Technology", image: mongo.src },
  { id: 11, name: "Next.js", designation: "Technology", image: next.src },
  { id: 12, name: "React", designation: "Technology", image: react.src },
  { id: 13, name: "SignalR", designation: "Technology", image: signalR.src },
  { id: 14, name: "TypeScript", designation: "Technology", image: ts.src },
  { id: 15, name: "Tanstack", designation: "Technology", image: tanstack.src },
];
const MyTechStack = () => {
  return (
    <div className="my-5">
      <h1 className="text-2xl font-bold mb-2 ">Tech Stack I Know 🛠️</h1>
      <div className="flex flex-wrap gap-x-20 gap-y-10 mt-10">
        <AnimatedTooltip items={techWithDetails} />
      </div>
    </div>
  );
};

export default MyTechStack;
