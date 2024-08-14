//import { Contact } from "./Contact";
import { Hero } from "./Hero";
import { Projects } from "./Projects";
import { TechCloud } from "./TechCloud";
import { Work } from "./Work";
import { Container } from "~/components/Container";

export default function Home() {
  return (
    <>
      <Hero />

      <Container className="bg-background">
        <Container.Inner>
          <div
            id="projects"
            className="flex flex-col lg:flex-row gap-12 justify-between"
          >
            <Projects />
            <Work />
          </div>
        </Container.Inner>
      </Container>
      <TechCloud />
      {/* <Contact /> */}
    </>
  );
}
