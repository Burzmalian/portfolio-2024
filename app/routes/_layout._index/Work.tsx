import { ArrowRightIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { Button } from "gyles-ui";

export const Work = () => {
  const resume: Array<Role> = [
    {
      company: "Microsoft",
      title: "Senior Software Engineer",
      // logo: logoPlanetaria,
      start: "2019",
      end: {
        label: "Present",
        dateTime: new Date().getFullYear().toString(),
      },
    },
    {
      company: "Microsoft",
      title: "Software Engineer II",
      //logo: logoAirbnb,
      start: "2014",
      end: "2019",
    },
    {
      company: "Thomson Reuters",
      title: "Senior Web Engineer",
      //logo: logoFacebook,
      start: "2011",
      end: "2014",
    },
    {
      company: "J. Murphy & Associates",
      title: "Web Developer",
      //logo: logoStarbucks,
      start: "2008",
      end: "2011",
    },
  ];

  return (
    <div className="rounded-lg border bg-card text-card-foreground p-6">
      <h2 className="flex text-sm font-semibold">
        <BriefcaseIcon className="h-6 w-6 flex-none" />
        <span className="ml-3">Work</span>
      </h2>
      <ol className="mt-6 space-y-4">
        {resume.map((role, roleIndex) => (
          <Role key={roleIndex} role={role} />
        ))}
      </ol>
      <Button
        href="/cv"
        className="group mt-6 w-full bg-primary text-primary-foreground"
      >
        Go to CV
        <ArrowRightIcon className="h-4 w-4" />
      </Button>
    </div>
  );
};

type Role = {
  company: string;
  title: string;
  logo?: unknown;
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
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full shadow-md shadow-zinc-800/5 ring-1 ring-zinc-900/5 dark:border dark:border-zinc-700/50 dark:bg-zinc-800 dark:ring-0">
        {/* <Image src={role.logo} alt="" className="h-7 w-7" unoptimized /> */}
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
