import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Theme, useTheme } from "remix-themes";

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <button
      type="button"
      className="bg-muted text-muted-foreground rounded-full p-2.5"
      onClick={() => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
    >
      {theme === Theme.LIGHT && <SunIcon className="h-[1.2rem] w-[1.2rem]" />}
      {theme === Theme.DARK && <MoonIcon className="h-[1.2rem] w-[1.2rem]" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
