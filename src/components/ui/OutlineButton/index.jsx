import mergeClass from '../../../utils';
import { outlineButtonVariants } from '../../../constants';

export default function OutlineButton({
  children,
  variant,
  fullWidth,
  size,
  align,
  as,
  border,
  rounded,
  className = '',
  ...rest
}) {
  return (
    <button
      className={`${mergeClass(
        outlineButtonVariants({
          variant,
          size,
          fullWidth,
          align,
          border,
          rounded,
        }),
      )} ${className}`}
      {...rest}
    >
      {children}
    </button>
  );
}
