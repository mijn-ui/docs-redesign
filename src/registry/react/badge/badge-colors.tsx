import { Badge } from "@mijn-ui/react";

const BadgeColors = () => (
  <div className="flex w-full flex-wrap justify-center gap-4">
    <Badge color="default">Default</Badge>
    <Badge color="brand">Brand</Badge>
    <Badge color="secondary">Secondary</Badge>
    <Badge color="success">Success</Badge>
    <Badge color="warning">Warning</Badge>
    <Badge color="danger">Danger</Badge>
    <Badge color="inverse">Inverse</Badge>
  </div>
);

export default BadgeColors;
