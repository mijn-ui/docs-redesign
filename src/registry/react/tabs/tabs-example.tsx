import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Input,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@mijn-ui/react";

const TabsExample = () => (
  <Tabs className="w-[400px]" defaultValue="account">
    <TabsList className="grid h-fit w-full grid-cols-2">
      <TabsTrigger
        className="h-10 data-[state=active]:shadow-small"
        value="account"
      >
        Account
      </TabsTrigger>
      <TabsTrigger
        className="h-10 data-[state=active]:shadow-small"
        value="password"
      >
        Password
      </TabsTrigger>
    </TabsList>
    <TabsContent value="account">
      <Card>
        <CardHeader>
          <CardTitle>Account</CardTitle>
          <CardDescription>
            Make changes to your account here. Click save when you&apos;re done.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            className="bg-background-alt"
            classNames={{
              label: "bg-background-alt peer-focus:bg-background-alt",
            }}
            defaultValue="Pedro Duarte"
            id="name"
            label="Name"
          />
          <Input
            className="bg-background-alt"
            classNames={{
              label: "bg-background-alt peer-focus:bg-background-alt",
            }}
            defaultValue="@peduarte"
            id="username"
            label="Username"
          />
        </CardContent>
        <CardFooter>
          <Button color="primary">Save changes</Button>
        </CardFooter>
      </Card>
    </TabsContent>
    <TabsContent value="password">
      <Card>
        <CardHeader>
          <CardTitle>Password</CardTitle>
          <CardDescription>
            Change your password here. After saving, you&apos;ll be logged out.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Input
            className="bg-background-alt"
            classNames={{
              label: "bg-background-alt peer-focus:bg-background-alt",
            }}
            id="current"
            label="Current password"
            type="password"
          />

          <Input
            className="bg-background-alt"
            classNames={{
              label: "bg-background-alt peer-focus:bg-background-alt",
            }}
            id="new"
            label="New password"
            type="password"
          />
        </CardContent>
        <CardFooter>
          <Button color="primary">Save password</Button>
        </CardFooter>
      </Card>
    </TabsContent>
  </Tabs>
);

export default TabsExample;
