import { CogIcon } from "@heroicons/react/24/outline";

import { ProjectCard } from "./ProjectCard";
import { LogoMicosoft as Logo } from "~/components/LogoMicrosoft";

const cards = [
  {
    id: 1,
    title: "Bing Pros",
    href: "https://www.bing.com/pros",
    description:
      "Explore a wide pool of Microsoft-backed professionals to find the right talent quickly.",
    logo: <Logo />,
    linkText: "bing.com/pros",
  },
  {
    id: 1,
    title: "Take Lessons",
    href: "https://takelessons.com/",
    description:
      "Our vision is to build a strong community of TakeLessons students and teachers.",
    logo: <Logo />,
    linkText: "takelessons.com",
  },
  {
    id: 1,
    title: "Flip",
    href: "https://info.flip.com/en-us.html",
    description: "Personalized learning using the power of video.",
    logo: <Logo />,
    linkText: "flip.com",
  },
];

export const Projects = () => {
  return (
    <div>
      <div id="projects" />
      <h2 className="flex text-sm font-semibold text-foreground">
        <CogIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Projects</span>
      </h2>
      <div className="flex flex-col gap-4 mt-6">
        {cards.map((card) => (
          <ProjectCard key={card.id} {...card} />
        ))}
      </div>
    </div>
  );
};
