import { DynamicCodeBlock } from "fumadocs-ui/components/dynamic-codeblock";
import { Loader2 } from "lucide-react";
import React from "react";
import { getSourceCode } from "@/lib/get-source-code";

type SourceCodeDisplayProps = {
  code: string;
  lang: string;
};

const SourceCodeDisplay = async ({ lang, code }: SourceCodeDisplayProps) => (
  <React.Suspense
    fallback={
      <div className="flex items-center rounded-md bg-background-alt p-4 text-muted-foreground text-sm">
        <Loader2 className="mr-2 size-4 animate-spin" />
        Loading...
      </div>
    }
  >
    <DynamicCodeBlock code={code} lang={lang} />
  </React.Suspense>
);

const LocalSourceCodeDisplay = async ({
  lang = "tsx",
  path,
}: {
  lang?: string;
  path: string;
}) => {
  const sourceCode = await getSourceCode({ type: "local", path });
  return <SourceCodeDisplay code={sourceCode} lang={lang} />;
};

const ReactSourceCodeDisplay = async ({
  lang = "tsx",
  path,
}: {
  lang?: string;
  path: string;
}) => {
  const sourceCode = await getSourceCode({ type: "react", path });
  return <SourceCodeDisplay code={sourceCode} lang={lang} />;
};

const TailwindSourceCodeDisplay = async ({
  lang = "html",
  path,
}: {
  lang?: string;
  path: string;
}) => {
  const sourceCode = await getSourceCode({ type: "tailwind", path });
  return <SourceCodeDisplay code={sourceCode} lang={lang} />;
};

const LaravelSourceCodeDisplay = async ({
  lang = "php",
  path,
}: {
  lang?: string;
  path: string;
}) => {
  const sourceCode = await getSourceCode({ type: "laravel", path });
  return <SourceCodeDisplay code={sourceCode} lang={lang} />;
};

export {
  SourceCodeDisplay,
  LocalSourceCodeDisplay,
  LaravelSourceCodeDisplay,
  ReactSourceCodeDisplay,
  TailwindSourceCodeDisplay,
};
