"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import dynamic from "next/dynamic";
import type { ReactNode } from "react";

const SearchDialog = dynamic(
  () => import("@/components/mdx-search").then((mod) => mod.MdxSearch),
  {
    ssr: false,
  }
);

const FumadocsRootProvider = ({ children }: { children: ReactNode }) => (
  <RootProvider
    search={{
      SearchDialog,
    }}
  >
    {children}
  </RootProvider>
);

export { FumadocsRootProvider };
