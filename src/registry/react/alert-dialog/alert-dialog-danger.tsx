import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
  Button,
} from "@mijn-ui/react";
import { AlertTriangle, UserCircle, X } from "lucide-react";

const AlertDialogDanger = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="danger">
        <UserCircle className="text-base" />
        Delete Account
      </Button>
    </AlertDialogTrigger>

    <AlertDialogContent className="relative space-y-1">
      <AlertDialogCancel asChild unstyled>
        <Button
          className="absolute top-2 right-2 rounded-full text-fg-secondary text-xl"
          iconOnly
          size="sm"
          variant="ghost"
        >
          <X />
        </Button>
      </AlertDialogCancel>

      <AlertDialogHeader>
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-bg-danger-subtle">
          <AlertTriangle className="size-6 text-on-bg-danger-subtle" />
        </div>

        <AlertDialogTitle className="text-center">
          Delete Account?
        </AlertDialogTitle>
      </AlertDialogHeader>

      <AlertDialogDescription className="text-center">
        This action cannot be undone. This will permanently delete your account
        and remove all your data from our servers.
      </AlertDialogDescription>

      <AlertDialogFooter className="gap-2 sm:justify-center">
        <AlertDialogCancel asChild unstyled>
          <Button variant="secondary">Cancel</Button>
        </AlertDialogCancel>
        <AlertDialogAction asChild unstyled>
          <Button variant="danger">Yes, Delete Account</Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogDanger;
