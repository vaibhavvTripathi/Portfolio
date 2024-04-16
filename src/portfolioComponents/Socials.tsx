import React from "react";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";

const socials = [
  { icon: <XIcon />, href: "https://twitter.com/ThinksVaibhav" },
  {
    icon: <LinkedInIcon />,
    href: "https://www.linkedin.com/in/vaibhav-tripathi-4bb644223/",
  },
  {
    icon: <GitHubIcon />,
    href: "https://github.com/vaibhavvTripathi",
  },
];
const Socials = () => {
  return (
    <div className="flex w-fit mx-auto gap-2 mt-5">
      {socials.map((item, index) => {
        return (
          <a key={"social-" + index} target="blank" href={item.href}>
            {item.icon}
          </a>
        );
      })}
    </div>
  );
};

export default Socials;
