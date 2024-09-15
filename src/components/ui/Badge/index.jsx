import mergeClass from '../../../utils';
import { BadgeVariants } from '../../../constants';

export default function Badge({
  children,
  variant,
  rounded,
  size,
  className = '',
  ...rest
}) {
  return (
    <span
      className={`${mergeClass(
        BadgeVariants({
          variant,
          rounded,
          size,
        }),
      )} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
