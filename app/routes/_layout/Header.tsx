import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink } from "@remix-run/react";
import { useState } from "react";

import { ThemeToggle } from "~/components/ThemeToggle";
import { routeData, navigationData } from "~/utils/routeData";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl p-6 md:px-8" aria-label="Global">
        <div className="flex flex-1 md:justify-center">
          <div className="hidden items-center md:flex md:gap-x-12">
            {navigationData.map((item) => (
              <Link
                key={item.name}
                to={item.route}
                className="text-sm font-semibold leading-6 text-foreground"
              >
                {item.name}
              </Link>
            ))}
            <ThemeToggle />
          </div>
          <div className="flex md:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center rounded-md p-2.5 text-foreground"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
        <Link to={routeData.home.route} className="-m-1.5 p-1.5">
          <span className="sr-only">{routeData.home.title}</span>
        </Link>
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-background px-6 py-6">
          <div className="flex items-center justify-between">
            <div className="flex flex-1">
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-foreground"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <Link to={routeData.home.route} className="-m-1.5 p-1.5">
              <span className="sr-only">{routeData.home.title}</span>
            </Link>
          </div>
          <div className="mt-6 space-y-2">
            {navigationData.map((item) => (
              <NavLink
                key={item.name}
                to={item.route}
                className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-foreground hover:bg-accent"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
};

export default Header;
