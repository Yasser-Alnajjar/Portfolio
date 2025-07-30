import { twMerge } from 'tailwind-merge';

export default function Label({ id, required, className = '', children }) {
  return (
    <label 
      className={twMerge(`flex items-center gap-1 mb-2 font-medium ${className}`)} 
      htmlFor={id}
    >
      {children} {required && <span className="text-danger">*</span>}
    </label>
  );
}
