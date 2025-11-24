import React from "react"

type ShowcaseItem = {
  name: string
  link: string
  inprogress?: boolean
  component: React.LazyExoticComponent<React.FC>
}

type Showcase = {
  group: "tailwind" | "react" | "laravel"
  items: ShowcaseItem[]
}

export const Showcases: Showcase[] = [
  {
    group: "tailwind",
    items: [
      {
        name: "Tabs",
        link: "/docs/tailwind/components/tabs",
        component: React.lazy(() => import("./showcase-tabs")),
      },
      {
        name: "Pagination",
        link: "/docs/tailwind/components/pagination",
        component: React.lazy(() => import("./showcase-pagination")),
      },
      {
        name: "Stepper",
        link: "/docs/tailwind/components/stepper",
        component: React.lazy(() => import("./showcase-stepper")),
      },
      {
        name: "Calendar",
        link: "/docs/tailwind/components/calendar",
        component: React.lazy(() => import("./showcase-calendar")),
      },
      {
        name: "Select",
        link: "/docs/tailwind/components/select",
        component: React.lazy(() => import("./showcase-select")),
      },
      {
        name: "Alert Dialog",
        link: "/docs/tailwind/components/alert-dialog",
        component: React.lazy(() => import("./showcase-alert-dialog")),
      },
      {
        name: "Kanban",
        inprogress: true,
        link: "/docs/tailwind/blocks/kanban",
        component: React.lazy(() => import("./showcase-kanban")),
      },
      {
        name: "Table",
        link: "/docs/tailwind/components/table",
        component: React.lazy(() => import("./showcase-table")),
      },
      {
        name: "CalendarFull",
        link: "#",
        component: React.lazy(() => import("./showcase-calendar-full")),
        inprogress: true,
      },
    ],
  },
  {
    group: "react",
    items: [
      {
        name: "Tabs",
        link: "/docs/react/components/tabs",
        component: React.lazy(() => import("./showcase-tabs")),
      },
      {
        name: "Pagination",
        link: "/docs/react/components/pagination",
        component: React.lazy(() => import("./showcase-pagination")),
      },
      {
        name: "Stepper",
        link: "/docs/react/components/stepper",
        component: React.lazy(() => import("./showcase-stepper")),
        inprogress: true,
      },
      {
        name: "Calendar",
        link: "/docs/react/components/calendar",
        component: React.lazy(() => import("./showcase-calendar")),
      },
      {
        name: "Select",
        link: "/docs/react/components/select",
        component: React.lazy(() => import("./showcase-select")),
      },
      {
        name: "Alert Dialog",
        link: "/docs/react/components/alert-dialog",
        component: React.lazy(() => import("./showcase-alert-dialog")),
      },
      {
        name: "Kanban",
        inprogress: true,
        link: "/blocks/react/kanban-column",
        component: React.lazy(() => import("./showcase-kanban")),
      },
      {
        name: "Table",
        link: "/docs/react/components/table",
        component: React.lazy(() => import("./showcase-table")),
      },
      {
        name: "CalendarFull",
        inprogress: true,
        link: "/blocks/react/calendar-full",
        component: React.lazy(() => import("./showcase-calendar-full")),
      },
    ],
  },
  { group: "laravel", items: [] },
]
