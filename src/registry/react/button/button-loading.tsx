import { Button } from "@mijn-ui/react";

const ButtonLoading = () => (
  <div className="flex flex-col gap-8">
    <Button className="w-34" loading>
      Button
    </Button>

    <div className="flex flex-col gap-2">
      <p className="font-semibold text-fg-tertiary text-sm">
        With Custom Loading Text
      </p>

      <Button className="w-36" loading loadingText="Submitting...">
        Button
      </Button>
    </div>
  </div>
);

export default ButtonLoading;
