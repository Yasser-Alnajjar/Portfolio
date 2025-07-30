import { twMerge } from 'tailwind-merge';

interface LabelProps {
  id?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}

export default function Label({ id, required, className = '', children }: LabelProps) {
  return (
    <label 
      className={twMerge(`flex items-center gap-1 mb-2 font-medium ${className}`)} 
      htmlFor={id}
    >
      {children} {required && <span className="text-danger">*</span>}
    </label>
  );
}
