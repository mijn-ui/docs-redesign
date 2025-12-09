"use client";

import {
  Button,
  type ButtonVariantProps,
  buttonStyles,
  Checkbox,
  Label,
  RadioGroup,
  RadioGroupItem,
} from "@mijn-ui/react";
import React from "react";

/* -------------------------------------------------------------------------- */

type ButtonOptionsType = {
  unstyled: boolean;
  loading: boolean;
  disabled: boolean;
} & ButtonVariantProps;

const ReactKeyFeaturesPlayground = () => {
  const buttonVariantObjects = createVariantObjWithDefaults(
    buttonStyles.variants,
    buttonStyles.defaultVariants
  );

  const buttonDefaultVariants = buttonStyles.defaultVariants;
  const [buttonOptions, setButtonOptions] = React.useState<ButtonOptionsType>({
    ...buttonDefaultVariants,
    unstyled: false,
    loading: false,
    disabled: false,
  });

  const handleChange = (key: string, value: boolean | string) => {
    setButtonOptions((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  // have to convert string to boolean for iconOnly
  // because the value comming from the radio group is a string
  // this is temporary solution. TODO: Improve this.
  const iconOnly =
    typeof buttonOptions.iconOnly === "string"
      ? stringToBoolean(buttonOptions.iconOnly)
      : buttonOptions?.iconOnly;

  return (
    <figure className="not-prose relative w-full overflow-hidden rounded-lg border">
      <div className="flex h-80 w-full flex-col items-center overflow-hidden rounded-lg sm:flex-row">
        <div className="flex h-full min-h-32 flex-auto items-center justify-center bg-bg-default">
          <Button {...buttonOptions} iconOnly={iconOnly} loadingText={iconOnly ? null: undefined}>
            {iconOnly ? "M" : "MijnUI"}
          </Button>
        </div>

        <div className="flex size-full grow flex-col items-center gap-4 bg-fd-secondary p-5 sm:max-w-80 xl:w-1/2 xl:max-w-none xl:flex-initial">
          <div className="flex items-center gap-5 sm:w-full">
            <CheckboxWithLabel
              checked={buttonOptions.unstyled}
              id="unstyled"
              label="Unstyled"
              onCheckedChange={() =>
                handleChange("unstyled", !buttonOptions.unstyled)
              }
            />

            <CheckboxWithLabel
              checked={buttonOptions.loading}
              id="loading"
              label="Loading"
              onCheckedChange={() =>
                handleChange("loading", !buttonOptions.loading)
              }
            />

            <CheckboxWithLabel
              checked={buttonOptions.disabled}
              id="disabled"
              label="Disabled"
              onCheckedChange={() =>
                handleChange("disabled", !buttonOptions.disabled)
              }
            />
          </div>

          <div className="flex h-full max-h-32 flex-wrap items-start gap-x-6 overflow-y-auto pb-4 sm:max-h-none sm:gap-x-4 sm:overflow-hidden sm:pb-0">
            {buttonVariantObjects.map(({ name, options, defaultOption }) => (
              <RadioGroupWithOptions
                defaultValue={defaultOption}
                key={name}
                label={name}
                onValueChange={(value) => handleChange(name, value)}
                options={options}
                value={buttonOptions[name] as string}
              />
            ))}
          </div>
        </div>
      </div>
    </figure>
  );
};

export default ReactKeyFeaturesPlayground;

const CheckboxWithLabel = ({
  id,
  checked,
  onCheckedChange,
  label,
}: {
  id: string;
  checked: boolean;
  onCheckedChange: () => void;
  label: string;
}) => (
  <div className="flex items-center gap-2">
    <Checkbox checked={checked} id={id} onCheckedChange={onCheckedChange} />
    <Label className="text-sm" htmlFor={id}>
      {label}
    </Label>
  </div>
);

const RadioGroupWithOptions = ({
  defaultValue,
  value,
  onValueChange,
  label,
  options,
  maxOption = 3,
}: {
  defaultValue: string;
  value: string;
  onValueChange: (value: string) => void;
  label: string;
  options: Record<string, string>;
  maxOption?: number;
}) => (
  <RadioGroup
    className="sm:min-w-24"
    defaultValue={defaultValue}
    onValueChange={onValueChange}
    value={value}
  >
    <p className="text-sm">{label}</p>
    {Object.entries(options).map(
      ([variantKey, variantValue], index) =>
        index <= maxOption && (
          <div className="flex items-center space-x-2" key={variantValue}>
            <RadioGroupItem id={variantValue} value={variantKey} />
            <Label htmlFor={variantValue}>{variantKey}</Label>
          </div>
        )
    )}
  </RadioGroup>
);

/* -------------------------------------------------------------------------- */

function stringToBoolean(value: string): boolean | undefined {
  if (value === "true") {
    return true;
  }
  if (value === "false") {
    return false;
  }
}

/* -------------------------------------------------------------------------- */
/*                                    utils                                   */
/* -------------------------------------------------------------------------- */

/**
 * Transforms a record of variants into an array of variant objects with formatted options.
 *
 * @template T - A record where keys are variant names and values are objects of key-value pairs.
 * @param variants - The variants object to transform.
 * @returns An array of variant objects, each containing a name and its options.
 *
 * @example
 * const variants = {
 *   size: { small: "value1", large: "value2" },
 *   color: { red: "value1", blue: "value2" },
 * };
 * const result = getVariantObjects(variants);
 * // [
 * //   { name: "size", options: { small: "size-small", large: "size-large" } },
 * //   { name: "color", options: { red: "color-red", blue: "color-blue" } },
 * // ]
 */
type VariantValues = Record<string, string>;
type VariantObjects<T extends Record<string, VariantValues>> = {
  name: keyof T;
  options: VariantValues;
}[];

export function getVariantObjects<T extends Record<string, VariantValues>>(
  variants: T
): VariantObjects<T> {
  const variantsArray: VariantObjects<T> = [];

  if (!variants || typeof variants !== "object") return variantsArray;

  for (const [variantKey, variantValues] of Object.entries(variants)) {
    const options: VariantValues = {};

    if (variantValues && typeof variantValues === "object") {
      for (const key of Object.keys(variantValues)) {
        options[key] = `${variantKey}-${key}`;
      }
    }
    variantsArray.push({ name: variantKey as keyof T, options });
  }

  return variantsArray;
}

/**
 * Adds default values to a list of variant objects based on the provided default variants.
 *
 * @template T - A record where keys are variant names and values are objects of key-value pairs.
 * @template D - A record where keys are variant names and values are default keys.
 * @param variantsObj - The array of variant objects to process.
 * @param defaultVariants - A record of default values for each variant name.
 * @returns An array of variant objects with their default values included.
 *
 * @example
 * const variantObjects = [
 *   { name: "size", options: { small: "size-small", large: "size-large" } },
 *   { name: "color", options: { red: "color-red", blue: "color-blue" } },
 * ];
 * const defaultVariants = { size: "small", color: "red" };
 * const result = addDefaultValue(variantObjects, defaultVariants);
 * // [
 * //   { name: "size", options: { small: "size-small", large: "size-large" }, defaultOption: "size-small" },
 * //   { name: "color", options: { red: "color-red", blue: "color-blue" }, defaultOption: "color-red" },
 * // ]
 */
export function addDefaultValue<
  T extends Record<string, VariantValues>,
  D extends Record<string, any>,
>(variantsObj: VariantObjects<T>, defaultVariants: D) {
  return variantsObj.map((variant) => {
    const defaultVariantKey = defaultVariants[variant.name as string];
    const defaultOption = defaultVariantKey
      ? variant.options[`${defaultVariantKey}`]
      : Object.values(variant.options)[0];

    return {
      name: variant.name,
      options: variant.options,
      defaultOption,
    };
  });
}

/**
 * Combines `getVariantObjects` and `addDefaultValue` into a single function.
 *
 * @template T - A record where keys are variant names and values are objects of key-value pairs.
 * @template D - A record where keys are variant names and values are default keys.
 * @param variants - The variants object to process.
 * @param defaultVariants - A record of default values for each variant name.
 * @returns An array of variant objects with their default values included.
 *
 * @example
 * const variants = {
 *   size: { small: "value1", large: "value2" },
 *   color: { red: "value1", blue: "value2" },
 * };
 * const defaultVariants = { size: "small", color: "red" };
 * const result = createVariantWithDefaults(variants, defaultVariants);
 * // [
 * //   { name: "size", options: { small: "size-small", large: "size-large" }, defaultOption: "size-small" },
 * //   { name: "color", options: { red: "color-red", blue: "color-blue" }, defaultOption: "color-red" },
 * // ]
 */

export function createVariantObjWithDefaults<
  T extends Record<string, VariantValues>,
  D extends Record<string, string | any>,
>(variants: T, defaultVariants: D) {
  const variantObjects = getVariantObjects(variants);
  return addDefaultValue(variantObjects, defaultVariants);
}
