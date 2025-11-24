"use client";

import { Button, type ButtonProps } from "@mijn-ui/react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Icons } from "./icons";

/* -------------------------------------------------------------------------- */

const ThemeToggler = ({ ...props }: ButtonProps) => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return;

  if (resolvedTheme === "dark") {
    return (
      <Button
        className="cursor-pointer rounded-full hover:bg-fd-accent"
        iconOnly
        onClick={() => setTheme("light")}
        size="sm"
        variant="ghost"
        {...props}
      >
        <Icons.sun className="text-fd-muted-foreground text-lg" />
      </Button>
    );
  }
  if (resolvedTheme === "light") {
    return (
      <Button
        className="cursor-pointer rounded-full hover:bg-fd-accent"
        iconOnly
        onClick={() => setTheme("dark")}
        size="sm"
        variant="ghost"
        {...props}
      >
        <Icons.moon className="text-fd-muted-foreground text-lg" />
      </Button>
    );
  }
};

export default ThemeToggler;
