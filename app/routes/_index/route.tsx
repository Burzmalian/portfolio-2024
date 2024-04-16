import { Outlet } from "@remix-run/react";

export default function Home() {
  return (
    <>
      Header
      <Outlet />
      Footer
    </>
  );
}
