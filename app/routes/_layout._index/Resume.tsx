import { ArrowRightIcon, BriefcaseIcon } from "@heroicons/react/24/outline";
import { Button } from "gyles-ui";

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
      <div className="relative mt-1 flex h-10 w-10 flex-none items-center justify-center rounded-full ring-1 ring-zinc-900/5">
        {/* <Image src={role.logo} alt="" className="h-7 w-7" unoptimized /> */}
      </div>
      <dl className="flex flex-auto flex-wrap gap-x-2">
        <dt className="sr-only">Company</dt>
        <dd className="w-full flex-none text-sm font-medium  ">
          {role.company}
        </dd>
        <dt className="sr-only">Role</dt>
        <dd className="text-xs text-slate-500 ">{role.title}</dd>
        <dt className="sr-only">Date</dt>
        <dd
          className="ml-auto text-xs text-slate-400 "
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

export const Resume = () => {
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
    <div className="rounded-2xl border border-slate-300 p-6">
      <h2 className="flex text-sm font-semibold text-zinc-900">
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
        className="group mt-6 w-full border-slate-300 text-slate-800"
      >
        Go to CV
        <ArrowRightIcon className="h-4 w-4 stroke-slate-400 transition group-active:stroke-zinc-600 " />
      </Button>
    </div>
  );
};
