"use client";

import { RootProvider } from "fumadocs-ui/provider/next";
import type { ReactNode } from "react";
import { useMode } from "@/hooks/use-mode";

const FumadocsRootProvider = ({ children }: { children: ReactNode }) => (
  <RootProvider
    search={{
      options: {
        api: "/api/search",
        defaultTag: useMode() ?? "react",
        tags: [
          {
            name: "Next.js",
            value: "react",
          },
          {
            name: "Tailwind Css",
            value: "tailwind",
          },
        ],
      },
    }}
  >
    {children}
  </RootProvider>
);

export { FumadocsRootProvider };
