import { Container } from "~/components/Container";
import { LogoMicosoft as Logo } from "~/components/LogoMicrosoft";
import { ProjectCard } from "~/components/ProjectCard";

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

export default function Projects() {
  return (
    <Container className="relative bg-background text-foreground">
      <Container.Inner>
        <div id="projects" />
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
          Recent Projects
        </h2>
        <p className="mt-2 text-lg leading-8 ">
          My most recent contributions were made to these projects
        </p>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {cards.map((card) => (
            <ProjectCard key={card.id} {...card} />
          ))}
        </div>
      </Container.Inner>
    </Container>
  );
}
