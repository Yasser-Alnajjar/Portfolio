import { cva, type VariantProps } from "class-variance-authority";
import { toast as sonnerToast, ExternalToast } from "sonner";
// --color-info: #f6fcfd;
// --color-info-foreground: #55cbd3;
// --color-success: #f4fcf7;
// --color-success-foreground: #22c55e;
// --color-warning: #fefbf2;
// --color-warning-foreground: #eab308;
// --color-error: #faf3f3;
// --color-error-foreground: #ef4444;
const toastVariants = cva("", {
  variants: {
    variant: {
      success:
        "!border-success 	!bg-green-50 dark:!bg-dark-success !text-success [&_svg]:!text-success",
      error:
        "!border-error !bg-red-50 dark:!bg-dark-error !text-error [&_svg]:!text-error",
      info: "!border-info !bg-blue-50 dark:!bg-dark-info !text-info [&_svg]:!text-info",
      warning:
        "!border-warning !bg-yellow-50 dark:!bg-dark-warning !text-warning [&_svg]:!text-warning",
    },
  },
  defaultVariants: {
    variant: "success",
  },
});

interface ToastProps extends ExternalToast, VariantProps<typeof toastVariants> {
  title: string;
}
function toast({ title, variant, ...props }: ToastProps) {
  return sonnerToast(title, {
    ...props,
    className: toastVariants({ variant }),
    position: "bottom-right",
    classNames: {
      icon: "[&>svg]:!shrink-0 [&>svg]:!size-4 mx-0",
      title: "!leading-[100%]",
    },
  });
}
export const useToast = () => {
  return {
    toast,
  };
};
