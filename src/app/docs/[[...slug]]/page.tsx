// biome-ignore-all lint/style/noNestedTernary: off

import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
  Separator,
} from "@mijn-ui/react";
import { findNeighbour } from "fumadocs-core/page-tree";
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
import { cnBase } from "tailwind-variants";
import { getPageImage, source } from "@/lib/source";
import { getMDXComponents } from "@/mdx-components";

export default async function Page(props: PageProps<"/docs/[[...slug]]">) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const neighbours = findNeighbour(source.pageTree, page.url);
  const MDX = page.data.body;

  return (
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
            className={cnBase(
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
        <DocsTitle className="text-fd-foreground">{page.data.title}</DocsTitle>
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
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(
  props: PageProps<"/docs/[[...slug]]">
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
