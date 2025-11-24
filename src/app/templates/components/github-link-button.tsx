import { Button } from "@mijn-ui/react-button";
import Link from "next/link";
import { Icons } from "@/components/icons";

const GithubLinkButton = ({ href }: { href: string }) => (
  <Button asChild className="text-xs" size="sm" variant="ghost">
    <Link href={href} rel="noopener noreferrer" target="_blank">
      <Icons.github />
      Github
    </Link>
  </Button>
);

export { GithubLinkButton };
