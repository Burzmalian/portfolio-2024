import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useRouteLoaderData,
} from "@remix-run/react";
import { MetaFunction, LinksFunction, LoaderFunctionArgs } from "@vercel/remix";
import { SpeedInsights } from "@vercel/speed-insights/remix";
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
      (route) => route.route === location.pathname,
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
      themeAction="/action/set-theme"
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
        <meta name="theme-color" content="#000000" />
        <title>Oh no! Error Page</title>
        <Meta />
        <Links />
      </head>
      <body className="relative h-full">
        {/* <Error error={error} /> */}
        <Scripts />
        <SpeedInsights />
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
        <meta name="theme-color" content="#000000" />
        <Meta />
        <Links />
      </head>
      <body className="relative flex h-full flex-col" suppressHydrationWarning>
        <a
          href="#main"
          className="absolute left-0 z-50 m-3 -translate-y-16 rounded-md border bg-popover px-2 py-1 text-sm text-popover-foreground transition focus:translate-y-0"
        >
          Skip to main content
        </a>
        {children}
        <ScrollRestoration />
        <PreventFlashOnWrongTheme ssrTheme={ssrTheme} />
        <SpeedInsights />
        <Scripts />
      </body>
    </html>
  );
}
