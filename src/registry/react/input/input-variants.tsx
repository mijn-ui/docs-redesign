import { Input } from "@mijn-ui/react";

const InputVariants = () => (
  <>
    <div className="flex flex-col gap-2">
      <p className="font-medium text-sm">Default</p>
      <Input classNames={{ wrapper: "w-80" }} placeholder="Username..." />
    </div>
    <div className="flex flex-col gap-2">
      <p className="font-medium text-sm">Underline</p>
      <Input
        classNames={{ wrapper: "w-80" }}
        placeholder="Username..."
        variant="underline"
      />
    </div>
    <div className="flex flex-col gap-2">
      <p className="font-medium text-sm">Danger</p>
      <Input
        classNames={{ wrapper: "w-80" }}
        placeholder="Username..."
        variant="danger"
      />
    </div>
  </>
);

export default InputVariants;
