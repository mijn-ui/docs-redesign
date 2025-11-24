// biome-ignore-all lint/style/noNestedTernary: off

import {
  Badge,
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  cn,
  Separator,
} from "@mijn-ui/react";
import { findNeighbour } from "fumadocs-core/page-tree";
import { DocsLayout } from "fumadocs-ui/layouts/notebook";
import { createRelativeLink } from "fumadocs-ui/mdx";
import {
  DocsBody,
  DocsDescription,
  DocsPage,
  DocsTitle,
} from "fumadocs-ui/page";
import { ArrowLeft, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Footer } from "@/components/footer";
import Logo from "@/components/logo";
import ThemeToggler from "@/components/theme-toggler";
import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: PageProps<"/docs/[...slug]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const neighbours = findNeighbour(source.pageTree, page.url);
  const MDX = page.data.body;

  return (
    <>
      <DocsLayout
        containerProps={{
          className:
            "[&_#nd-toc]:bg-fd-secondary  [&_#nd-toc]:py-12 [&_#nd-toc]:pl-6 [&_#nd-toc]:!top-28 [&_#nd-toc]:sticky",
        }}
        githubUrl="https://github.com/mijn-ui/mijn-ui-react"
        nav={{
          title: (
            <div className="flex items-center gap-3 md:mb-8">
              <span className="flex items-center gap-2 font-bold text-fg-default text-lg">
                <Logo className="size-5 items-center fill-fg-default" />
                MijnUI
              </span>
              <Badge radius="full" variant="primary-subtle">
                v0.1.0
              </Badge>
            </div>
          ),
          transparentMode: "always",
        }}
        sidebar={{
          banner: <SidebarDashedBorder />,
          collapsible: false,
        }}
        themeSwitch={{
          component: <ThemeToggler />,
        }}
        tree={source.pageTree}
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
        <DocsPage
          article={{
            className: "py-4 md:py-8",
          }}
          container={{
            className: "pe-0 relative gap-16 items-start",
          }}
          footer={{
            component: (
              <div
                className={cn(
                  "not-prose mt-16 flex w-full items-start gap-4",
                  neighbours.previous && neighbours.next
                    ? "justify-start"
                    : neighbours.previous
                      ? "justify-start"
                      : neighbours.next
                        ? "justify-end"
                        : "justify-center"
                )}
              >
                {neighbours.previous && (
                  <Link
                    className="block h-full w-full max-w-md"
                    href={neighbours.previous.url}
                  >
                    <Card className="hover:-translate-y-1 relative w-full max-w-md bg-fd-secondary shadow-xs transition-transform duration-150">
                      <div className="-translate-y-1/2 absolute top-1/2 left-4 text-fd-muted-foreground">
                        <ArrowLeft className="size-5 sm:size-6" />
                      </div>
                      <CardContent className="p-4! pl-12! sm:space-y-2">
                        <CardTitle className="font-medium text-base text-fd-foreground/80 sm:text-xl">
                          {neighbours.previous.name}
                        </CardTitle>
                        <CardDescription className="hidden font-normal text-fd-muted-foreground sm:block">
                          <p className="line-clamp-1 w-full">
                            {neighbours.previous.description}
                          </p>
                        </CardDescription>
                      </CardContent>
                    </Card>
                  </Link>
                )}
                {neighbours.next && (
                  <Link
                    className="block h-full w-full max-w-md"
                    href={neighbours.next.url}
                  >
                    <Card className="hover:-translate-y-1 relative w-full max-w-md bg-fd-secondary shadow-xs transition-transform duration-150">
                      <CardContent className="p-4! pr-12! sm:space-y-2">
                        <CardTitle className="font-medium text-base text-fd-foreground/80 sm:text-xl">
                          {neighbours.next.name}
                        </CardTitle>
                        <CardDescription className="hidden font-normal text-fd-muted-foreground sm:block">
                          <p className="line-clamp-1 w-full">
                            {neighbours.next.description}
                          </p>
                        </CardDescription>
                      </CardContent>
                      <div className="-translate-y-1/2 absolute top-1/2 right-4 text-fd-muted-foreground">
                        <ArrowRight className="size-5 sm:size-6" />
                      </div>
                    </Card>
                  </Link>
                )}
              </div>
            ),
          }}
          full={false}
          tableOfContent={{
            style: "clerk",
            single: false,
          }}
          toc={page.data.toc}
        >
          <div className="space-y-2 pb-8">
            <DocsTitle className="text-fd-foreground">
              {page.data.title}
            </DocsTitle>
            <DocsDescription className="text-fd-muted-foreground">
              {page.data.description}
            </DocsDescription>
            <Separator />
          </div>
          <DocsBody>
            <MDX
              components={getMDXComponents({
                // this allows you to link to other pages with relative file paths
                a: createRelativeLink(source, page),
              })}
            />
          </DocsBody>
        </DocsPage>
      </DocsLayout>

      <Footer className="relative mt-16 pl-[calc(var(--fd-layout-offset)+var(--fd-sidebar-width))]" />
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

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[...slug]">
): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
    openGraph: {
      images: getPageImage(page).url,
    },
  };
}
