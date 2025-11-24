import "./global.css";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next";
import { FumadocsRootProvider } from "../components/fumadocs-root-provider";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html className={inter.className} lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <FumadocsRootProvider>
          <NuqsAdapter>{children}</NuqsAdapter>
        </FumadocsRootProvider>
      </body>
    </html>
  );
}
