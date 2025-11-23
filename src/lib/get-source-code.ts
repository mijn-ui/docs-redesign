import fs from "node:fs";

type SourceType = "tailwind" | "react" | "laravel" | "local";

const REPO_CONFIGS = {
  tailwind: {
    user: "mijn-ui",
    repo: "mijn-ui-tailwind",
    ref: "main",
  },
  laravel: {
    user: "mijn-ui",
    repo: "mijn-ui-laravel",
    ref: "main",
  },
  react: {
    user: "mijn-ui",
    repo: "mijn-ui-react",
    ref: "main",
  },
};

export async function getSourceCode({
  type,
  path,
}: {
  type: SourceType;
  path: string;
}): Promise<string> {
  try {
    if (type === "local") {
      console.log(`Fetching local file: ${path}`);
      return fs.readFileSync(path, "utf8");
    }
    const { user, repo, ref } = REPO_CONFIGS[type];

    const cdnURL = `https://cdn.jsdelivr.net/gh/${user}/${repo}@${ref}/${path}`;

    console.log(`Fetching from jsDelivr: ${cdnURL}`);

    const res = await fetch(cdnURL);
    if (!res.ok) {
      throw new Error(`Failed to fetch ${cdnURL} (${res.status})`);
    }

    return await res.text();
  } catch (error) {
    console.error(
      `Failed to load source code for type ${type} and path ${path}:`,
      error
    );
    if (error instanceof Error) {
      return `Error: ${error.message}`;
    }
    return "An unknown error occurred while fetching the source code.";
  }
}
