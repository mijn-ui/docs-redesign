import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { baseOptions } from "@/lib/layout.shared";
import { source } from "@/lib/source";
import { Footer } from "../components/footer";
import ThemeToggler from "../components/theme-toggler";

export default function Layout({ children }: LayoutProps<"/docs">) {
  return (
    <>
      <DocsLayout
        containerProps={{
          className:
            "[&_#nd-toc]:bg-fd-secondary  [&_#nd-toc]:py-12 [&_#nd-toc]:pl-6 [&_#nd-toc]:!top-28 [&_#nd-toc]:sticky",
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

      <Footer className="relative mt-16 pl-[calc(var(--fd-layout-offset)+var(--fd-sidebar-width))]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 z-50 hidden text-fg-default md:block"
        >
          <div className="absolute inset-x-0 top-0 h-px">
            <div className="absolute inset-x-0 top-px h-px opacity-35 dark:opacity-15">
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
        <p className="text-fd-muted-foreground text-xs sm:text-sm">
          Created by{" "}
          <a
            className="text-creator-brand underline"
            href="https://htetaunglin-coder.vercel.app/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Htet Aung Lin
          </a>{" "}
          at{" "}
          <a
            className="underline"
            href="https://www.linkedin.com/company/picoinno"
            rel="noopener noreferrer"
            target="_blank"
          >
            Pico
          </a>
        </p>
      </Footer>
    </>
  );
}

const SidebarDashedBorder = () => (
  <>
    <div
      aria-hidden
      className="pointer-events-none absolute inset-0 z-50 hidden text-fg-default md:block"
    >
      <div className="-bottom-20 absolute top-0 left-(--fd-layout-offset) hidden w-px lg:block">
        <div className="-bottom-20 absolute top-0 w-px opacity-40 dark:opacity-15">
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
      <div aria-hidden className="-bottom-20 absolute top-0 right-px w-px">
        <div className="-bottom-20 absolute top-0 w-px opacity-40 dark:opacity-15">
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
