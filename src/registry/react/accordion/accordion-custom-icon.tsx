import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@mijn-ui/react";
import { Minus, Plus } from "lucide-react";

const AccordionCustomIconExample = () => (
  <Accordion className="w-full max-w-80" collapsible type="single">
    <AccordionItem value="item-1">
      <AccordionTrigger
        icon={
          <>
            <Plus className="shrink-0 text-lg transition-transform duration-300 group-data-[state=open]:hidden" />
            <Minus className="shrink-0 text-lg transition-transform duration-300 group-data-[state=closed]:hidden" />
          </>
        }
      >
        Is it accessible
      </AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>

    <AccordionItem value="item-2">
      <AccordionTrigger
        icon={
          <Plus className="shrink-0 text-lg transition-transform duration-200 group-data-[state=open]:rotate-45" />
        }
      >
        Is it unstyled
      </AccordionTrigger>
      <AccordionContent>
        Yes, you can make the components unstyled by setting the{" "}
        <span className="font-semibold">unstyled</span> prop to{" "}
        <span className="font-semibold">true</span> on either a single component
        or a parent component.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
);

export default AccordionCustomIconExample;
