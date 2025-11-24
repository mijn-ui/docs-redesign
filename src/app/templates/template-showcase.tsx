"use client";

import { Tabs, TabsList, TabsTrigger } from "@mijn-ui/react";
import { useQueryState } from "nuqs";
import { Icons } from "@/components/icons";
import { ThemeImage } from "@/components/theme-image";
import { GithubLinkButton } from "./components/github-link-button";
import { PreviewLinkButton } from "./components/preview-link-button";
import { TemplateGroups, Templates } from "./data";

const TemplateShowcase = () => {
  const [filter, setFilter] = useQueryState("filter");

  const filteredGroups =
    filter && filter !== "all"
      ? Templates.filter((group) => group.group === filter)
      : Templates;

  const filteredTemplates = filteredGroups.flatMap((group) => group.items);
  return (
    <>
      <div className="sticky top-[48px] z-10 mt-12 flex items-center justify-center bg-bg-default py-2 md:justify-end">
        <Tabs onValueChange={setFilter} value={filter || "all"}>
          <TabsList>
            {TemplateGroups.map((group) => {
              const Icon = Icons[group];
              return (
                <TabsTrigger className="capitalize" key={group} value={group}>
                  <Icon />
                  {group}
                </TabsTrigger>
              );
            })}

            <TabsTrigger className="capitalize" value={"all"}>
              All
            </TabsTrigger>
          </TabsList>
        </Tabs>
      </div>

      <div className="space-y-12 py-12 text-center md:text-left">
        {filteredTemplates.length > 0 ? (
          filteredTemplates.map((template) => (
            <div className="space-y-4" key={`${template.name}-${template.id}`}>
              <div>
                <h3 className="font-semibold text-lg">{template.name}</h3>
                <p className="text-fg-tertiary text-sm">
                  {template.description}
                </p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {template.images.map((image, index) => (
                  <a
                    className="relative aspect-video w-full overflow-hidden rounded-md border"
                    href={image.link}
                    key={`${image.link}-${index}`}
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    <ThemeImage
                      alt={`${template.name} Preview ${index + 1}`}
                      className="object-cover"
                      darkSrc={image.dark}
                      height={1080}
                      lightSrc={image.light}
                      width={1920}
                    />
                  </a>
                ))}
              </div>
              <div className="mt-4 flex w-full items-start justify-center gap-2 md:justify-between">
                <div className="mt-4 flex items-center gap-2">
                  {template.githubURL && (
                    <GithubLinkButton href={template.githubURL} />
                  )}

                  {template.previewURL && (
                    <PreviewLinkButton href={template.previewURL} />
                  )}
                </div>

                <div className="hidden min-w-96 space-y-2 p-5 md:block">
                  {template.technologies && <h4>Built With:</h4>}
                  <ul className="grid w-full max-w-md grid-cols-2 gap-2 px-5 text-fg-secondary">
                    {template.technologies?.map((tech) => (
                      <li className="list-disc text-sm" key={tech}>
                        {tech}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-fg-tertiary">
            <p className="font-semibold text-lg">
              More templates are coming soon!
            </p>
            <p className="text-sm">
              We are currently in beta and actively working on adding more
              templates to showcase the full potential of our design system.
            </p>
          </div>
        )}
      </div>
    </>
  );
};

export { TemplateShowcase };
