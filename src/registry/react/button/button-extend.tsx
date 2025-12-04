import {
  buttonStyles,
  cn,
  createTVUnstyledSlots,
  type UnstyledComponentWithSlots,
} from "@mijn-ui/react";
import { Slot, Slottable } from "@radix-ui/react-slot";
import { Loader2 } from "lucide-react";
import type * as React from "react";
import { tv, type VariantProps } from "tailwind-variants";

// Create custom button styles by extending the default styles
// using the tailwind-variants (tv) function from @mijn-ui/react-theme.
// [!code ++]
const customButtonStyles = tv({
  // [!code ++]
  extend: buttonStyles,
  // [!code ++]
  variants: {
    // [!code ++]
    color: {
      olive: "", // [!code ++]
    }, // [!code ++]
  }, // [!code ++]
  // [!code ++]
  compoundVariants: [
    // [!code ++]
    {
      // [!code ++]
      color: "olive", // [!code ++]
      variant: "default", // [!code ++]
      // [!code ++]
      class: {
        base: "bg-[#BEF264] text-[#000000]", // [!code ++]
        icon: "text-[#000000]", // [!code ++]
      }, // [!code ++]
    }, // [!code ++]
    // ... add more compound variants here [!code ++]
  ], // [!code ++]
}); // [!code ++]

// define the customButtonStyles slots and variants type
type CustomButtonSlots = keyof ReturnType<typeof customButtonStyles>; // [!code ++]
type CustomButtonVariants = VariantProps<typeof customButtonStyles>; // [!code ++]

// [!code --]
// export type ButtonBaseProps = UnstyledComponentWithSlots<ButtonSlots> &
export type ButtonBaseProps = UnstyledComponentWithSlots<CustomButtonSlots> & // [!code ++]
  React.ComponentPropsWithRef<"button"> & {
    asChild?: boolean;
    loading?: boolean;
  };

// [!code --]
// export type ButtonProps = ButtonBaseProps & ButtonVariantProps
export type ButtonProps = ButtonBaseProps & CustomButtonVariants; // [!code ++]

const Button = ({
  unstyled,
  className,
  classNames,
  color,
  variant,
  size,
  loading,
  disabled,
  asChild = false,
  children,
  ...props
}: ButtonProps) => {
  const Component = asChild ? Slot : "button";
  const styles = customButtonStyles({ color, variant, size }); // [!code ++]
  // [!code --]
  // const styles = buttonStyles({ color, variant, size, radius })
  const { base, loadingIcon } = createTVUnstyledSlots(styles, unstyled);

  return (
    <Component
      className={base({ className: cn(classNames?.base, className) })}
      disabled={loading || disabled}
      {...props}
    >
      {loading && (
        <Loader2
          className={loadingIcon({ className: classNames?.loadingIcon })}
        />
      )}
      <Slottable>{loading ? "Loading..." : children}</Slottable>
    </Component>
  );
};

export { Button };
