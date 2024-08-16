import { Outlet } from "@remix-run/react";
import { Suspense, lazy } from "react";

import Footer from "./Footer";
import Header from "./Header";
const Animation = lazy(() => import("../../components/Animation"));

export default function Layout() {
  return (
    <>
      <Suspense>
        <Animation />
      </Suspense>
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
