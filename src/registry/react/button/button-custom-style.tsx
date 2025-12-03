import { Button } from "@mijn-ui/react";
import { Star } from "lucide-react";

const ButtonCustomStyle = () => (
  <Button
    className="inline-flex items-center gap-2 rounded-full bg-bg-brand px-4 py-2 text-on-bg-brand text-sm shadow-bg-brand-subtle shadow-lg"
    unstyled
  >
    <Star />
    Custom Styled Button
  </Button>
);

export default ButtonCustomStyle;
