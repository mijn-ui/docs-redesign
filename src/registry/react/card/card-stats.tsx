import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react";

const StatsCardExample = () => (
  <Card className="max-w-44">
    <CardHeader className="px-5 pb-5 sm:px-6 sm:pb-4">
      <Button className="rounded-full bg-accent p-0 sm:size-12" iconOnly>
        <Icons.bagOutline className="size-4 sm:size-5" />
      </Button>
    </CardHeader>

    <CardContent className="flex flex-col gap-1 px-5 pb-5 sm:px-6 sm:pb-6">
      <CardDescription>Total Sales</CardDescription>
      <CardTitle className="font-medium text-xl sm:text-2xl">
        $75,890.75
      </CardTitle>
      <p className="font-normal text-fg-tertiary text-xs">
        <span className="text-success">+128%</span> from June
      </p>
    </CardContent>
  </Card>
);

export const Icons = {
  bagOutline: (props: React.HTMLAttributes<SVGElement>) => (
    <svg
      fill="currentColor"
      height="1em"
      stroke="currentColor"
      strokeWidth={0}
      viewBox="0 0 512 512"
      width="1em"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M80 176a16 16 0 0 0-16 16v216c0 30.24 25.76 56 56 56h272c30.24 0 56-24.51 56-54.75V192a16 16 0 0 0-16-16zm80 0v-32a96 96 0 0 1 96-96h0a96 96 0 0 1 96 96v32"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={32}
      />
    </svg>
  ),
};

export default StatsCardExample;
