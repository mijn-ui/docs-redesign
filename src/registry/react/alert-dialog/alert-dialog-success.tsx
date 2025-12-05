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
import { CheckCircle2, Send, X } from "lucide-react";

const SuccessDialog = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="success">
        <Send /> Process Payment
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
        <div className="mx-auto flex size-12 items-center justify-center rounded-full bg-bg-success-subtle">
          <CheckCircle2 className="size-6 text-on-bg-success-subtle" />
        </div>

        <AlertDialogTitle className="text-center">
          Payment Successful!
        </AlertDialogTitle>
      </AlertDialogHeader>

      <AlertDialogDescription className="text-center">
        Your payment has been processed successfully. A confirmation email has
        been sent to your registered email address.
      </AlertDialogDescription>

      <div className="mx-6 rounded-lg bg-bg-secondary px-6 py-4">
        <div className="mb-2 flex justify-between text-sm">
          <span className="text-fg-tertiary">Transaction ID</span>
          <span className="text-fg-default">TXN-549827</span>
        </div>
        <div className="flex justify-between text-sm">
          <span className="text-fg-tertiary">Date</span>
          <span className="text-fg-default">Dec 4, 2025</span>
        </div>
      </div>
      <AlertDialogFooter className="sm:justify-center">
        <AlertDialogAction asChild unstyled>
          <Button variant="success">View Receipt</Button>
        </AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default SuccessDialog;
