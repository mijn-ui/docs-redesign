import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import ThemeToggler from "../components/theme-toggler";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <DocsLayout
      containerProps={{
        className:
          "[&_#nd-toc]:bg-bg-secondary  [&_#nd-toc]:py-12 [&_#nd-toc]:pl-6 [&_#nd-toc]:!top-28 [&_#nd-toc]:sticky",
      }}
      githubUrl="https://github.com/mijn-ui/mijn-ui-react"
      sidebar={{
        banner: <SidebarDashedBorder />,
        collapsible: false,
      }}
      themeSwitch={{
        component: <ThemeToggler />,
      }}
      tree={source.pageTree}
      {...baseOptions()}
    >
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-50 hidden text-fg-default md:block"
      >
        <div className="-inset-x-20 absolute top-(--fd-nav-height) h-px">
          <div className="-inset-x-20 absolute top-px h-px opacity-35 dark:opacity-15">
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
      {children}
    </DocsLayout>
  );
}

const SidebarDashedBorder = () => (
  <>
    <div className="my-0 md:my-2" />
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-50 hidden text-fg-default md:block"
    >
      <div className="absolute inset-y-0 left-(--fd-layout-offset) hidden w-px lg:block">
        <div className="absolute inset-y-0 w-px opacity-40 dark:opacity-15">
          <svg className="size-full" preserveAspectRatio="none">
            <line
              stroke="currentColor"
              strokeDasharray="1 3"
              strokeWidth={2}
              x1={0}
              x2={0}
              y1={0}
              y2="100%"
            />
          </svg>
        </div>
      </div>
      <div aria-hidden className="absolute inset-y-0 right-px w-px">
        <div className="absolute inset-y-0 w-px opacity-40 dark:opacity-15">
          <svg className="size-full" preserveAspectRatio="none">
            <line
              stroke="currentColor"
              strokeDasharray="1 3"
              strokeWidth={2}
              x1={0}
              x2={0}
              y1={0}
              y2="100%"
            />
          </svg>
        </div>
      </div>
    </div>
  </>
);
