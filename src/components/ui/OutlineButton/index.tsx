import { twMerge } from 'tailwind-merge';

interface OutlineButtonProps {
  children: React.ReactNode;
  variant?: string;
  fullWidth?: boolean;
  size?: string;
  align?: string;
  border?: boolean;
  rounded?: boolean;
  className?: string;
  onClick?: () => void;
  [key: string]: unknown;
}

export default function OutlineButton({
  children,
  variant = 'primary',
  fullWidth = false,
  size = 'md',
  align = 'center',
  border = true,
  rounded = true,
  className = '',
  ...rest
}: OutlineButtonProps) {
  const classes = [
    'btn-outline',
    variant && `btn-outline-${variant}`,
    size && `text-${size}`,
    align && `text-${align}`,
    !border && 'border-0',
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
