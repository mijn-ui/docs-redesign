import type { BaseLayoutProps } from "fumadocs-ui/layouts/shared";
import Logo from "@/app/components/logo";

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: (
        <span className="flex items-center gap-2 font-bold text-fg-default text-lg">
          <Logo className="size-5 items-center fill-fg-default" />
          MijnUI
        </span>
      ),
    },
  };
}
