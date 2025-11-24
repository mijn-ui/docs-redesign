"use client";

import {
  Button,
  cn,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@mijn-ui/react";
import { Suspense } from "react";
import { Icons } from "@/components/icons";
import { useScrollActive } from "@/hooks/use-scroll-active";
import LinkCard from "./link-card";
import { Showcases } from "./showcases";

const ComponentSection = () => {
  const active = useScrollActive();

  // Card Glow Effect
  // useEffect(() => {
  //   const handleMouseMove = (e: MouseEvent) => {
  //     const cards = document.getElementsByClassName("card_glow");
  //     // biome-ignore lint/complexity/noForEach: off
  //     Array.from(cards).forEach((card) => {
  //       const rect = card.getBoundingClientRect();
  //       const x = e.clientX - rect.left;
  //       const y = e.clientY - rect.top;

  //       card.setAttribute("style", `--mouse-x: ${x}px; --mouse-y: ${y}px;`);
  //     });
  //   };

  //   const cardsContainer = document.getElementById("cards");
  //   if (cardsContainer) {
  //     cardsContainer.addEventListener("mousemove", handleMouseMove);
  //   }

  //   return () => {
  //     if (cardsContainer) {
  //       cardsContainer.removeEventListener("mousemove", handleMouseMove);
  //     }
  //   };
  // }, []);

  return (
    <section
      className={cn(
        "relative flex size-full flex-col items-center justify-center overflow-hidden bg-[#f9fafb] px-5 pb-12 opacity-100 transition ease-in-out sm:px-10 sm:pb-24 md:pt-14 md:pb-32 dark:bg-bg-default-alt/5",
        !active && "md:opacity-50 md:blur-[0.5px]"
      )}
      id="components"
    >
      <div
        className={cn(
          "flex w-full max-w-7xl justify-center transition ease-in-out",
          !active && "md:scale-[0.98]"
        )}
      >
        <Tabs defaultValue="tailwind" unstyled>
          <TabsList
            className="mt-10 flex w-full max-w-7xl items-center divide-x transition"
            unstyled
          >
            {Showcases.map((showcase) => {
              const Icon = Icons[showcase.group];

              return (
                <TabsTrigger
                  asChild
                  disabled={showcase.items.length === 0}
                  key={showcase.group}
                  unstyled
                  value={showcase.group}
                >
                  <Button
                    className="gap-2 rounded-none border-gray-600 border-dashed text-fg-tertiary text-xs capitalize data-[state=active]:bg-bg-tertiary data-[state=active]:text-fg-default"
                    size="sm"
                    variant="ghost"
                  >
                    <Icon />
                    {showcase.group}
                  </Button>
                </TabsTrigger>
              );
            })}
          </TabsList>

          <div className="relative w-full lg:max-w-7xl">
            {Showcases.map((showcase) => (
              <TabsContent
                className="relative grid size-full grid-cols-1 md:grid-cols-2 md:gap-1 lg:grid-cols-3"
                id="cards"
                key={showcase.group}
                tabIndex={-1}
                value={showcase.group}
              >
                {showcase.items.map((item, index) => (
                  <Suspense
                    fallback={
                      <div className="col-span-1 flex aspect-video min-h-72 w-full items-center justify-center border">
                        <div className="size-6 animate-spin rounded-full border-2 border-outline-primary border-t-transparent" />
                      </div>
                    }
                    key={`${item.name}-${index}`}
                  >
                    <LinkCard
                      href={item.link}
                      inprogress={item.inprogress}
                      label={item.name}
                    >
                      <item.component />
                    </LinkCard>
                  </Suspense>
                ))}
              </TabsContent>
            ))}
            <BorderDecorator />
          </div>
        </Tabs>
      </div>
    </section>
  );
};

const BorderDecorator = () => (
  <div className="pointer-events-none absolute inset-0 sm:right-px">
    <div className="-inset-y-12 -left-px lg:-inset-y-16 absolute w-px">
      <div className="-inset-y-12 lg:-inset-y-16 absolute left-px w-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            stroke="currentColor"
            strokeDasharray="1 3"
            strokeWidth={2}
            x1={0}
            x2={0}
            y1={0}
            y2="100%"
          />
        </svg>
      </div>
    </div>
    <div className="-inset-x-20 -top-[36px] absolute h-px">
      <div className="-inset-x-20 absolute top-px h-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            stroke="currentColor"
            strokeDasharray="1 3"
            strokeWidth={2}
            x1={0}
            x2={"100%"}
            y1={0}
            y2={0}
          />
        </svg>
      </div>
    </div>
    <div className="-inset-x-20 -bottom-[38px] absolute h-px">
      <div className="-inset-x-20 absolute top-px h-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            stroke="currentColor"
            strokeDasharray="1 3"
            strokeWidth={2}
            x1={0}
            x2={"100%"}
            y1={0}
            y2={0}
          />
        </svg>
      </div>
    </div>
    <div className="-inset-x-20 -top-px absolute h-px">
      <div className="-inset-x-20 absolute top-px h-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            stroke="currentColor"
            strokeDasharray="1 3"
            strokeWidth={2}
            x1={0}
            x2={"100%"}
            y1={0}
            y2={0}
          />
        </svg>
      </div>
    </div>
    <div className="-inset-x-20 -bottom-px absolute h-px">
      <div className="-inset-x-20 absolute bottom-px h-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            stroke="currentColor"
            strokeDasharray="1 3"
            strokeWidth={2}
            x1={0}
            x2={"100%"}
            y1={0}
            y2={0}
          />
        </svg>
      </div>
    </div>
    <div className="-inset-y-12 -right-px lg:-inset-y-16 absolute w-px">
      <div className="-inset-y-12 lg:-inset-y-16 absolute w-px opacity-35 dark:opacity-15">
        <svg className="size-full" preserveAspectRatio="none">
          <line
            stroke="currentColor"
            strokeDasharray="1 3"
            strokeWidth={2}
            x1={0}
            x2={0}
            y1={0}
            y2="100%"
          />
        </svg>
      </div>
    </div>
  </div>
);

export default ComponentSection;
