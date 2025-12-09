import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Button,
} from "@mijn-ui/react";
import { AlertCircle, AlertTriangle, CheckCircle, Info } from "lucide-react";

const AlertWithActions = () => {
  return (
    <div className="flex w-full flex-wrap items-center justify-center gap-4">
      {/* ----------------------------- Default ---------------------------- */}
      <Alert className="w-full max-w-xl" variant={"default"}>
        <AlertIcon>
          <Info />
        </AlertIcon>
        <div className="flex w-full items-center justify-between">
          <div>
            <AlertTitle>Default</AlertTitle>
            <AlertDescription>
              This is a default Alert for general information.
            </AlertDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button color="default" variant="light">
              Cancel
            </Button>
            <Button>Confirm</Button>
          </div>
        </div>
      </Alert>

      {/* ----------------------------- Secondary ---------------------------- */}
      <Alert className="w-full max-w-xl" variant={"secondary"}>
        <AlertIcon>
          <Info />
        </AlertIcon>
        <div className="flex w-full items-center justify-between">
          <div>
            <AlertTitle>Secondary</AlertTitle>
            <AlertDescription>
              This is a secondary Alert for additional information.
            </AlertDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button color="secondary" variant="light">
              Cancel
            </Button>
            <Button>Confirm</Button>
          </div>
        </div>
      </Alert>

      {/* ----------------------------- Success ---------------------------- */}
      <Alert className="w-full max-w-xl" variant={"success"}>
        <AlertIcon>
          <CheckCircle />
        </AlertIcon>
        <div className="flex w-full items-center justify-between">
          <div>
            <AlertTitle>Success</AlertTitle>
            <AlertDescription>
              This is a success Alert for completed actions.
            </AlertDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button color="success" variant="light">
              Cancel
            </Button>
            <Button color="success">Confirm</Button>
          </div>
        </div>
      </Alert>

      {/* ----------------------------- Warning ---------------------------- */}
      <Alert className="w-full max-w-xl" variant={"warning"}>
        <AlertIcon>
          <AlertTriangle />
        </AlertIcon>
        <div className="flex w-full items-center justify-between">
          <div>
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              This is a warning Alert for cautionary messages.
            </AlertDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button color="warning" variant="light">
              Cancel
            </Button>
            <Button color="warning">Confirm</Button>
          </div>
        </div>
      </Alert>

      {/* ----------------------------- Danger ---------------------------- */}
      <Alert className="w-full max-w-xl" variant={"danger"}>
        <AlertIcon>
          <AlertCircle />
        </AlertIcon>
        <div className="flex w-full items-center justify-between">
          <div>
            <AlertTitle>Danger</AlertTitle>
            <AlertDescription>
              This is a danger Alert for critical errors or warnings.
            </AlertDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button color="danger" variant="light">
              Cancel
            </Button>
            <Button color="danger">Confirm</Button>
          </div>
        </div>
      </Alert>

      {/* ----------------------------- Inverse ---------------------------- */}
      <Alert className="w-full max-w-xl" variant={"inverse"}>
        <AlertIcon>
          <Info />
        </AlertIcon>
        <div className="flex w-full items-center justify-between">
          <div>
            <AlertTitle>Inverse</AlertTitle>
            <AlertDescription>
              This is an inverse Alert with inverted styling.
            </AlertDescription>
          </div>
          <div className="flex items-center gap-2">
            <Button color="inverse">Cancel</Button>
            <Button color="default">Confirm</Button>
          </div>
        </div>
      </Alert>
    </div>
  );
};

export default AlertWithActions;
