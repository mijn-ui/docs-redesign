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
  Checkbox,
  Input,
  Label,
} from "@mijn-ui/react";
import { Gift, Mail, Sparkles } from "lucide-react";

const AlertDialogNewsletter = () => (
  <AlertDialog>
    <AlertDialogTrigger asChild>
      <Button variant="primary">
        <Mail className="size-4" />
        Subscribe to Newsletter
      </Button>
    </AlertDialogTrigger>

    <AlertDialogContent className="max-w-md space-y-1">
      <AlertDialogHeader>
        <div className="mx-auto mb-2 flex size-16 items-center justify-center rounded-full border border-outline-default bg-bg-default text-fg-tertiary">
          <Sparkles className="size-6" />
        </div>
        <AlertDialogTitle className="text-center text-xl">
          Get 20% Off Your First Order!
        </AlertDialogTitle>
        <AlertDialogDescription className="text-center">
          Subscribe to our newsletter and receive exclusive deals, product
          updates, and insider tips delivered straight to your inbox.
        </AlertDialogDescription>
      </AlertDialogHeader>

      <div className="space-y-4 rounded-lg bg-bg-secondary px-6 py-4">
        <div className="space-y-2">
          <Label htmlFor="newsletter-email">Email Address</Label>
          <Input
            id="newsletter-email"
            placeholder="you@example.com"
            type="email"
          />
        </div>

        <div className="rounded-lg border border-outline-brand-subtle bg-bg-brand-subtle p-4">
          <div className="flex items-start gap-3">
            <Gift className="mt-0.5 size-5 shrink-0 text-on-bg-brand-subtle" />
            <div>
              <h4 className="mb-1 text-on-bg-brand-subtle text-sm">
                What you'll get:
              </h4>
              <ul className="space-y-1 text-on-bg-brand-subtle/60 text-sm">
                <li>• 20% discount code instantly</li>
                <li>• Weekly deals and promotions</li>
                <li>• Early access to new products</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-start gap-2">
          <Checkbox id="marketing" />
          <label
            className="cursor-pointer text-fg-tertiary text-sm leading-tight"
            htmlFor="marketing"
          >
            I agree to receive marketing emails and understand I can unsubscribe
            at any time
          </label>
        </div>
      </div>

      <AlertDialogFooter className="gap-2 sm:justify-center">
        <AlertDialogCancel asChild unstyled>
          <Button variant="secondary">Maybe Later</Button>
        </AlertDialogCancel>
        <AlertDialogAction>Subscribe & Get 20% Off</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
);

export default AlertDialogNewsletter;
