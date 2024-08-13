import {
  MetaFunction,
  LinksFunction,
  LoaderFunctionArgs,
} from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "@remix-run/react";
import {
  PreventFlashOnWrongTheme,
  Theme,
  ThemeProvider,
  useTheme,
} from "remix-themes";

import { themeSessionResolver } from "./sessions.server";
// import Error from './components/Error';
import styles from "~/tailwind.css?url";
import { routeData } from "~/utils/routeData";

// Return the theme from the session storage using the loader
export async function loader({ request }: LoaderFunctionArgs) {
  const { getTheme } = await themeSessionResolver(request);
  return {
    theme: getTheme(),
  };
}

// This handles titles and descriptions for every page from centralized routeData
export const meta: MetaFunction = ({ location }) => {
  const { title, description } =
    Object.values(routeData).find(
      (route) => route.route === location.pathname
    ) || {};
  return [{ title: title }, { name: "description", content: description }];
};

export const links: LinksFunction = () => [
  // { rel: 'icon', href: '/favicons/favicon.ico', sizes: '32x32' },
  // { rel: 'icon', href: '/favicons/favicon.svg', type: 'image/svg+xml' },
  // { rel: 'apple-touch-icon', href: '/favicons/favicon-180.png' },
  // { rel: 'manifest', href: '/favicons/manifest.webmanifest' },
  // Tailwind global stylesheet
  { rel: "stylesheet", href: styles },
];

export function Layout({ children }: { children: React.ReactNode }) {
  const data = useRouteLoaderData<typeof loader>("root");

  return (
    <ThemeProvider
      specifiedTheme={data?.theme as Theme}
      themeAction="/resources/set-theme"
    >
      <InnerLayout ssrTheme={Boolean(data?.theme)}>{children}</InnerLayout>
    </ThemeProvider>
  );
}

export default function App() {
  return <Outlet />;
}

export function ErrorBoundary() {
  // const error = useRouteError() as ErrorResponse;
  return (
    <html className="h-full" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c34138" />
        <title>Oh no! Error Page</title>
        <Meta />
        <Links />
      </head>
      <body className="h-full relative">
        {/* <Error error={error} /> */}
        <Scripts />
      </body>
    </html>
  );
}

export function HydrateFallback() {
  return <h1>Loading...</h1>;
}

export function InnerLayout({
  ssrTheme,
  children,
}: {
  ssrTheme: boolean;
  children: React.ReactNode;
}) {
  const [theme] = useTheme();

  return (
    <html data-theme={theme} className={theme ?? "h-full"} lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c34138" />
        <Meta />
        <Links />
      </head>
      <body className="h-full relative flex flex-col" suppressHydrationWarning>
        <a
          href="#main"
          className="transition left-0 bg-white rounded-md absolute py-1 px-2 text-sm border-slate-900 m-3 -translate-y-16 focus:translate-y-0 z-50"
        >
          Skip to main content
        </a>
        {children}
        <ScrollRestoration />
        <PreventFlashOnWrongTheme ssrTheme={ssrTheme} />
        <Scripts />
      </body>
    </html>
  );
}
