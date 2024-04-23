import { Outlet } from "@remix-run/react";

import Footer from "./Footer";
import Header from "./Header";

export default function Layout() {
  return (
    <>
      <Header />
      <div className="flex-grow">
        <Outlet />
      </div>
      <Footer />
    </>
  );
}
