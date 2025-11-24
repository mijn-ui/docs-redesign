import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  Input,
} from "@mijn-ui/react";

const ShowcaseStepper = () => {
  return (
    <>
      <div className="flex w-full max-w-60 flex-col">
        <div className="flex w-full max-w-xl items-center justify-center gap-2">
          {/* /* ------------------------------ Current Step ------------------------------ * / */}
          <button
            className="flex size-6 shrink-0 items-center justify-center rounded-full border border-fg-default bg-foreground text-background text-xs"
            tabIndex={-1}
            type="button"
          >
            1
          </button>

          <div className="h-px w-full bg-foreground" />

          <button
            className="flex size-6 shrink-0 items-center justify-center rounded-full border border-fg-default text-xs"
            tabIndex={-1}
            type="button"
          >
            2
          </button>

          <div className="h-px w-full bg-foreground" />

          <button
            className="flex size-6 shrink-0 items-center justify-center rounded-full border text-fg-tertiary text-xs"
            tabIndex={-1}
            type="button"
          >
            3
          </button>
        </div>
      </div>

      <Card className="relative mt-2 flex w-72 flex-col bg-accent p-2">
        <CardHeader className="p-2">
          <CardDescription className="text-xs">Step 2</CardDescription>
        </CardHeader>
        <CardContent className="space-y-1.5 px-2 py-0">
          <Input
            className="h-8 w-full p-1 indent-2 text-xs"
            id="current"
            placeholder="Account"
          />
          <Input
            className="h-8 w-full p-1 indent-2 text-xs"
            id="current"
            placeholder="Password"
            type="password"
          />
        </CardContent>
        <CardFooter className="mt-2 justify-end gap-2 p-0 px-2">
          <Button className="flex h-8 gap-2 px-2.5 text-xs disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75">
            Back
          </Button>
          <Button
            className="flex h-8 gap-2 px-2.5 text-xs disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75"
            variant="primary"
          >
            Continue
          </Button>
        </CardFooter>
      </Card>
    </>
  );
};

// <p className="text-center text-xxs">Step-2</p>
// <div></div>
// <Input id="current" className="h-8 w-full p-1 indent-2 text-xs" placeholder="Email" type="account" />

// <Input
//   id="current"
//   className="h-8 w-full p-1 indent-2 text-xs"
//   placeholder="Current password"
//   type="password"
// />
// <div className="mt-2 flex w-full justify-end gap-1">
//   <button
//     tabIndex={-1}
//     className="inline-flex items-center justify-center rounded-md border border-outline-default px-2.5 py-1 text-xxs text-fg-default hover:bg-bg-secondary/90 disabled:bg-bg-tertiary disabled:text-fg-tertiary">
//     Previous
//   </button>
//   <button
//     tabIndex={-1}
//     className="inline-flex items-center justify-center rounded-md bg-bg-brand px-2.5 py-1 text-xxs text-fg-brand hover:bg-bg-brand/90 disabled:bg-bg-tertiary disabled:text-fg-tertiary">
//     Next
//   </button>
// </div>

export default ShowcaseStepper;
