import { cva } from 'class-variance-authority';
import variantData from '../../../data';
import mergeClass from '../../../utils';

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      ...variantData,
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      icon: 'rounded-full text-center min-w-8 min-h-8 p-2',
    },
    align: {
      left: 'text-start',
      start: 'text-start',
      center: 'text-center',
      right: 'text-end',
      end: 'text-end',
    },
    rounded: {
      true: 'rounded',
      false: 'rounded-none',
      full: 'rounded-full',
      md: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    align: 'center',
  },
});

export default function Button({
  children,
  variant,
  fullWidth,
  size,
  align,
  rounded,
  className = '',
  ...rest
}) {
  return (
    <button
      className={`${mergeClass(
        buttonVariants({
          variant,
          size,
          fullWidth,
          align,
          rounded,
        }),
      )} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
