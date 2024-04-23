import { Container } from "~/components/Container";
import { Logo } from "~/components/Logo";
import { ProjectCard } from "~/components/ProjectCard";

const cards = [
  {
    id: 1,
    title: "Bing Pros",
    href: "https://www.bing.com/pros",
    description:
      "Explore a wide pool of Microsoft-backed professionals to find the right talent quickly.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    company: {
      name: "Microsoft",
      role: "Senior Software Engineer",
      logo: <Logo />,
    },
  },
  {
    id: 1,
    title: "Take Lessons",
    href: "https://takelessons.com/",
    description:
      "Our vision is to build a strong community of TakeLessons students and teachers.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    company: {
      name: "Microsoft",
      role: "Senior Software Engineer",
      logo: <Logo />,
    },
  },
  {
    id: 1,
    title: "Flip",
    href: "https://info.flip.com/en-us.html",
    description: "Personalized learning using the power of video.",
    imageUrl:
      "https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80",
    company: {
      name: "Microsoft",
      role: "Senior Software Engineer",
      logo: <Logo />,
    },
  },
  // More posts...
];

export default function Projects() {
  return (
    <Container className="bg-slate-100">
      <Container.Inner>
        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
          Recent Projects
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          Learn how to grow your business with our expert advice.
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
