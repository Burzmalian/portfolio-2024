import { Dialog, DialogPanel } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { NavLink } from "@remix-run/react";
import clsx from "clsx";
import { useState } from "react";

import { ThemeToggle } from "~/components/ThemeToggle";
import { navigationData } from "~/utils/routeData";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navClasses =
    "text-sm font-semibold leading-6 text-foreground rounded-lg px-3 py-2 hover:bg-accent";

  return (
    <header className="">
      <nav className="mx-auto flex max-w-7xl p-6 md:px-8" aria-label="Global">
        <div className="flex flex-1 md:justify-center">
          <div className="hidden items-center md:flex md:gap-x-12">
            {navigationData.map((item) => (
              <NavLink key={item.name} to={item.route} className={navClasses}>
                {item.name}
              </NavLink>
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
      </nav>
      <Dialog
        as="div"
        className="md:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 left-0 z-10 w-full overflow-y-auto bg-background px-6 py-6">
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
          </div>
          <div className="mt-6 space-y-2">
            {navigationData.map((item) => (
              <NavLink
                key={item.name}
                to={item.route}
                className={clsx("-mx-3 block", navClasses)}
              >
                {item.name}
              </NavLink>
            ))}
            <ThemeToggle />
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
};

export default Header;
