"use client";

import { Badge, Button, cn, Popover, PopoverTrigger } from "@mijn-ui/react";
import { PopoverContent } from "fumadocs-ui/components/ui/popover";
import { Menu } from "lucide-react";
import Link from "next/link";
import { useScrollActive } from "@/hooks/use-scroll-active";
import Logo from "./logo";
import ThemeToggler from "./theme-toggler";

const Navbar = () => {
  const isSidebarActive = useScrollActive();

  return (
    <header
      className={cn(
        "fixed z-50 h-14 w-full",
        isSidebarActive && "bg-bg-default/10 backdrop-blur"
      )}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 z-50 text-fg-default"
      >
        <div className="-inset-x-20 absolute bottom-0 h-px">
          <div className="-inset-x-20 absolute bottom-px h-px opacity-35 dark:opacity-15">
            <svg className="size-full" preserveAspectRatio="none">
              <line
                stroke="currentColor"
                strokeDasharray="1 3"
                strokeWidth="2"
                x1="0"
                x2="100%"
                y1="0"
                y2="0"
              />
            </svg>
          </div>
        </div>
      </div>

      <nav className="mx-auto flex h-full w-full max-w-7xl items-center justify-between px-6">
        <div className="flex items-center gap-3">
          <Link
            className="flex items-center gap-2 font-bold text-fg-default text-lg"
            href={"/"}
          >
            <Logo className="size-5 items-center fill-fg-default" />
            MijnUI
          </Link>
          <Badge radius="full" variant="primary-subtle">
            v0.1.0
          </Badge>
        </div>

        <div className="flex items-center sm:gap-4">
          <ul className="hidden items-center gap-4 text-fg-secondary text-sm sm:flex">
            <li className="hover:text-fg-default">
              <Link href={"/docs"}>Documentations</Link>
            </li>
            <li className="hover:text-fg-default">
              <Link href={"/templates"}>Templates & Blocks</Link>
            </li>
          </ul>
          <ThemeToggler />

          <Popover>
            <PopoverTrigger asChild className="sm:hidden">
              <Button iconOnly variant="ghost">
                <Menu className="size-4 text-fd-fg-tertiary" />
              </Button>
            </PopoverTrigger>
            <PopoverContent align="end">
              <div className="flex flex-col gap-2 text-fg-secondary text-sm">
                <Link href={"/docs"}>Documentations</Link>
                <Link href={"/templates"}>Templates & Blocks</Link>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </nav>
    </header>
  );
};

export { Navbar };
