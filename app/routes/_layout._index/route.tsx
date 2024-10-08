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

      <Container className="">
        <Container.Inner>
          <div
            id="projects"
            className="flex flex-col justify-between gap-12 lg:flex-row"
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
