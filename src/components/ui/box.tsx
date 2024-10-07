import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const boxVariants = cva("", {
  variants: {
    variant: {
      blue: "w-96 rounded-lg bg-white p-4 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] dark:bg-[#373737]",
      default:
        "w-96 rounded-lg bg-transparent border border-purple-600 text-white p-4 shadow-[0px_2px_10px_0px_rgba(0,0,0,0.1)] dark:bg-[#373737]",
    },
    size: {
      default: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "default",
  },
});

export interface BoxProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof boxVariants> {
  asChild?: boolean;
}

const Box = React.forwardRef<HTMLDivElement, BoxProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "div";
    return (
      <Comp
        className={cn(boxVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Box.displayName = "Box";

export { Box, boxVariants };
