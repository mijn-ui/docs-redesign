"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@mijn-ui/react";
import { Callout } from "fumadocs-ui/components/callout";
import React from "react";

const MDXTabsContent = TabsContent;

type InstallationTabsProps = React.ComponentProps<typeof Tabs> & {
  items: string[];
};

const MDXTabs = ({ items, children, ...props }: InstallationTabsProps) => {
  const [value, onValueChange] = React.useState(items[0]);

  return (
    <Tabs
      className="mb-8"
      onValueChange={onValueChange}
      value={value}
      {...props}
    >
      <TabsList className="!bg-transparent mb-2 w-full justify-start rounded-none">
        {items.map((item) => (
          <TabsTrigger key={item} value={item}>
            {item}
          </TabsTrigger>
        ))}
      </TabsList>
      {/* temporary alert, will be removed later */}
      {value.toLocaleLowerCase() === "npm" && (
        <Callout type="error">
          NPM packages are currently unstable and may cause issues. Use it at
          your own risk.
        </Callout>
      )}
      {children}
    </Tabs>
  );
};

export { MDXTabs, MDXTabsContent };
