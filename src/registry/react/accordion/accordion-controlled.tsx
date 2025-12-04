"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Button,
} from "@mijn-ui/react";
import * as React from "react";

const AccordionControlled = () => {
  const [value, setValue] = React.useState("accessible");

  return (
    <div>
      <div className="mb-4 flex gap-2">
        <Button
          className="flex-1"
          onClick={() => setValue("accessible")}
          variant={value === "accessible" ? "inverse" : "ghost"}
        >
          Accessible
        </Button>
        <Button
          className="flex-1"
          onClick={() => setValue("unstyled")}
          variant={value === "unstyled" ? "inverse" : "ghost"}
        >
          Unstyled
        </Button>
        <Button
          className="flex-1"
          onClick={() => setValue("animated")}
          variant={value === "animated" ? "inverse" : "ghost"}
        >
          Animated
        </Button>
      </div>
      <Accordion
        className="w-60 sm:w-96"
        collapsible
        onValueChange={setValue}
        type="single"
        value={value}
      >
        <AccordionItem value="accessible">
          <AccordionTrigger>Is it accessible</AccordionTrigger>
          <AccordionContent>
            Yes. It adheres to the WAI-ARIA design pattern.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="unstyled">
          <AccordionTrigger>Is it unstyled</AccordionTrigger>
          <AccordionContent>
            Yes, you can make the components unstyled by setting the{" "}
            <span className="font-semibold">unstyled</span> prop to{" "}
            <span className="font-semibold">true</span> on either a single
            component or a parent component.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="animated">
          <AccordionTrigger>Is it animated?</AccordionTrigger>
          <AccordionContent>
            Yes! You can animate the Accordion with CSS or JavaScript.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default AccordionControlled;
