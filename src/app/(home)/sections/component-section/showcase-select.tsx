import { Check, ChevronsUpDown } from "lucide-react";

const ShowcaseSelect = () => (
  <div className="relative">
    <button
      aria-controls="combobox-options"
      className={
        "inline-flex items-center justify-between gap-2 rounded-md border border-outline-default bg-bg-secondary py-2 pr-3 pl-4 font-medium text-fg-default text-xs"
      }
      tabIndex={-1}
      type="button"
    >
      Select Fruits
      <ChevronsUpDown className="shrink-0" />
    </button>

    <ul className="mt-1 flex w-full flex-col overflow-auto rounded-md border border-outline-default bg-bg-default-alt p-1 font-normal text-fg-default text-xs shadow-sm transition duration-100 ease-in">
      <li className="inline-flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-default px-3 py-1.5">
        Apple <Check className="text-fg-brand" />
      </li>

      <li className="inline-flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-default px-3 py-1.5 hover:bg-bg-secondary">
        Berry
      </li>

      <li className="inline-flex w-full cursor-pointer select-none items-center justify-between gap-2 rounded-default px-3 py-1.5 hover:bg-bg-secondary">
        Orange
      </li>
    </ul>
  </div>
);

export default ShowcaseSelect;
