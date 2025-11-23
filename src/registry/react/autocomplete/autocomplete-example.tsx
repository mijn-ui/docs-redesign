"use client";

import {
  Autocomplete,
  AutocompleteContent,
  AutocompleteItem,
  AutocompleteTrigger,
  Input,
} from "@mijn-ui/react";
import { Search } from "lucide-react";
import { useState } from "react";

const FRAMEWORKS = [
  "Next.js",
  "SvelteKit",
  "Nuxt.js",
  "Remix",
  "Astro",
  "WordPress",
  "Express.js",
];

const AutocompleteExample = () => {
  const [value, setValue] = useState("SvelteKit");

  return (
    <Autocomplete onValueChange={setValue} value={value}>
      <AutocompleteTrigger asChild>
        <Input placeholder={"Search for a framework"} startIcon={<Search />} />
      </AutocompleteTrigger>
      <AutocompleteContent emptyMessage="No Frameworks Found" loading={false}>
        {FRAMEWORKS.map((framework) => (
          <AutocompleteItem key={framework} value={framework}>
            {framework}
          </AutocompleteItem>
        ))}
      </AutocompleteContent>
    </Autocomplete>
  );
};

export default AutocompleteExample;
