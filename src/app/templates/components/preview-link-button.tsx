import { Button } from "@mijn-ui/react-button";
import { ExternalLink } from "lucide-react";

const PreviewLinkButton = ({ href }: { href: string }) => (
  <Button asChild className="text-xs" size="sm">
    <a href={href} rel="noopener noreferrer" target="_blank">
      Preview
      <ExternalLink />
    </a>
  </Button>
);

export { PreviewLinkButton };
