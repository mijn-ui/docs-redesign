"use client";

import { Alert, AlertIcon, AlertTitle, Button } from "@mijn-ui/react";
import { CircleFadingArrowUpIcon, X } from "lucide-react";
import { useState } from "react";

export default function AlertDismissable() {
  const [isAlertVisible, setIsAlertVisible] = useState(true);

  const showAlert = () => {
    setIsAlertVisible(true);
  };
  const hideAlert = () => {
    setIsAlertVisible(false);
  };

  return (
    <div className="w-full">
      {isAlertVisible && (
        <Alert className="relative mx-auto w-full max-w-xl" variant="secondary">
          <AlertIcon className="[&>svg]:top-3.5">
            <CircleFadingArrowUpIcon />
          </AlertIcon>

          <AlertTitle>
            This is a secondary Alert for additional information.
          </AlertTitle>

          <Button
            className="absolute top-2 right-2 rounded-full pl-0!"
            iconOnly
            onClick={hideAlert}
            size="sm"
            variant="ghost"
          >
            <X className="size-5" />
          </Button>
        </Alert>
      )}
      {!isAlertVisible && (
        <div className="flex justify-center">
          <Button className="mx-auto mt-2" onClick={showAlert}>
            Reopen
          </Button>
        </div>
      )}
    </div>
  );
}
