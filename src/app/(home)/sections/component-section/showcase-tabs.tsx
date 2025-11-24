import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
} from "@mijn-ui/react";

const ShowcaseTabs = () => (
  <div className="flex flex-col gap-2">
    <div className="flex items-center justify-center whitespace-nowrap">
      <button
        className="inline-flex h-8 items-center gap-1.5 border-b px-2 font-normal text-fg-secondary text-xs leading-none outline-none duration-300 ease-in-out hover:bg-bg-bg-secondary focus-visible:bg-bg-bg-secondary active:bg-bg-bg-secondary/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b data-[state=active]:border-b-outline-brand data-[state=active]:font-medium data-[state=active]:text-fg-brand data-[state=active]:hover:bg-transparent data-[state=active]:hover:text-fg-brand"
        data-state="active"
        tabIndex={-1}
        type="button"
      >
        <svg
          fill="none"
          height="16"
          viewBox="0 0 20 20"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle
            cx="10.5"
            cy="10.0003"
            r="8.33333"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6.75 14.1663C8.69308 12.1312 12.286 12.0354 14.25 14.1663M12.5792 7.91634C12.5792 9.06693 11.6452 9.99967 10.4929 9.99967C9.34071 9.99967 8.40664 9.06693 8.40664 7.91634C8.40664 6.76575 9.34071 5.83301 10.4929 5.83301C11.6452 5.83301 12.5792 6.76575 12.5792 7.91634Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeWidth="1.5"
          />
        </svg>
        Account
      </button>

      <button
        className="inline-flex h-8 items-center gap-1.5 border-b px-2 font-normal text-fg-secondary text-xs leading-none outline-none duration-300 ease-in-out hover:bg-bg-bg-secondary focus-visible:bg-bg-bg-secondary active:bg-bg-bg-secondary/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b data-[state=active]:border-b-outline-brand data-[state=active]:font-medium data-[state=active]:text-fg-brand data-[state=active]:hover:bg-transparent data-[state=active]:hover:text-fg-brand"
        tabIndex={-1}
        type="button"
      >
        <svg
          fill="none"
          height="16"
          viewBox="0 0 21 20"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2.60831 11.9954C2.4311 13.1229 3.22337 13.9055 4.19342 14.2955C7.91238 15.7908 13.0877 15.7908 16.8067 14.2955C17.7767 13.9055 18.569 13.1229 18.3918 11.9954C18.2829 11.3024 17.7443 10.7254 17.3454 10.162C16.8228 9.41493 16.7708 8.60009 16.7708 7.73317C16.7708 4.38291 13.9633 1.66699 10.5 1.66699C7.03681 1.66699 4.22931 4.38291 4.22931 7.73317C4.22924 8.60009 4.17731 9.41493 3.65471 10.162C3.25574 10.7254 2.71722 11.3024 2.60831 11.9954Z"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
          <path
            d="M8 17.5C8.66345 18.0182 9.53956 18.3333 10.5 18.3333C11.4604 18.3333 12.3366 18.0182 13 17.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
          />
        </svg>
        Notifications
      </button>

      <button
        className="inline-flex h-8 items-center gap-1.5 border-b px-2 font-normal text-fg-secondary text-xs leading-none outline-none duration-300 ease-in-out hover:bg-bg-bg-secondary focus-visible:bg-bg-bg-secondary active:bg-bg-bg-secondary/70 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b data-[state=active]:border-b-outline-brand data-[state=active]:font-medium data-[state=active]:text-fg-brand data-[state=active]:hover:bg-transparent data-[state=active]:hover:text-fg-brand"
        tabIndex={-1}
        type="button"
      >
        <svg
          fill="none"
          height="16"
          viewBox="0 0 21 20"
          width="16"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M18.8333 10.0003C18.8333 5.39795 15.1023 1.66699 10.5 1.66699C5.89759 1.66699 2.16663 5.39795 2.16663 10.0003C2.16663 14.6027 5.89759 18.3337 10.5 18.3337C11.2014 18.3337 12.1666 18.4306 12.1666 17.5003C12.1666 16.9929 11.9027 16.6013 11.6405 16.2123C11.2568 15.6432 10.8769 15.0798 11.3333 14.167C11.8888 13.0559 12.8148 13.0559 14.2345 13.0559C14.9444 13.0559 15.7778 13.0559 16.75 12.917C18.5008 12.6669 18.8333 11.5907 18.8333 10.0003Z"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <path
            d="M6.33337 12.502L6.3406 12.5"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
          />
          <ellipse
            cx="8.41663"
            cy="7.08301"
            rx="1.25"
            ry="1.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <ellipse
            cx="14.25"
            cy="7.91699"
            rx="1.25"
            ry="1.25"
            stroke="currentColor"
            strokeWidth="1.5"
          />
        </svg>
        Theme
      </button>
    </div>

    <div className="h-32 w-full max-w-72">
      <Card className="relative flex w-full flex-col bg-bg-bg-secondary p-2">
        <CardHeader className="p-2">
          <CardTitle className="font-semibold text-sm">Password</CardTitle>
          <CardDescription className="text-xs">
            Change your password here. After saving, you&apos;ll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-1.5 px-2 py-0">
          <Input
            className="h-8! w-full p-1! indent-2 text-xs"
            id="current"
            placeholder="Current password"
            type="password"
          />
        </CardContent>
        <CardFooter className="mt-2 p-0 px-2">
          <Button className="flex h-8 gap-2 bg-bg-tertiary px-2.5 text-xs disabled:pointer-events-none disabled:opacity-80 disabled:brightness-75">
            Save password
          </Button>
        </CardFooter>
      </Card>
    </div>
  </div>
);

export default ShowcaseTabs;
