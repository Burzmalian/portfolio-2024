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
    <article className="flex flex-col items-start p-6 rounded-md group relative border hover:bg-background-2">
      <div className="max-w-xl flex flex-col w-full h-full justify-between">
        <div>
          <div className="h-10 w-10 rounded-full flex items-center bg-foreground p-2.5 justify-center text-2xl">
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
          <div className="text-sm leading-6 flex gap-2 items-center font-semibold text-card-foreground">
            <LinkIcon className="h-4 w-4" />
            {linkText}
          </div>
        </div>
      </div>
    </article>
  );
};
