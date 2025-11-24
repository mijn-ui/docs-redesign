"use client";

import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Suspense } from "react";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { TemplateShowcase } from "./template-showcase";

const TemplatePage = () => (
  <>
    <Navbar />

    <main className="flex min-h-screen w-full justify-center pt-12 pb-20 text-start md:pt-32">
      <div className="w-full max-w-7xl px-5">
        <Link
          className="mb-2 flex w-fit items-center gap-1 text-fg-brand text-sm underline hover:text-fg-default"
          href={"/"}
        >
          <ArrowLeft />
          Go Back Home
        </Link>
        <h1 className="bg-linear-to-br from-fg-default to-fg-secondary/70 bg-clip-text font-bold text-3xl/[1.2] text-transparent xs:text-4xl/[1.2] tracking-tight sm:font-extrabold md:text-5xl/[1.2]">
          Templates
        </h1>
        <p className="max-w-3xl px-2 text-left text-secondary-foreground text-sm md:text-base">
          These templates are currently in beta. They showcase the capabilities
          of our components and design system. More templates are coming soon,
          but we recommend not using them in production environments yet.
        </p>

        <Suspense
          fallback={
            <div className="px-5 py-8">
              <div>Loading...</div>
            </div>
          }
        >
          <TemplateShowcase />
        </Suspense>
      </div>
    </main>
    <Footer />
  </>
);

export default TemplatePage;
