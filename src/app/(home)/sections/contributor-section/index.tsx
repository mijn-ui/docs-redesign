import { Avatar, AvatarFallback, AvatarImage, cn } from "@mijn-ui/react";
import Link from "next/link";
import { getGitHubContributors } from "./get-contributors";

const ContributorSection = async () => {
  const contributors = await getGitHubContributors();

  return (
    <section className="flex w-full max-w-5xl flex-col items-center justify-center p-2 text-center sm:p-5">
      <h3 className="w-full bg-linear-to-br from-fg-default to-fg-secondary/70 bg-clip-text font-bold text-3xl/[1.2] text-transparent tracking-tight sm:font-extrabold sm:text-4xl/[1.2]">
        Contributors
      </h3>
      <p className="mt-1 w-full text-fg-secondary">
        We&apos;re grateful to our contributors who have shaped and strengthened
        our community. <br /> Their dedication and passion make mijnui possible.
      </p>

      <div className="mt-8 flex w-full flex-wrap items-center justify-center gap-4">
        {contributors.map((contributor) => (
          <Contributor
            avatar={contributor.avatar}
            key={contributor.name}
            link={contributor.link}
            name={contributor.name}
            totalContributors={contributors.length}
          />
        ))}
      </div>
    </section>
  );
};

type Contributor = {
  totalContributors: number;
  link: string;
  name: string;
  avatar?: string;
};

const Contributor = ({
  link,
  name,
  avatar,
  totalContributors,
}: Contributor) => (
  <div
    className={cn(
      "flex flex-col items-center justify-center text-center",
      totalContributors < 14 && "sm:w-28"
    )}
  >
    <Avatar
      asChild
      size={
        totalContributors < 14 ? "sm" : totalContributors < 32 ? "xs" : "2xs"
      }
    >
      <Link href={link} target={link !== "#" ? "_blank" : undefined}>
        <AvatarImage alt={name} src={avatar} />
        <AvatarFallback>{name?.substring(0, 1)}</AvatarFallback>
      </Link>
    </Avatar>

    {totalContributors < 14 && (
      <Link
        className="mt-1 hidden w-full truncate text-xs hover:underline md:block"
        href={link}
        target={link !== "#" ? "_blank" : undefined}
      >
        {name}
      </Link>
    )}
  </div>
);

export default ContributorSection;
