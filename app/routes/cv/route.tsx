export default function CV() {
  return (
    <div className="px-11 py-10 grid md:grid-cols-[2.9fr_1.1fr] gap-5 mx-auto max-w-7xl">
      <div className="flex flex-col gap-2">
        <h1 className="text-4xl font-bold">Gyles Fohl</h1>
        <p className="text-lg">Senior Software Engineer</p>
        <p className="text-sm">
          Efficient professional with 12+ years of experience and a record of
          building production ready web applications. Has an art background,
          great communication skills, and a passion for creating things that are
          accessible and performant.
        </p>
      </div>

      <ul className="text-sm font-bold self-end">
        <li>gylesfohl@gmail.com</li>
        <li>linkedin.com/in/gylesfohl</li>
        <li>github.com/Burzmalian</li>
        <li>(612) 850-7984</li>
        <li>Minneapolis, MN</li>
      </ul>

      <div>
        <h2 className="font-bold text-lg border-b text-indigo-700 border-indigo-600 mb-2">
          Experience
        </h2>
        <div className="mb-3">
          <h3 className="text-lg">
            <strong>Microsoft</strong> - Senior Software Engineer
          </h3>
          <p className="text-xs mb-1.5">
            July 2020 - July 2024, Minneapolis MN
          </p>
          <ul className="list-disc text-sm pl-6 flex flex-col gap-1.5">
            <li>
              As part of the Bing Pros team, I led UX efforts in our Bing Search
              Answer. Creating A/B testing, telemetry workflows, and improved
              performance. Also contributed to the Bing Pros Vertical by writing
              features, reviewing and maintaining ux reusability in
              React/C#/.Net.
            </li>
            <li>
              As part of the TakeLessons team, I led efforts to create a
              reusable component library using Storybook and React. Also led
              performance improvement efforts, reducing js bundles by 500kb,
              reducing TTFB by 31%, and reducing LCP by 25%. Also lead
              performance centric weekly meetings with team.
            </li>
            <li>
              As part of the Flip team, I contributed to migrating our React
              design system to Typescript, building various components, and
              improving app performance by reducing bundle size by over 1mb. As
              part of the core feature crew, we rebuilt the app using Remix,
              established code patterns, documentation, and onboarded developers
              to the project. I also lead a weekly dev meeting as a place to
              share new learnings.
            </li>
            <li>
              Track record of mentoring, code pairing, and thoughtful code
              reviewing with team members.
            </li>
          </ul>
        </div>

        <div className="mb-3">
          <h3 className="text-lg">
            <strong>Thomson Reuters</strong> - Senior Web Engineer
          </h3>
          <p className="text-xs mb-1.5">Dec 2012 - July 2020, Eagan MN</p>
          <ul className="list-disc text-sm pl-6 flex flex-col gap-1.5">
            <li>
              Built a React based component library/design system implemented in
              Adobe Experience Manager.
            </li>
            <li>
              Developed and maintained themes, plugins, environments, repos, and
              CI for the Thomson Reuters Blog Network using WordPress and WP
              Engine.
            </li>
            <li>
              Contributed to efforts for standardizing best practices of UX,
              performance, SEO, and Accessibility.
            </li>
            <li>
              Evaluate code to ensure that it is valid, properly structured,
              meets industry standards, and is compatible with browsers,
              devices, or operating systems.
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg">
            <strong>J. Murphy & Associates</strong> - Web Developer
          </h3>
          <p className="text-xs mb-1.5">Nov 2011 - Dec 2012</p>
          <ul className="list-disc text-sm pl-6 flex flex-col gap-1">
            <li>Programmed custom WordPress themes and plugins.</li>
            <li>Developed responsive sites true to given designs.</li>
            <li>
              Consulted directly with clients on multiple projects to achieve
              desired results within budgetary restraints.
            </li>
          </ul>
        </div>
      </div>
      <div>
        <h2 className="font-bold text-lg border-b text-indigo-700 border-indigo-600 mb-2">
          Skills
        </h2>
        <ul className="text-sm flex flex-col gap-1.5 mb-4">
          <li>Typescript/Javascript</li>
          <li>HTML5</li>
          <li>CSS/Sass/Less/PostCSS</li>
          <li>React/Next/Remix</li>
          <li>Design Systems</li>
          <li>Component libraries</li>
          <li>Node/NPM</li>
          <li>PHP</li>
          <li>Performance Optimization</li>
          <li>UX Optimization</li>
          <li>Accessibility</li>
          <li>Responsive Design</li>
          <li>DX Tooling (Vite/Webpack/Rollup)</li>
          <li>CI (Github actions/Azure pipelines)</li>
          <li>i18n/Localization</li>
          <li>Git</li>
          <li>Browser/Device Compatibility</li>
          <li>Technical SEO/Schema</li>
          <li>Telemetry Integrations</li>
        </ul>
        <h2 className="font-bold text-lg border-b text-indigo-700 border-indigo-600 mb-2">
          Education
        </h2>
        <p>University of Minnesota, Morris - Bachelor of Arts/Studio Art</p>
        <p className="text-xs">May 2006</p>
      </div>
    </div>
  );
}
