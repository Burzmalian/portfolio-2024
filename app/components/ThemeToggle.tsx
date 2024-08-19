import { SunIcon, MoonIcon } from "@heroicons/react/24/outline";
import { Theme, useTheme } from "remix-themes";

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  return (
    <button
      type="button"
      className="rounded-full bg-muted p-2.5 text-muted-foreground"
      onClick={() => setTheme(theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT)}
    >
      {theme === Theme.LIGHT && <SunIcon className="h-4 w-4" />}
      {theme === Theme.DARK && <MoonIcon className="h-4 w-4" />}
      <span className="sr-only">Toggle theme</span>
    </button>
  );
}
