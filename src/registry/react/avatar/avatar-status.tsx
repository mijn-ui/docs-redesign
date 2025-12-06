import { Avatar, AvatarFallback, AvatarImage } from "@mijn-ui/react";

const AvatarStatus = () => (
  <div className="flex items-center gap-4">
    <Avatar className="relative" size="xs">
      <AvatarImage
        alt="anthony"
        src="https://avatars.githubusercontent.com/u/113810462?v=4"
      />
      <AvatarFallback>A</AvatarFallback>
      <div className="absolute right-0 bottom-0 size-2.5 rounded-full bg-bg-success ring-2 ring-bg-default" />
    </Avatar>

    <Avatar className="relative" size="xs">
      <AvatarImage
        alt="anthony"
        src="https://avatars.githubusercontent.com/u/113810462?v=4"
      />
      <AvatarFallback>A</AvatarFallback>
      <div className="absolute right-0 bottom-0 size-2.5 rounded-full bg-bg-danger ring-2 ring-bg-default" />
    </Avatar>

    <Avatar className="relative" size="xs">
      <AvatarImage
        alt="anthony"
        src="https://avatars.githubusercontent.com/u/113810462?v=4"
      />
      <AvatarFallback>A</AvatarFallback>
      <div className="absolute right-0 bottom-0 size-2.5 rounded-full bg-bg-warning ring-2 ring-bg-default" />
    </Avatar>

    <Avatar className="relative" size="xs">
      <AvatarImage
        alt="anthony"
        src="https://avatars.githubusercontent.com/u/113810462?v=4"
      />
      <AvatarFallback>A</AvatarFallback>
      <div className="absolute right-0 bottom-0 size-2.5 rounded-full border-2 border-outline-inverse/75 bg-bg-default ring-2 ring-bg-default" />
    </Avatar>
  </div>
);

export default AvatarStatus;
