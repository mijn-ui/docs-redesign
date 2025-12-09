import {
  Badge,
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react";
import { ArrowLeft, ArrowRight, Code2, Palette, Server } from "lucide-react";
import Link from "next/link";
import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";

const Docs = () => (
  <div className="flex w-full flex-col md:h-screen" id="nd-docs-layout">
    <Navbar />
    <main className="flex h-full justify-center pt-12 pb-20 lg:pt-44">
      <div className="max-w-7xl px-5">
        <Link
          className="mb-2 flex w-fit items-center gap-1 text-fg-brand text-sm underline hover:text-fg-default"
          href={"/"}
        >
          <ArrowLeft />
          Go Back Home
        </Link>

        <h1 className="mb-2 bg-linear-to-br from-fg-default to-fg-secondary/70 bg-clip-text font-bold text-3xl/[1.2] text-transparent xs:text-4xl/[1.2] tracking-tight sm:font-extrabold md:text-5xl/[1.2]">
          Component Library Documentation
        </h1>
        <p className="mb-8 max-w-3xl px-2 text-fg-secondary text-sm md:text-base">
          Choose your preferred technology stack to get started with our
          component library.
        </p>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          <Link
            className="rounded-lg outline-none ring-offset-2 ring-offset-bg-default focus-within:ring-2 focus-within:ring-outline-brand"
            href="/docs/react"
          >
            <Card className="overflow-hidden bg-fd-default transition-shadow hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge radius="full" variant="subtle" color="brand">
                    Beta v0.1.0
                  </Badge>
                  <Code2 className="size-6 text-blue-500" />
                </div>
                <CardTitle className="mt-2 text-2xl">React</CardTitle>
                <CardDescription>
                  Modern component library for React applications
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mt-0.5 mr-2 rounded-full bg-blue-100 p-1">
                      <svg
                        className="size-3 text-blue-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>25+ reusable components</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-0.5 mr-2 rounded-full bg-blue-100 p-1">
                      <svg
                        className="size-3 text-blue-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>TypeScript support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-0.5 mr-2 rounded-full bg-blue-100 p-1">
                      <svg
                        className="size-3 text-blue-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Hooks and utilities</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-blue-600 text-white hover:bg-blue-700">
                  View React Docs <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <Link
            className="rounded-lg outline-none ring-offset-2 ring-offset-bg-default focus-within:ring-2 focus-within:ring-outline-default"
            href="/docs/tailwind"
          >
            <Card className="pointer-events-none overflow-hidden bg-fd-default transition-shadow hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge radius="full" variant="subtle" color="brand">
                    Beta v0.1.0
                  </Badge>
                  <Palette className="size-6 text-teal-500" />
                </div>
                <CardTitle className="mt-2 text-2xl">Tailwind CSS</CardTitle>
                <CardDescription>
                  Utility-first components and design system
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mt-0.5 mr-2 rounded-full bg-teal-100 p-1">
                      <svg
                        className="size-3 text-teal-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Customizable design tokens</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-0.5 mr-2 rounded-full bg-teal-100 p-1">
                      <svg
                        className="size-3 text-teal-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Dark mode support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-0.5 mr-2 rounded-full bg-teal-100 p-1">
                      <svg
                        className="size-3 text-teal-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Responsive variants</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-teal-600 text-white hover:bg-teal-700">
                  View Tailwind Docs <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
          </Link>

          <a
            href={"http://laravel.mijnui.com/"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <Card className="overflow-hidden bg-fd-default transition-shadow hover:shadow-lg">
              <CardHeader className="pb-4">
                <div className="flex items-center justify-between">
                  <Badge radius="full" variant="filled" color="brand">
                    Beta v0.1.0
                  </Badge>
                  <Server className="size-6 text-red-500" />
                </div>
                <CardTitle className="mt-2 text-2xl">Laravel</CardTitle>
                <CardDescription>
                  Prebuilt UI components for TALL stack (Tailwind, Alpine.js,
                  Livewire, Laravel)
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start">
                    <span className="mt-0.5 mr-2 rounded-full bg-red-100 p-1">
                      <svg
                        className="size-3 text-red-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Tailwind UI styling</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-0.5 mr-2 rounded-full bg-red-100 p-1">
                      <svg
                        className="size-3 text-red-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Alpine.js interactivity </span>
                  </li>
                  <li className="flex items-start">
                    <span className="mt-0.5 mr-2 rounded-full bg-red-100 p-1">
                      <svg
                        className="size-3 text-red-700"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          clipRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          fillRule="evenodd"
                        />
                      </svg>
                    </span>
                    <span>Livewire-ready components</span>
                  </li>
                </ul>
              </CardContent>
              <CardFooter>
                <Button className="w-full bg-red-600 text-white hover:bg-red-700">
                  View Laravel Docs <ArrowRight className="ml-2 size-4" />
                </Button>
              </CardFooter>
            </Card>
          </a>
        </div>
      </div>
    </main>

    <Footer className="shrink-0 justify-center" />
  </div>
);

export default Docs;
