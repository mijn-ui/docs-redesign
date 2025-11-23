import { Button } from "@mijn-ui/react";

const ButtonFilled = () => (
  <div className="flex flex-wrap items-center gap-4">
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

export default ButtonFilled;
