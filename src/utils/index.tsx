import { twMerge } from 'tailwind-merge';
import clsx from 'clsx';

export default function mergeClass(...inputs) {
  return twMerge(clsx(inputs));
}
