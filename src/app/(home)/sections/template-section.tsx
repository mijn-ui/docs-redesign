import {
  Button,
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@mijn-ui/react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { GithubLinkButton } from "@/app/templates/components/github-link-button";
import { PreviewLinkButton } from "@/app/templates/components/preview-link-button";
import { type Template, Templates } from "@/app/templates/data";
import { ThemeImage } from "@/components/theme-image";

const TemplateSection = () => {
  const flattenTemplates = Templates.flatMap((group) => group.items).slice(
    0,
    9
  );

  return (
    <section className="w-full max-w-7xl pt-16 pb-14 md:pt-32">
      <h3 className="w-full bg-linear-to-br from-fg-default to-fg-secondary/70 bg-clip-text text-center font-bold text-3xl/[1.2] text-transparent tracking-tight sm:font-extrabold sm:text-4xl/[1.2] lg:text-start">
        Templates
      </h3>
      <div className="flex flex-col items-center justify-center">
        <div className="mt-10 grid w-fit grid-cols-1 place-items-center gap-4 md:grid-cols-2 lg:grid-cols-3">
          {flattenTemplates.map((template) => (
            <TemplateCard
              key={`${template.name}-${template.id}`}
              template={template}
            />
          ))}
        </div>

        <div className="mt-10 flex w-full items-center justify-center">
          <Button asChild className="text-sm" size="lg" variant="filled" color="brand">
            <Link href={"/templates"}>
              Browse All <ArrowRight className="mt-0.5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

type TemplateCardProps = {
  template: Template;
};

export const TemplateCard = ({ template }: TemplateCardProps) => (
  <Card className="flex w-full max-w-96 flex-col rounded-2xl border bg-bg-default lg:max-w-none">
    <CardHeader>
      <Link
        className="aspect-video size-full overflow-hidden rounded-lg border border-outline-default/40 bg-bg-secondary"
        href={template.previewURL}
        target="_blank"
      >
        <ThemeImage
          alt={template.name}
          className="size-full object-cover transition duration-300 hover:scale-105"
          darkSrc={template.cover.dark}
          height={1080}
          lightSrc={template.cover.light}
          width={1920}
        />
      </Link>
    </CardHeader>

    <CardContent className="relative p-4">
      <CardTitle className="mb-1 text-lg">{template.name}</CardTitle>
      <CardDescription>{template.description}</CardDescription>
    </CardContent>

    <CardFooter className="justify-end gap-2">
      {template.githubURL && <GithubLinkButton href={template.githubURL} />}
      {template.previewURL && <PreviewLinkButton href={template.previewURL} />}
    </CardFooter>
  </Card>
);

export default TemplateSection;
