import "./global.css";
import { Inter } from "next/font/google";
import { NuqsAdapter } from "nuqs/adapters/next";
import { baseUrl, createMetadata } from "@/lib/metadata";
import { FumadocsRootProvider } from "../components/fumadocs-root-provider";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata = createMetadata({
  title: {
    template: "%s | MijnUI",
    default: "MijnUI",
  },
  description:
    "MijnUI offers flexible, ready-to-use components for building marketing sites, dashboards, and e-commerce platforms.",
  metadataBase: baseUrl,
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
