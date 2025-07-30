import { twMerge } from 'tailwind-merge';

interface BadgeProps {
  children: React.ReactNode;
  variant?: string;
  rounded?: string | boolean;
  size?: 'xs' | 'sm' | 'base' | 'lg' | 'xl';
  className?: string;
  [key: string]: unknown;
}

export default function Badge({
  children,
  variant = 'primary',
  rounded = 'pill',
  size = 'base',
  className = '',
  ...rest
}: BadgeProps) {
  const classes = [
    'badge',
    variant && `badge-${variant}`,
    rounded && (rounded === true ? 'rounded' : rounded),
    size && (size === 'xs' ? 'text-xs px-1 py-0' :
             size === 'sm' ? 'text-sm px-2 py-2' :
             size === 'base' ? 'text-base px-1 py-1' :
             size === 'lg' ? 'text-lg px-1 py-1' :
             size === 'xl' ? 'text-xl px-1 py-1' : ''),
    className
  ].filter(Boolean);

  return (
    <span
      className={twMerge(classes.join(' '))}
      {...rest}
    >
      {children}
    </span>
  );
}
