import { Alert, AlertDescription, AlertIcon, AlertTitle } from "@mijn-ui/react";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";

const AlertVariant = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      {/* ----------------------------- Default ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"default"}>
        <AlertIcon>
          <Info />
        </AlertIcon>
        <AlertTitle>Default</AlertTitle>
        <AlertDescription>
          This is a default Alert for general information.
        </AlertDescription>
      </Alert>
      {/* ----------------------------- Secondary ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"secondary"}>
        <AlertIcon>
          <Info />
        </AlertIcon>
        <AlertTitle>Secondary</AlertTitle>
        <AlertDescription>
          This is a secondary Alert for additional information.
        </AlertDescription>
      </Alert>

      {/* ----------------------------- Success ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"success"}>
        <AlertIcon>
          <CheckCircle />
        </AlertIcon>
        <AlertTitle>Success</AlertTitle>
        <AlertDescription>
          This is a success Alert for completed actions.
        </AlertDescription>
      </Alert>
      {/* ----------------------------- Warning ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"warning"}>
        <AlertIcon>
          <AlertTriangle />
        </AlertIcon>
        <AlertTitle>Warning</AlertTitle>
        <AlertDescription>
          This is a warning Alert for cautionary messages.
        </AlertDescription>
      </Alert>

      {/* ----------------------------- Danger ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"danger"}>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <AlertTitle>Danger</AlertTitle>
        <AlertDescription>
          This is a danger Alert for critical errors or warnings.
        </AlertDescription>
      </Alert>

      {/* ----------------------------- Inverse ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"inverse"}>
        <AlertIcon>
          <Info />
        </AlertIcon>
        <AlertTitle>Inverse</AlertTitle>
        <AlertDescription>
          This is an inverse Alert with inverted styling.
        </AlertDescription>
      </Alert>
    </div>
  );
};

export default AlertVariant;
