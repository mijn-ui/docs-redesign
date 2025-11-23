import { promises as fs } from "node:fs";
import path from "node:path";
import { glob } from "glob";

type DirectoryConfig = {
  inputDir: string;
  prefix: string;
  dirName: string;
  type: string;
};

type ProcessResult = {
  files: string[];
  directory: DirectoryConfig;
};

const directories: DirectoryConfig[] = [
  {
    inputDir: path.resolve(process.cwd(), "src/registry/react"),
    prefix: "@/registry/react",
    dirName: "src/registry/react",
    type: "example",
  },
];

const outputFile = path.resolve(process.cwd(), "src/registry/react/index.tsx");

async function ensureDirectory(): Promise<void> {
  const registryDir = path.dirname(outputFile);
  await fs.mkdir(registryDir, { recursive: true });
}

async function processDirectory(
  config: DirectoryConfig
): Promise<ProcessResult> {
  const { inputDir, dirName } = config;

  console.log(`🔍 Scanning ${dirName}...`);

  // Find all TypeScript React files
  const files = await glob("**/*.tsx", { cwd: inputDir });

  // Filter files with default exports
  const validFiles: string[] = [];

  for (const file of files) {
    const filePath = path.join(inputDir, file);
    if (file !== "index.tsx" && (await hasDefaultExport(filePath))) {
      validFiles.push(file);
    }
  }

  console.log(`✓ Found ${validFiles.length} components in ${dirName}`);
  return { files: validFiles, directory: config };
}

async function hasDefaultExport(filePath: string): Promise<boolean> {
  try {
    const content = await fs.readFile(filePath, "utf8");
    return content.includes("export default");
  } catch {
    return false;
  }
}

function generateRegistryContent(results: ProcessResult[]): string {
  const totalComponents = results.reduce(
    (sum, result) => sum + result.files.length,
    0
  );

  let content = `/**
 * React Component Registry - Auto-generated
 * 
 * Total components: ${totalComponents}
 * Generated: ${new Date().toISOString()}
 */

import React from "react"

export type ReactComponent = {
  type: string
  source: string
  component: React.LazyExoticComponent<React.ComponentType<any>>
}

const REACT_REGISTRY: Record<string, ReactComponent> = {
`;

  // Process each directory's components
  // biome-ignore lint/complexity/noForEach: off
  results.forEach(({ files, directory }) => {
    // biome-ignore lint/complexity/noForEach: off
    files.forEach((file) => {
      // biome-ignore lint/performance/useTopLevelRegex: off
      const fileWithoutExt = file.replace(/\.tsx$/, "");
      const importPath = `${directory.prefix}/${fileWithoutExt}`;
      const componentKey = path.basename(fileWithoutExt);

      content += `  "${componentKey}": {\n`;
      content += `    type: "${directory.type}",\n`;
      content += `    source: "./${directory.dirName}/${file}",\n`;
      content += `    component: React.lazy(() => import("${importPath}")),\n`;
      content += "  },\n";
    });
  });

  content += "}\n\nexport default REACT_REGISTRY\n";
  return content;
}

async function main(): Promise<void> {
  try {
    console.log("🏗️ Building React component registry...");

    await ensureDirectory();

    // Process all directories
    const results = await Promise.all(directories.map(processDirectory));

    // Generate registry content
    const content = generateRegistryContent(results);

    // Write registry file
    await fs.writeFile(outputFile, content, "utf8");

    const totalComponents = results.reduce(
      (sum, result) => sum + result.files.length,
      0
    );
    console.log(`✅ Registry generated: ${totalComponents} components`);
    console.log(`📁 Output: ${outputFile}`);
  } catch (error) {
    console.error("❌ Error:", error instanceof Error ? error.message : error);
    process.exit(1);
  }
}

main();
