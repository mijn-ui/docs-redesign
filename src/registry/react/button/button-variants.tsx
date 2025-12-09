import { Button } from "@mijn-ui/react";

const ButtonVariants = () => (
  <div className="flex justify-center gap-4 flex-wrap w-full">
    <Button color="brand" variant="filled">Filled</Button>
    <Button color="brand" variant="outlined">Outlined</Button>
    <Button color="brand" variant="subtle">Subtle</Button>
    <Button color="brand" variant="ghost">Ghost</Button>
    <Button color="brand" variant="light">Light</Button>
  </div>
);

export default ButtonVariants;
