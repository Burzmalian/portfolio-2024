import { LinkIcon } from "@heroicons/react/24/outline";

type ProjectCardProps = {
  title: string;
  href: string;
  description: string;
  logo: React.ReactNode;
  linkText: string;
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { title, href, description, logo, linkText } = props;

  return (
    <article className="group relative flex flex-col items-start rounded-md border p-6 hover:bg-background-2">
      <div className="flex h-full w-full max-w-xl flex-col justify-between">
        <div>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-foreground p-2.5 text-2xl">
            {logo}
          </div>
          <h3 className="mt-3 text-xl font-bold leading-6 text-card-foreground">
            <a href={href} target="_blank" rel="noreferrer">
              <span className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-muted-foreground">
            {description}
          </p>
        </div>
        <div className="mt-6 flex items-center gap-x-4">
          <div className="flex items-center gap-2 text-sm font-semibold leading-6 text-card-foreground">
            <LinkIcon className="h-4 w-4" />
            {linkText}
          </div>
        </div>
      </div>
    </article>
  );
};
