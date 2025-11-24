import { ChevronLeft, ChevronRight, Ellipsis } from "lucide-react";

const ShowcasePagination = () => (
  <nav className="flex max-w-60 items-center justify-center gap-2">
    <button
      className="mr-2 inline-flex h-8 items-center justify-center gap-1 rounded-md border bg-bg-default-alt px-2 font-medium hover:bg-bg-secondary hover:text-accent-foreground disabled:bg-bg-tertiary disabled:text-fg-tertiary"
      tabIndex={-1}
      type="button"
    >
      <ChevronLeft />
      <span className="hidden px-1 text-xs sm:inline">Previous</span>
    </button>

    <span
      aria-hidden="true"
      className="flex size-7 items-center justify-center text-sm"
    >
      <Ellipsis />
    </span>

    <ul className="flex flex-row items-center">
      <li>
        <button
          className="inline-flex size-8 items-center justify-center gap-1 rounded-md text-xs hover:bg-bg-secondary hover:text-accent-foreground disabled:bg-bg-tertiary disabled:text-fg-tertiary"
          tabIndex={-1}
          type="button"
        >
          6
        </button>
      </li>
      <li>
        <button
          className="inline-flex size-8 items-center justify-center gap-1 rounded-md bg-bg-secondary text-fg-default text-xs shadow-sm hover:bg-bg-secondary disabled:bg-bg-tertiary disabled:text-fg-tertiary"
          tabIndex={-1}
          type="button"
        >
          7
        </button>
      </li>
      <li>
        <button
          className="inline-flex size-8 items-center justify-center gap-1 rounded-md text-xs hover:bg-bg-secondary hover:text-accent-foreground disabled:bg-bg-tertiary disabled:text-fg-tertiary"
          tabIndex={-1}
          type="button"
        >
          8
        </button>
      </li>
    </ul>

    <span
      aria-hidden="true"
      className="flex size-7 items-center justify-center text-sm [&>svg]:size-3.5 sm:[&>svg]:size-4"
    >
      <Ellipsis />
    </span>

    <button
      className="ml-2 inline-flex h-8 items-center justify-center gap-1 rounded-md border bg-bg-default-alt px-2 font-medium text-sm hover:bg-bg-secondary hover:text-accent-foreground disabled:bg-bg-tertiary disabled:text-fg-tertiary"
      tabIndex={-1}
      type="button"
    >
      <span className="hidden text-xs sm:inline">Next</span>
      <ChevronRight />
    </button>
  </nav>
);

export default ShowcasePagination;
