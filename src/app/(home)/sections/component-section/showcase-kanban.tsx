import {
  Avatar,
  AvatarFallback,
  AvatarGroup,
  AvatarImage,
} from "@mijn-ui/react";
import { Clock, EllipsisVertical, Plus } from "lucide-react";

const ShowcaseKanban = () => {
  const KanbanHeader = (
    <div className="flex w-full items-center justify-between px-3 pr-2">
      <div className="flex items-center gap-1">
        <h3 className="font-medium text-sm">Todo</h3>
        <span className="flex size-4 items-center justify-center rounded-full bg-bg-default-alt font-medium text-fg-default text-xxs">
          3
        </span>
      </div>
      <button
        className="inline-flex size-7 items-center justify-center gap-1 rounded-full text-fg-tertiary text-sm hover:bg-bg-secondary hover:text-fg-default disabled:bg-bg-tertiary disabled:text-fg-tertiary"
        tabIndex={-1}
        type="button"
      >
        <EllipsisVertical />
      </button>
    </div>
  );

  const KanbanCard = (
    <div className="group relative w-full cursor-pointer space-y-2 rounded-lg border border-transparent bg-bg-secondary p-3">
      <h5 className="w-10/12 font-medium text-fg-default text-xs">
        Creating wireframes for iOS application
      </h5>
      <div className="flex flex-wrap">
        <span className="inline-flex items-center justify-center rounded-full border border-outline-default px-1.5 py-px text-fg-default text-xxs hover:bg-bg-secondary">
          Wireframe
        </span>
      </div>
      <div className="space-y-1">
        <div className="flex items-center justify-between text-fg-tertiary text-xxs">
          <h5>CheckList</h5>
          <p>3/4</p>
        </div>
        <div className="relative h-1.5 w-full overflow-hidden rounded-full bg-bg-tertiary">
          <div
            aria-valuemax={100}
            aria-valuemin={0}
            aria-valuenow={75}
            className="h-full bg-bg-brand"
            role="progressbar"
            style={{
              transform: "scaleX(0.75)",
              transformOrigin: "left center",
            }}
          />
        </div>
      </div>
      <div className="flex w-full items-center justify-between text-fg-tertiary">
        <div className="flex items-center gap-1.5 sm:gap-2.5">
          <div className="flex items-center gap-1 text-sm">
            <Clock />
            <span className="text-xxs">3d</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <CommentIcon />
            <span className="text-xxs">2</span>
          </div>
          <div className="flex items-center gap-1 text-sm">
            <CommentIcon />
            <span className="text-xxs">5</span>
          </div>
        </div>
        <AvatarGroup max={3}>
          <Avatar className="size-5">
            <AvatarImage
              alt="avatar"
              height={40}
              src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8YXZhdGFyfGVufDB8fDB8fHww"
              width={40}
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>

          <Avatar className="size-5">
            <AvatarImage alt="avatar" height={40} src="" width={40} />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>

          <Avatar className="size-5">
            <AvatarImage
              alt="avatar"
              height={40}
              src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D"
              width={40}
            />
            <AvatarFallback>A</AvatarFallback>
          </Avatar>

          <Avatar className="size-5">
            <AvatarImage alt="avatar" height={40} src="" width={40} />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <Avatar className="size-5">
            <AvatarImage alt="avatar" height={40} src="" width={40} />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
          <Avatar className="size-5">
            <AvatarImage alt="avatar" height={40} src="" width={40} />
            <AvatarFallback>S</AvatarFallback>
          </Avatar>
        </AvatarGroup>
      </div>
    </div>
  );

  const KanbanFooter = (
    <div className="relative flex items-center justify-between gap-4 px-4 py-2">
      <button
        className="flex items-center gap-2 text-fg-tertiary text-xs"
        tabIndex={-1}
        type="button"
      >
        <Plus className="text-sm" />
        Add a new Item
      </button>
    </div>
  );

  return (
    <div className="p-8">
      <div className="relative w-full max-w-80 overflow-hidden rounded-2xl border bg-bg-default py-2">
        {KanbanHeader}

        <div className="px-3">{KanbanCard}</div>

        {KanbanFooter}
      </div>
    </div>
  );
};

const CommentIcon = () => (
  <svg
    fill="none"
    height="1em"
    viewBox="0 0 20 20"
    width="1em"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.66634 11.25H13.333M6.66634 7.08333H9.99967"
      stroke="#404040"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.25"
    />
    <path
      d="M5.08218 15.8333C3.99875 15.7268 3.18713 15.4014 2.64281 14.857C1.6665 13.8807 1.6665 12.3094 1.6665 9.16668V8.75001C1.6665 5.60731 1.6665 4.03596 2.64281 3.05965C3.61913 2.08334 5.19047 2.08334 8.33317 2.08334H11.6665C14.8092 2.08334 16.3806 2.08334 17.3569 3.05965C18.3332 4.03596 18.3332 5.60731 18.3332 8.75001V9.16668C18.3332 12.3094 18.3332 13.8807 17.3569 14.857C16.3806 15.8333 14.8092 15.8333 11.6665 15.8333C11.1994 15.8438 10.8275 15.8793 10.462 15.9625C9.46336 16.1924 8.53861 16.7035 7.62473 17.1491C6.32258 17.784 5.6715 18.1015 5.26292 17.8043C4.48125 17.2221 5.24529 15.4182 5.4165 14.5833"
      stroke="#404040"
      strokeLinecap="round"
      strokeWidth="1.25"
    />
  </svg>
);

export default ShowcaseKanban;
