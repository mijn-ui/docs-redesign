import { Avatar, AvatarFallback, AvatarImage } from "@mijn-ui/react";

const AvatarSizes = () => (
  <>
    <Avatar size="2xs">
      <AvatarImage alt="invalid-image" src="" />
      <AvatarFallback>2xs</AvatarFallback>
    </Avatar>

    <Avatar size="xs">
      <AvatarImage alt="invalid-image" src="" />
      <AvatarFallback>xs</AvatarFallback>
    </Avatar>

    <Avatar size="sm">
      <AvatarImage alt="invalid-image" src="" />
      <AvatarFallback>sm</AvatarFallback>
    </Avatar>

    <Avatar size="md">
      <AvatarImage alt="invalid-image" src="" />
      <AvatarFallback>md</AvatarFallback>
    </Avatar>

    <Avatar size="lg">
      <AvatarImage alt="invalid-image" src="" />
      <AvatarFallback>lg</AvatarFallback>
    </Avatar>

    <Avatar size="xl">
      <AvatarImage alt="invalid-image" src="" />
      <AvatarFallback>xl</AvatarFallback>
    </Avatar>
  </>
);

export default AvatarSizes;
