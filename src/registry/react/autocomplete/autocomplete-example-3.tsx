"use client";

import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteGroup,
  AutocompleteItem,
  AutocompleteTrigger,
  Button,
  Dialog,
  DialogClose,
  DialogContent,
  DialogTitle,
  DialogTrigger,
  Input,
  ScrollArea,
} from "@mijn-ui/react";
import { ChevronsUpDown } from "lucide-react";
import * as React from "react";

const FRAMEWORKS = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "WordPress",
  "Express.js",
  "Nest.js",
  "Angular",
  "Vue.js",
  "Ember.js",
  "Backbone.js",
  "Meteor.js",
  "Django",
  "Flask",
  "Laravel",
  "Spring Boot",
  "Ruby on Rails",
  "Phoenix",
  "Gatsby.js",
  "Strapi",
  "Fastify",
  "Hapi.js",
  "AdonisJS",
];

const AutocompleteWithDialog = () => {
  const [value, setValue] = React.useState("Next.js");

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add User</Button>
      </DialogTrigger>
      <DialogContent>
        <div className="flex flex-col space-y-2 text-center sm:text-left">
          <DialogTitle>User Information</DialogTitle>
        </div>
        <Input className="bg-bg-default-alt" placeholder="Username" />
        <Input className="bg-bg-default-alt" placeholder="Email" />
        <Autocomplete onValueChange={setValue} value={value}>
          <AutocompleteTrigger asChild>
            <Input
              className="bg-bg-default-alt"
              endIcon={<ChevronsUpDown />}
              placeholder={"Search for a framework"}
            />
          </AutocompleteTrigger>
          <AutocompleteContent
            emptyMessage="No Frameworks Found"
            loading={false}
          >
            <ScrollArea className="flex max-h-60 flex-col overflow-y-auto">
              <AutocompleteGroup>
                {FRAMEWORKS.map((framework) => (
                  <AutocompleteItem key={framework} value={framework}>
                    {framework}
                  </AutocompleteItem>
                ))}
              </AutocompleteGroup>
            </ScrollArea>
          </AutocompleteContent>
        </Autocomplete>
        <div className="flex flex-col-reverse sm:flex-row sm:justify-end sm:space-x-2">
          <DialogClose>Cancel</DialogClose>
          <DialogClose asChild unstyled>
            <Button color="primary">Add User</Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AutocompleteWithDialog;
