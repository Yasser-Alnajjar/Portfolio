import mergeClass from '../../../utils';
import { BadgeVariants } from '../../../constants';

export default function Badge({
  children,
  variant,
  rounded,
  className = '',
  ...rest
}) {
  return (
    <span
      className={`${mergeClass(
        BadgeVariants({
          variant,
          rounded,
        }),
      )} ${className}`}
      {...rest}
    >
      {children}
    </span>
  );
}
