import { cva } from 'class-variance-authority';

import mergeClass from '../../../utils';

const InputVariants = cva('control', {
  variants: {
    variant: {
      primary: 'primary border-primary',
      indigo: 'indigo border-indigo',
      pink: 'pink border-pink',
      danger: 'danger border-danger',
      orange: 'orange border-orange',
      warning: 'warning border-warning',
      green: 'green border-green',
      teal: 'teal border-teal',
      cyan: 'cyan border-cyan',
      white: 'white border-white',
      dark: 'dark border-dark text-dark',
    },
    border: {
      false: 'border-gray-400',
    },
  },
  defaultVariants: {
    border: false,
    variant: 'dark',
  },
});

export default function Input({
  variant,
  textarea,
  border,
  placeholder,
  id,
  className = '',
  ...props
}) {
  return textarea ? (
    <textarea
      {...props}
      rows={5}
      id={id}
      placeholder={placeholder}
      className={`${mergeClass(
        InputVariants({ variant, border }),
      )} ${className}`}
    />
  ) : (
    <input
      {...props}
      id={id}
      placeholder={placeholder}
      className={`${mergeClass(
        InputVariants({ variant, border }),
      )} ${className}`}
    />
  );
}
