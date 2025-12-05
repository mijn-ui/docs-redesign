import { Alert, AlertTitle } from "@mijn-ui/react";

const AlertWithTitle = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      {/* ----------------------------- Default ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"default"}>
        <AlertTitle>
          This is a default Alert for general information.
        </AlertTitle>
      </Alert>
      {/* ----------------------------- Secondary ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"secondary"}>
        <AlertTitle>
          This is a secondary Alert for additional information.
        </AlertTitle>
      </Alert>
      {/* ----------------------------- Danger ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"danger"}>
        <AlertTitle>
          This is a danger Alert for critical errors or warnings.
        </AlertTitle>
      </Alert>
      {/* ----------------------------- Success ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"success"}>
        <AlertTitle>This is a success Alert for completed actions.</AlertTitle>
      </Alert>
      {/* ----------------------------- Warning ---------------------------- */}
      <Alert className="w-full max-w-lg" variant={"warning"}>
        <AlertTitle>
          This is a warning Alert for cautionary messages.
        </AlertTitle>
      </Alert>
    </div>
  );
};

export default AlertWithTitle;
