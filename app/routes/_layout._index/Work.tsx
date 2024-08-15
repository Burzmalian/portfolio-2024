import { ArrowRightIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { Link } from "gyles-ui";

import { LogoMicosoft as Logo } from "~/components/LogoMicrosoft";
import { LogoTR } from "~/components/LogoTR";

export const Work = () => {
  const resume: Array<Role> = [
    {
      company: "Microsoft",
      title: "Senior Software Engineer",
      logo: <Logo />,
      start: "2022",
      end: "2024",
    },
    {
      company: "Microsoft",
      title: "Software Engineer II",
      logo: <Logo />,
      start: "2020",
      end: "2022",
    },
    {
      company: "Thomson Reuters",
      title: "Senior Web Engineer",
      logo: <LogoTR />,
      start: "2012",
      end: "2020",
    },
    {
      company: "J. Murphy & Associates",
      title: "Web Developer",
      //logo: logoStarbucks,
      start: "2011",
      end: "2012",
    },
  ];

  return (
    <div className="bg-card text-card-foreground basis-80 shrink-0 grow">
      <h2 className="flex text-sm font-semibold">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Link
        href="/cv"
        className="inline-flex items-center gap-2.5 px-3 rounded-md font-bold py-2 mt-6 bg-primary text-primary-foreground hover:bg-primary/90"
      >
        Go to CV
        <ArrowRightIcon className="h-4 w-4" />
      </Link>
    </div>
  );
};

type Role = {
  company: string;
  title: string;
  logo?: React.ReactNode;
  start: string | { label: string; dateTime: string };
  end: string | { label: string; dateTime: string };
};

function Role({ role }: { role: Role }) {
  const startLabel =
    typeof role.start === "string" ? role.start : role.start.label;
  const startDate =
    typeof role.start === "string" ? role.start : role.start.dateTime;

  const endLabel = typeof role.end === "string" ? role.end : role.end.label;
  const endDate = typeof role.end === "string" ? role.end : role.end.dateTime;

  return (
    <li className="flex gap-4">
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full bg-muted text-lg">
        {role.logo}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium text-card-foreground">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-muted-foreground">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-muted-foreground"
          aria-label={`${startLabel} until ${endLabel}`}
        >
          <time dateTime={startDate}>{startLabel}</time>{" "}
          <span aria-hidden="true">—</span>{" "}
          <time dateTime={endDate}>{endLabel}</time>
        </dd>
      </dl>
    </li>
  );
}
