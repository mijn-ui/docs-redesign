import { ScrollArea, Separator } from "@mijn-ui/react";
import React from "react";

const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v0.0.1-beta.${a.length - i}`
);

const ScrollAreaExample = () => (
  <ScrollArea className="h-72 w-48 rounded-md border bg-bg-default-alt">
    <div className="p-4">
      <h4 className="mb-4 font-medium text-sm leading-none">Tags</h4>
      {tags.map((tag) => (
        <React.Fragment key={tag}>
          <div className="text-sm" key={tag}>
            {tag}
          </div>
          <Separator className="my-2" />
        </React.Fragment>
      ))}
    </div>
  </ScrollArea>
);

export default ScrollAreaExample;
