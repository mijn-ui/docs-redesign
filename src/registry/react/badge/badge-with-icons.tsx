import { Badge } from "@mijn-ui/react";
import { ArrowLeftIcon, ArrowRightIcon, XIcon } from "lucide-react";

const BadgeWithIcons = () => (
  <div className="flex w-full flex-wrap justify-center gap-4">
    <Badge radius="full">
      <ArrowLeftIcon className="size-3.5" />
      Left
    </Badge>
    <Badge radius="full">
      Right
      <ArrowRightIcon className="size-3.5" />
    </Badge>
    <Badge radius="full">
      Remove
      <XIcon className="size-3.5" />
    </Badge>
  </div>
);

export default BadgeWithIcons;
