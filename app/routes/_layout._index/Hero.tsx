import { Container } from "~/components/Container";

export const Hero = () => {
  return (
    <Container className="bg-background">
      <Container.Inner>
        <div className="flex flex-col max-w-3xl">
          <img
            className="inline-block h-14 w-14 rounded-full mb-3"
            src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
            alt=""
          />
          <h1 className="flex flex-col gap-3.5 text-5xl font-bold tracking-tight text-foreground sm:text-6xl">
            Gyles Fohl
            <span className="text-2xl sm:text-4xl">UX Engineer</span>
          </h1>
          <p className="mt-5 text-xl leading-8 text-muted-foreground">
            I am Gyles Fohl, a software engineer based out of Minneapolis. I
            have 10+ years of experience, and love building things that are
            performant, usable, accessible, and beautiful.
          </p>
        </div>
      </Container.Inner>
    </Container>
  );
};
