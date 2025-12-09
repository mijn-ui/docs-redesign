import { Badge } from "@mijn-ui/react";

const BadgeVariants = () => (
  <div className="flex w-full flex-wrap justify-center gap-4">
    <Badge color="brand" variant="filled">
      Filled
    </Badge>
    <Badge color="brand" variant="outlined">
      Outlined
    </Badge>
    <Badge color="brand" variant="subtle">
      Subtle
    </Badge>
    <Badge color="brand" variant="ghost">
      Ghost
    </Badge>
    <Badge color="brand" variant="light">
      Light
    </Badge>
  </div>
);

export default BadgeVariants;
