import { Badge } from "@mijn-ui/react";
import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Logo from "@/app/components/logo";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <div className="flex items-center gap-3 md:mb-8">
          <span className="flex items-center gap-2 font-bold text-fg-default text-lg">
            <Logo className="size-5 items-center fill-fg-default" />
            MijnUI
          </span>
          <Badge radius="full" variant="primary-subtle">
            v0.1.0
          </Badge>
        </div>
      ),
      transparentMode: "always",
    },
  };
}
