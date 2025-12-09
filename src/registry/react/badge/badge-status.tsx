import { Badge } from "@mijn-ui/react";

const BadgeStatus = () => (
  <div className="flex flex-wrap items-center gap-3">
    <Badge
      className="text-fg-secondary"
      color="default"
      radius="full"
      variant="subtle"
    >
      <div className="mr-1 h-1.5 w-1.5 rounded-full bg-fg-tertiary" /> Idle
    </Badge>
    <Badge color="warning" radius="full" variant="subtle">
      <div className="mr-1 h-1.5 w-1.5 rounded-full bg-bg-warning" /> In
      Progress
    </Badge>
    <Badge color="danger" radius="full" variant="subtle">
      <div className="mr-1 h-1.5 w-1.5 rounded-full bg-bg-danger" /> Blocked
    </Badge>
    <Badge color="success" radius="full" variant="subtle">
      <div className="mr-1 h-1.5 w-1.5 rounded-full bg-bg-success" /> Done
    </Badge>
  </div>
);

export default BadgeStatus;
