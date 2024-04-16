import { MetaFunction, LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { ReactNode } from "react";

//import Error from './components/Error';
import styles from "~/tailwind.css?url";
import { routeData } from "~/utils/routeData";

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

export function Layout({ children }: { children: ReactNode }) {
  return (
    <html className="h-full" lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#c34138" />
        <Meta />
        <Links />
      </head>
      <body className="h-full relative flex flex-col">
        <a
          href="#main"
          className="transition left-0 bg-white rounded-md absolute py-1 px-2 text-sm border-slate-900 m-3 -translate-y-16 focus:translate-y-0 z-50"
        >
          Skip to main content
        </a>
        {children}
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}

export default function App() {
  return <Outlet />;
}
