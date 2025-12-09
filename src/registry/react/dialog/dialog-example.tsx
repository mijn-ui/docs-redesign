import {
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Textarea,
} from "@mijn-ui/react";
import { XIcon } from "lucide-react";

type DialogExampleProps = {
  unstyled?: boolean;
};

const DialogExample = ({ unstyled = false }: DialogExampleProps) => (
  <Dialog unstyled={unstyled}>
    <DialogTrigger asChild>
      <Button>Sign In</Button>
    </DialogTrigger>
    <DialogContent className="relative">
      <DialogClose asChild unstyled>
        <Button
          className="absolute top-1.5 right-1.5 rounded-full [&_svg]:size-4"
          iconOnly
          size="sm"
          variant="ghost"
        >
          <XIcon />
        </Button>
      </DialogClose>
      <DialogHeader>
        <DialogTitle>Rate Your Experience</DialogTitle>
        <DialogDescription>
          Please select your feedback rating and share your story in the text
          box below before confirming or canceling.
        </DialogDescription>
      </DialogHeader>
      <div className="space-y-2">
        <div className="flex w-full items-center gap-2">
          <Button className="w-full">🙁 Bad</Button>
          <Button className="w-full">🙂 Fine</Button>
          <Button className="w-full">😍 Good</Button>
        </div>
        <Textarea placeholder="Tell us your story" />
      </div>

      <DialogFooter>
        <DialogClose>Cancel</DialogClose>
        <DialogClose asChild unstyled>
          <Button color="brand">Confirm</Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  </Dialog>
);

export default DialogExample;
