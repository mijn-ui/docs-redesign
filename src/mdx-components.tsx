import { cn } from "@mijn-ui/react";
import { Step, Steps } from "fumadocs-ui/components/steps";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { Alert } from "@/components/mdx-alert";
import ComponentPreview from "@/components/mdx-component-preview";
import PreviewWrapper from "@/components/mdx-preview-wrapper";
import { MDXTabs, MDXTabsContent } from "@/components/mdx-tabs";
import {
  LocalSourceCodeDisplay,
  ReactSourceCodeDisplay,
} from "@/components/source-code-display";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,

    Callout: ({
      className,
      ...props
    }: React.ComponentProps<typeof defaultMdxComponents.Callout>) => (
      <defaultMdxComponents.Callout
        className={cn("shadow-none", className)}
        {...props}
      />
    ),

    Alert,
    Steps,
    Step,
    ComponentPreview,
    PreviewWrapper,
    MDXTabs,
    MDXTabsContent,
    ReactSourceCodeDisplay,
    LocalSourceCodeDisplay,
  };
}
