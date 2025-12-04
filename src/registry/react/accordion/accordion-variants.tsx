import {
  AccordionContent,
  AccordionItem,
  type AccordionProps,
  AccordionTrigger,
  Accordion as MijnUIAccordion,
} from "@mijn-ui/react";

const AccordionVariants = () => (
  <div className="flex w-full flex-col items-center gap-8">
    <div className="flex w-full flex-col items-center gap-2">
      <p className="w-60 font-semibold text-fg-tertiary text-sm sm:w-96">
        Default
      </p>
      <Accordion variant="default" />
    </div>
    <div className="flex w-full flex-col items-center gap-2">
      <p className="w-60 font-semibold text-fg-tertiary text-sm sm:w-96">
        Contained
      </p>
      <Accordion variant="contained" />
    </div>
    <div className="flex w-full flex-col items-center gap-2">
      <p className="w-60 font-semibold text-fg-tertiary text-sm sm:w-96">
        Splitted
      </p>
      <Accordion variant="splitted" />
    </div>
    <div className="flex w-full flex-col items-center gap-2">
      <p className="w-60 font-semibold text-fg-tertiary text-sm sm:w-96">
        Subtle
      </p>
      <Accordion variant="subtle" />
    </div>
  </div>
);

export default AccordionVariants;

const Accordion = ({
  variant = "default",
}: {
  variant?: AccordionProps["variant"];
}) => (
  <MijnUIAccordion
    className="w-60 sm:w-96"
    collapsible
    type="single"
    variant={variant}
  >
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-2">
      <AccordionTrigger>Is it unstyled</AccordionTrigger>
      <AccordionContent>
        Yes, you can make the components unstyled by setting the{" "}
        <span className="font-semibold">unstyled</span> prop to{" "}
        <span className="font-semibold">true</span> on either a single component
        or a parent component.
      </AccordionContent>
    </AccordionItem>
    <AccordionItem value="item-3">
      <AccordionTrigger>Is it animated?</AccordionTrigger>
      <AccordionContent>
        Yes! You can animate the Accordion with CSS or JavaScript.
      </AccordionContent>
    </AccordionItem>
  </MijnUIAccordion>
);
