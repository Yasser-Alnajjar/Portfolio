import { twMerge } from 'tailwind-merge';

export default function Button({
  children,
  variant = 'primary',
  fullWidth,
  size,
  align = 'center',
  rounded = true,
  className = '',
  ...rest
}) {
  const classes = [
    'btn',
    variant && `btn-${variant}`,
    size && `text-${size}`,
    align && `text-${align}`,
    rounded && (typeof rounded === 'boolean' ? 'rounded' : `rounded-${rounded}`),
    fullWidth && 'w-full',
    className
  ].filter(Boolean);

  return (
    <button
      className={twMerge(classes.join(' '))}
      {...rest}
    >
      {children}
    </button>
  );
}
