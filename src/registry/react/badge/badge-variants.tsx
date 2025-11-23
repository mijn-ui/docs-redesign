import { Badge } from "@mijn-ui/react";

const BadgeColors = () => (
  <div className="flex flex-col items-center gap-4">
    <div className="flex w-full items-center gap-4">
      <Badge>Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="danger">Danger</Badge>
    </div>

    <div className="flex w-full items-center gap-4">
      <Badge variant="default-subtle">Default</Badge>
      <Badge variant="primary-subtle">Primary</Badge>
      <Badge variant="success-subtle">Success</Badge>
      <Badge variant="warning-subtle">Warning</Badge>
      <Badge variant="danger-subtle">Danger</Badge>
    </div>
  </div>
);

export default BadgeColors;
