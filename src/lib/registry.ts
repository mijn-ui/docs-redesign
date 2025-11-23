import REACT_REGISTRY from "@/registry/react";
import TAILWIND_REGISTRY from "@/registry/tailwind";

export function getRegistryComponentCounts() {
  return {
    react: Object.keys(REACT_REGISTRY).length,
    tailwind: Object.keys(TAILWIND_REGISTRY).length,
    total:
      Object.keys(REACT_REGISTRY).length +
      Object.keys(TAILWIND_REGISTRY).length,
  };
}

export function searchRegistryComponents(
  query: string,
  type: "react" | "tailwind"
) {
  const lowerQuery = query.toLowerCase();

  switch (type) {
    case "react":
      return Object.keys(REACT_REGISTRY)
        .filter((key) => key.toLowerCase().includes(lowerQuery))
        .map((key) => REACT_REGISTRY[key]);
    case "tailwind":
      return Object.keys(TAILWIND_REGISTRY)
        .filter((key) => key.toLowerCase().includes(lowerQuery))
        .map((key) => TAILWIND_REGISTRY[key]);
    default:
      throw new Error(`Unsupported registry type: ${type}`);
  }
}

/**
 * Get a single component by name and type.
 * @param name - The name of the component to retrieve.
 * @param type - The type of registry ("react" | "tailwind").
 * @returns The component if found, or null if not found.
 */
export function getRegistryComponent(name: string, type: "react" | "tailwind") {
  const lowerName = name.toLowerCase();

  switch (type) {
    case "react":
      return REACT_REGISTRY[lowerName] || null;
    case "tailwind":
      return TAILWIND_REGISTRY[lowerName] || null;
    default:
      throw new Error(`Unsupported registry type: ${type}`);
  }
}
