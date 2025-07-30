import { twMerge } from 'tailwind-merge';

interface InputProps {
  variant?: string;
  textarea?: boolean;
  border?: boolean;
  placeholder?: string;
  id?: string;
  className?: string;
  [key: string]: unknown;
}

export default function Input({
  variant = 'dark',
  textarea,
  border = false,
  placeholder,
  id,
  className = '',
  ...props
}: InputProps) {
  const classes = [
    'control',
    variant && variant,
    border ? `border-${variant}` : 'border-gray-400',
    className
  ].filter(Boolean);

  return textarea ? (
    <textarea
      {...props}
      rows={5}
      id={id}
      placeholder={placeholder}
      className={twMerge(classes.join(' '))}
    />
  ) : (
    <input
      {...props}
      id={id}
      placeholder={placeholder}
      className={twMerge(classes.join(' '))}
    />
  );
}
