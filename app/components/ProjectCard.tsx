import { ReactNode } from "react";

type ProjectCardProps = {
  title: string;
  href: string;
  description: string;
  imageUrl: string;
  company: {
    name: string;
    role: string;
    logo: ReactNode;
  };
};

export const ProjectCard = (props: ProjectCardProps) => {
  const { title, href, description, imageUrl, company } = props;

  return (
    <article className="flex flex-col items-start">
      <div className="relative w-full">
        <img
          src={imageUrl}
          alt=""
          className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
        />
        <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
      </div>
      <div className="max-w-xl flex flex-col w-full h-full justify-between">
        <div className="group relative">
          <h3 className="mt-3 text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
            <a href={href}>
              <span className="absolute inset-0" />
              {title}
            </a>
          </h3>
          <p className="mt-3 line-clamp-3 text-sm leading-6 text-gray-600">
            {description}
          </p>
        </div>
        <div className="relative mt-8 flex items-center gap-x-4">
          <div className="h-10 w-10 rounded-full bg-slate-200 flex items-center justify-center text-2xl">
            {company.logo}
          </div>
          <div className="text-sm leading-6">
            <p className="font-semibold text-gray-900">{company.name}</p>
            <p className="text-gray-600">{company.role}</p>
          </div>
        </div>
      </div>
    </article>
  );
};
