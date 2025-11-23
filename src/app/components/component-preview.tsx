import { Tabs, TabsContent, TabsList, TabsTrigger } from "@mijn-ui/react";
import { Loader2 } from "lucide-react";
import React from "react";
import { getSourceCode } from "@/lib/get-source-code";
import { getRegistryComponent } from "@/lib/registry";
import type { ReactComponent } from "@/registry/react";
import PreviewWrapper from "./preview-wrapper";
import { SourceCodeDisplay } from "./source-code-display";

interface ComponentPreviewProps extends React.ComponentPropsWithoutRef<"div"> {
  name: string;
  type: "react" | "tailwind";
  hideCode?: boolean;
}

const ComponentPreview = async ({
  name,
  type,
  hideCode = false,
  ...props
}: ComponentPreviewProps) => {
  const componentData = getRegistryComponent(name, type);

  if (!componentData) {
    return <ComponentNotFound name={name} type={type} />;
  }

  const sourceCode = await getSourceCode({
    type: "local",
    path: componentData.source,
  });

  if (!sourceCode) {
    return <ComponentNotFound name={name} type={type} />;
  }

  if (hideCode) {
    return (
      <PreviewWrapper {...props}>
        {type === "react" ? (
          <ReactPreview
            Component={(componentData as ReactComponent).component}
            name={name}
          />
        ) : (
          <TailwindPreview htmlContent={sourceCode} />
        )}
      </PreviewWrapper>
    );
  }

  return (
    <Tabs defaultValue="preview">
      <TabsList className="!bg-transparent mb-2 w-full justify-start rounded-none">
        <TabsTrigger value="preview">Preview</TabsTrigger>
        <TabsTrigger value="code">Code</TabsTrigger>
      </TabsList>

      <TabsContent value="preview">
        <PreviewWrapper {...props}>
          {type === "react" ? (
            <ReactPreview
              Component={(componentData as ReactComponent).component}
              name={name}
            />
          ) : (
            <TailwindPreview htmlContent={sourceCode} />
          )}
        </PreviewWrapper>
      </TabsContent>

      <TabsContent value="code">
        <SourceCodeDisplay
          code={sourceCode}
          lang={type === "react" ? "tsx" : "html"}
        />
      </TabsContent>
    </Tabs>
  );
};

const ReactPreview = ({
  Component,
  name,
}: {
  Component: any;
  name: string;
}) => (
  <React.Suspense fallback={<Loading />}>
    {Component ? <Component /> : <ComponentNotFound name={name} type="react" />}
  </React.Suspense>
);

const TailwindPreview = ({ htmlContent }: { htmlContent: string }) => (
  <div
    className="flex size-full items-center justify-center"
    // biome-ignore lint/security/noDangerouslySetInnerHtml: off
    dangerouslySetInnerHTML={{ __html: htmlContent }}
  />
);

const Loading = () => (
  <div className="flex items-center justify-center p-4 text-muted-foreground text-sm">
    <Loader2 className="mr-2 size-4 animate-spin" />
    Loading...
  </div>
);

const ComponentNotFound = ({ name, type }: { name: string; type?: string }) => (
  <PreviewWrapper>
    <div className="flex items-center justify-center p-8 text-center">
      <div>
        <p className="mb-2 text-muted-foreground text-sm">
          {type
            ? `${type.charAt(0).toUpperCase() + type.slice(1)} component`
            : "Component"}{" "}
          <code className="relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-medium font-mono text-sm">
            {name}
          </code>{" "}
          not found in registry.
        </p>
        <p className="text-muted-foreground text-xs">
          Make sure the component exists and the registry is up to date.
        </p>
      </div>
    </div>
  </PreviewWrapper>
);

export default ComponentPreview;
