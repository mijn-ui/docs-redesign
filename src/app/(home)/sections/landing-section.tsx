import { Button } from "@mijn-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const LandingSection = () => (
  <section className="flex w-full max-w-4xl flex-col items-start text-left sm:items-center sm:text-center">
    <h1 className="bg-linear-to-br from-fg-default to-fg-secondary/70 bg-clip-text font-bold text-3xl/[1.2] text-transparent xs:text-4xl/[1.2] tracking-tight sm:font-extrabold md:text-5xl/[1.2]">
      Reusable components for clean, responsive interfaces.
    </h1>
    <div className="mt-4 font-medium text-base text-fg-secondary sm:text-base md:mt-6">
      <p className="hidden sm:block">
        A new and evolving library of reusable components—built with simplicity
        at its core and aiming <br /> to become flexible, high-performance
        solution for projects of all sizes.
      </p>

      <p className="block sm:hidden">
        A new and evolving library of reusable components—built with simplicity
        at its core and aiming to become flexible.
      </p>
    </div>
    <div className="mt-4 flex w-full flex-col justify-center gap-2 sm:flex-row md:mt-6">
      <Button asChild variant="primary">
        <Link href="/docs">Get Started</Link>
      </Button>
      <Button asChild>
        <Link href="https://blocks.mijnui.com">
          Explore Templates <ArrowRight className="ml-2 size-4" />
        </Link>
      </Button>
    </div>
  </section>
);

export default LandingSection;
