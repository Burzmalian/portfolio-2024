import { BeakerIcon } from "@heroicons/react/24/outline";

import { Container } from "~/components/Container";

const logoPath = "/logos/";

const techCloudData = [
  {
    label: "Javascript",
    src: "javascript.svg",
  },
  {
    label: "Typescript",
    src: "typescript.svg",
  },
  {
    label: "CSS3",
    src: "css.svg",
  },
  {
    label: "HTML5",
    src: "html.svg",
  },
  {
    label: "React",
    src: "react.svg",
  },
  {
    label: "Remix",
    src: "remix.svg",
  },
  {
    label: "Next",
    src: "next.svg",
  },
  {
    label: "NPM",
    src: "npm.svg",
  },
  {
    label: "Vite",
    src: "vite.svg",
  },
  {
    label: "Git",
    src: "git.svg",
  },
  {
    label: "PostCSS",
    src: "postcss.svg",
  },
  {
    label: "Sass",
    src: "sass.svg",
  },
];

const TechCloudItem = ({ label, src }: { label: string; src: string }) => (
  <div className="bg-background-2 p-6 sm:p-10">
    <img
      id={label}
      alt={label}
      src={`${logoPath}${src}`}
      width={158}
      height={48}
      className="max-h-12 w-full object-contain"
    />
  </div>
);

export const TechCloud = () => {
  return (
    <Container className="text-foreground">
      <Container.Inner>
        <div id="tech" />
        <h2 className="mb-6 flex text-sm font-semibold">
          <BeakerIcon className="h-6 w-6 flex-none" />
          <span className="ml-3">Tech</span>
        </h2>

        <div className="-mx-6 grid grid-cols-2 gap-0.5 overflow-hidden sm:mx-0 sm:rounded-2xl md:grid-cols-4">
          {techCloudData.map((item) => (
            <TechCloudItem key={item.label} label={item.label} src={item.src} />
          ))}
        </div>
      </Container.Inner>
    </Container>
  );
};
