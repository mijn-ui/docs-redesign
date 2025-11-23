#!/usr/bin/env node

import { execSync } from "node:child_process";
import { promises as fs } from "node:fs";
import path from "node:path";

type Config = {
  tailwindRepo: string;
  tailwindBranch: string;
  sourceFolder: string;
  tempDir: string;
  outputDir: string;
  registryFile: string;
  includeExtensions: string[];
  excludePatterns: string[];
};

type TailwindComponent = {
  name: string;
  source: string;
  type: string;
};

const config: Config = {
  tailwindRepo: "https://github.com/mijn-ui/mijn-ui-tailwind.git",
  tailwindBranch: "beta",
  sourceFolder: "components",
  tempDir: "./temp-tailwind",
  outputDir: "./src/registry/tailwind",
  registryFile: "./src/registry/tailwind/index.ts",
  includeExtensions: [".html"],
  excludePatterns: ["node_modules", ".git", "*.test.*", "dist"],
};

async function cloneRepo(): Promise<void> {
  console.log("🔄 Cloning Tailwind repository...");

  // Remove existing temp directory
  // biome-ignore lint/suspicious/noEmptyBlockStatements:off
  await fs.rm(config.tempDir, { recursive: true, force: true }).catch(() => {});

  // Clone repository
  execSync(
    `git clone --depth 1 --branch ${config.tailwindBranch} ${config.tailwindRepo} ${config.tempDir}`,
    {
      stdio: "inherit",
    }
  );

  console.log("✅ Repository cloned");
}

async function copyComponents(): Promise<void> {
  console.log("📋 Copying components...");

  const sourcePath = path.join(config.tempDir, config.sourceFolder);

  // Check if source folder exists
  try {
    await fs.access(sourcePath);
  } catch {
    throw new Error(
      `Source folder '${config.sourceFolder}' not found in repository`
    );
  }

  // Clear and recreate output directory
  await fs
    .rm(config.outputDir, { recursive: true, force: true })
    // biome-ignore lint/suspicious/noEmptyBlockStatements:off
    .catch(() => {});
  await fs.mkdir(config.outputDir, { recursive: true });

  // Copy files with filtering
  await copyFiltered(sourcePath, config.outputDir);
  console.log(`✅ Components copied to ${config.outputDir}`);
}

async function copyFiltered(
  source: string,
  destination: string
): Promise<void> {
  const items = await fs.readdir(source, { withFileTypes: true });

  for (const item of items) {
    const sourcePath = path.join(source, item.name);
    const destPath = path.join(destination, item.name);

    // Skip excluded patterns
    if (
      config.excludePatterns.some((pattern) =>
        item.name.includes(pattern.replace("*", ""))
      )
    ) {
      continue;
    }

    if (item.isDirectory()) {
      await fs.mkdir(destPath, { recursive: true });
      await copyFiltered(sourcePath, destPath);
    } else if (item.isFile()) {
      const ext = path.extname(item.name);
      if (config.includeExtensions.includes(ext)) {
        await fs.copyFile(sourcePath, destPath);
        console.log(`  📄 ${item.name}`);
      }
    }
  }
}

async function generateTailwindRegistry(): Promise<void> {
  console.log("📝 Generating Tailwind registry...");

  const components: TailwindComponent[] = [];

  async function scanDirectory(dir: string): Promise<void> {
    const items = await fs.readdir(dir, { withFileTypes: true });

    for (const item of items) {
      const fullPath = path.join(dir, item.name);

      if (item.isDirectory()) {
        await scanDirectory(fullPath);
      } else if (item.isFile()) {
        const ext = path.extname(item.name);
        const name = path.basename(item.name, ext);

        components.push({
          name,
          source: fullPath.replace(/\\/g, "/"), // Normalize path separators
          type: ext.slice(1), // Remove the dot
        });
      }
    }
  }

  await scanDirectory(config.outputDir);

  // Generate TypeScript registry file
  const indexContent = `/**
 * Tailwind Components Registry - Auto-generated
 * 
 * Total components: ${components.length}
 * Generated: ${new Date().toISOString()}
 */

export type TailwindComponent = {
  name: string
  source: string
  type: string
}

const TAILWIND_REGISTRY: Record<string, TailwindComponent> = {
${components
  .map(
    (comp) => `  "${comp.name}": {
    name: "${comp.name}",
    source: "${comp.source}",
    type: "${comp.type}"
  }`
  )
  .join(",\n")}
}

export default TAILWIND_REGISTRY
`;

  await fs.writeFile(config.registryFile, indexContent);

  console.log(
    `✅ Generated Tailwind registry with ${components.length} components`
  );
}

async function cleanup(): Promise<void> {
  // biome-ignore lint/suspicious/noEmptyBlockStatements:off
  await fs.rm(config.tempDir, { recursive: true, force: true }).catch(() => {});
}

async function main(): Promise<void> {
  try {
    console.log("🚀 Starting Tailwind registry fetch...");
    console.log(`📦 Repository: ${config.tailwindRepo}`);
    console.log(`📁 Source: ${config.sourceFolder}`);
    console.log(`🎯 Output: ${config.outputDir}`);

    await cloneRepo();
    await copyComponents();
    await generateTailwindRegistry();
    await cleanup();

    console.log("🎉 Tailwind registry fetch completed!");
  } catch (error) {
    console.error("❌ Error:", error instanceof Error ? error.message : error);
    await cleanup();
    process.exit(1);
  }
}

main();
