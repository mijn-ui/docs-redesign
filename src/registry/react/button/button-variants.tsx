import { Button } from "@mijn-ui/react";

const ButtonFilled = () => (
  <div className="grid grid-cols-2 items-center gap-4 sm:grid-cols-3">
    <Button>Default</Button>
    <Button variant="primary">Primary</Button>
    <Button variant="secondary">Secondary</Button>
    <Button variant="outlined">Outlined</Button>
    <Button variant="inverse">Inverse</Button>
    <Button variant="success">Success</Button>
    <Button variant="warning">Warning</Button>
    <Button variant="danger">Danger</Button>
    <Button variant="ghost">Ghost</Button>
  </div>
);

export default ButtonFilled;
