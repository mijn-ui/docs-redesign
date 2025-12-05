import { Alert, AlertIcon, AlertTitle } from "@mijn-ui/react";
import { AlertTriangle, CheckCircle, Info } from "lucide-react";

const AlertWithTitleAndIcon = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      {/* ----------------------------- Default ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"default"}>
        <AlertIcon className="[&>svg]:top-3.5">
          <Info />
        </AlertIcon>
        <AlertTitle>
          This is a default Alert for general information.
        </AlertTitle>
      </Alert>
      {/* ----------------------------- Secondary ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"secondary"}>
        <AlertIcon className="[&>svg]:top-3.5">
          <Info />
        </AlertIcon>
        <AlertTitle>
          This is a secondary Alert for additional information.
        </AlertTitle>
      </Alert>
      {/* ----------------------------- Danger ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"danger"}>
        <AlertIcon className="[&>svg]:top-3.5">
          <Info />
        </AlertIcon>
        <AlertTitle>
          This is a danger Alert for critical errors or warnings.
        </AlertTitle>
      </Alert>
      {/* ----------------------------- Success ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"success"}>
        <AlertIcon className="[&>svg]:top-3.5">
          <CheckCircle />
        </AlertIcon>
        <AlertTitle>This is a success Alert for completed actions.</AlertTitle>
      </Alert>
      {/* ----------------------------- Warning ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"warning"}>
        <AlertIcon className="[&>svg]:top-3.5">
          <AlertTriangle />
        </AlertIcon>
        <AlertTitle>
          This is a warning Alert for cautionary messages.
        </AlertTitle>
      </Alert>
    </div>
  );
};

export default AlertWithTitleAndIcon;
