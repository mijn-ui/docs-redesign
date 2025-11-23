import "./global.css";
import { Inter } from "next/font/google";
import { FumadocsRootProvider } from "./components/fumadocs-root-provider";

const inter = Inter({
  subsets: ["latin"],
});

export default function Layout({ children }: LayoutProps<"/">) {
  return (
    <html className={inter.className} lang="en" suppressHydrationWarning>
      <body className="flex min-h-screen flex-col">
        <FumadocsRootProvider>{children}</FumadocsRootProvider>
      </body>
    </html>
  );
}
