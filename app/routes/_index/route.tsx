import { Outlet } from "@remix-run/react";

export default function Home() {
  return (
    <>
      <div className="bg-[red]">Header</div>
      <Outlet />
      Footer
    </>
  );
}
