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
import { AlertTriangle, LogOut, X } from "lucide-react";

const AlertDialogWarning = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button color="warning">
        <LogOut className="text-base" />
        Log Out
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
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-bg-warning-subtle">
          <AlertTriangle className="size-6 text-on-bg-warning-subtle" />
        </div>

        <AlertDialogTitle className="text-center">
          Unsaved Changes
        </AlertDialogTitle>
      </AlertDialogHeader>

      <AlertDialogDescription className="text-center">
        Unsaved Changes You have 3 unsaved changes. If you log out now, these
        changes will be lost. Are you sure you want to continue?
      </AlertDialogDescription>

      <div className="mx-6 rounded-lg border border-outline-warning-subtle bg-bg-warning-subtle px-6 py-3">
        <ul className="space-y-1 text-on-bg-warning-subtle text-sm">
          <li>• Draft document in editor</li>
          <li>• Profile photo update</li>
          <li>• Notification settings</li>
        </ul>
      </div>

      <AlertDialogFooter className="sm:justify-center">
        <AlertDialogCancel asChild unstyled>
          <Button color="secondary">Save & Log Out</Button>
        </AlertDialogCancel>
        <AlertDialogAction>Discard & Log Out</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogWarning;
