import { twMerge } from 'tailwind-merge';
import clsx, { ClassValue } from 'clsx';

export default function mergeClass(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}
