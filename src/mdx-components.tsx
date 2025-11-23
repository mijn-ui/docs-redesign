import { Step, Steps } from "fumadocs-ui/components/steps";
import defaultMdxComponents from "fumadocs-ui/mdx";
import type { MDXComponents } from "mdx/types";
import { cnBase } from "tailwind-variants";
import ComponentPreview from "@/app/components/component-preview";
import { Alert } from "@/app/components/mdx-alert";
import { MDXTabs, MDXTabsContent } from "@/app/components/mdx-tabs";
import PreviewWrapper from "@/app/components/preview-wrapper";
import {
  LocalSourceCodeDisplay,
  ReactSourceCodeDisplay,
} from "@/app/components/source-code-display";

export function getMDXComponents(components?: MDXComponents): MDXComponents {
  return {
    ...defaultMdxComponents,
    ...components,

    Callout: ({
      className,
      ...props
    }: React.ComponentProps<typeof defaultMdxComponents.Callout>) => (
      <defaultMdxComponents.Callout
        className={cnBase("shadow-none", className)}
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
