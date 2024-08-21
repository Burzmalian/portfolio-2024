import { Image } from "@unpic/react";

import gyles from "../../assets/gyles-fohl.jpg";
import { Container } from "~/components/Container";

export const Hero = () => {
  return (
    <Container className="">
      <Container.Inner>
        <div className="flex max-w-3xl flex-col">
          <Image
            src={gyles}
            alt="Gyles Fohl Portrait"
            width={56}
            height={56}
            priority
            className="mb-3 inline-block h-14 w-14 rounded-full"
            cdn="vercel"
          />
          <h1 className="flex flex-col gap-3.5 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Gyles Fohl
            <span className="text-2xl sm:text-4xl">UX Engineer</span>
          </h1>
          <p className="mt-5 text-xl leading-8 text-muted-foreground">
            I am Gyles Fohl, a software engineer based out of Minneapolis. I
            have 12+ years of experience, and love building things that are
            performant, usable, accessible, and beautiful. I specialize in
            building design systems and component libraries.
          </p>
        </div>
      </Container.Inner>
    </Container>
  );
};
