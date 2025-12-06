import { Avatar, AvatarFallback, AvatarImage } from "@mijn-ui/react";

const AvatarExample = () => (
  <Avatar size="md">
    <AvatarImage
      alt="anthony"
      src="https://avatars.githubusercontent.com/u/113810462?v=4"
    />
    <AvatarFallback>A</AvatarFallback>
  </Avatar>
);

export default AvatarExample;
