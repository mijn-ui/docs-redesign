import { Button } from "@mijn-ui/react";
import { Plus } from "lucide-react";

const ButtonIconOnly = () => (
  <div className="flex flex-wrap items-end gap-4">
    <Button iconOnly size="sm">
      <Plus />
    </Button>
    <Button iconOnly size="md">
      <Plus />
    </Button>
    <Button iconOnly size="lg">
      <Plus />
    </Button>
  </div>
);

export default ButtonIconOnly;
