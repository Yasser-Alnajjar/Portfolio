import { twMerge } from 'tailwind-merge';

export default function Input({
  variant = 'dark',
  textarea,
  border = false,
  placeholder,
  id,
  className = '',
  ...props
}) {
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
