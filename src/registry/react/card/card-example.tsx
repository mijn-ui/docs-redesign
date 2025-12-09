import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react";
import { ArrowUpRight, Plus } from "lucide-react";

const CardExample = () => (
  <Card className="relative max-w-60">
    <CardHeader>
      <Button
        asChild
        iconOnly
        variant="filled"
        color="secondary"
        className="rounded-full text-fg-tertiary hover:text-fg-secondary"
        size="lg"
      >
        <span>
          <Plus className="size-5 sm:size-6" />
        </span>
      </Button>

      <div className="absolute top-4 right-4 text-fg-tertiary">
        <ArrowUpRight className="size-5 sm:size-6" />
      </div>
    </CardHeader>
    <CardContent>
      <CardTitle className="text-base">Users</CardTitle>
      <CardDescription>Manage user accounts and permissions.</CardDescription>
    </CardContent>
  </Card>
);

export default CardExample;
