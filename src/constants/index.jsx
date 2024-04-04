import { LuGithub, LuFacebook, LuLinkedin, LuInstagram } from 'react-icons/lu';
import { cva } from 'class-variance-authority';
import variantData from '../data';

const buttonVariants = cva('btn', {
  variants: {
    variant: {
      ...variantData,
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      icon: 'rounded-full text-center min-w-8 min-h-8 p-2',
    },
    align: {
      left: 'text-start',
      start: 'text-start',
      center: 'text-center',
      right: 'text-end',
      end: 'text-end',
    },
    rounded: {
      true: 'rounded',
      false: 'rounded-none',
      full: 'rounded-full',
      md: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    align: 'center',
  },
});

const outlineButtonVariants = cva('btn-outline', {
  variants: {
    variant: {
      ...variantData,
    },
    size: {
      xs: 'text-xs',
      sm: 'text-sm',
      md: 'text-base',
      lg: 'text-lg',
      icon: 'rounded-full text-center min-w-8 min-h-8 p-2',
    },
    align: {
      left: 'text-start',
      start: 'text-start',
      center: 'text-center',
      right: 'text-end',
      end: 'text-end',
    },
    rounded: {
      true: 'rounded',
      false: 'rounded-none',
      full: 'rounded-full',
      md: 'rounded-md',
      sm: 'rounded-sm',
      lg: 'rounded-lg',
      xl: 'rounded-xl',
      '2xl': 'rounded-2xl',
      '3xl': 'rounded-3xl',
    },
    border: {
      false: 'border-0',
    },
    fullWidth: {
      true: 'w-full',
    },
  },
  defaultVariants: {
    variant: 'primary',
    align: 'center',
  },
});
const socialLinks = [
  {
    id: 1,
    href: 'https://github.com/Yasser-Alnajjar',
    icon: <LuGithub size={20} />,
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/yasser-alnajjar-643a77225',
    icon: <LuLinkedin size={20} />,
  },
  {
    id: 3,
    href: 'https://www.facebook.com/yasseralnajjar23',
    icon: <LuFacebook size={20} />,
  },
  {
    id: 4,
    href: 'https://www.instagram.com/y.a.s.s.e.r.a.l.n.a.j.j.a.r',
    icon: <LuInstagram size={20} />,
  },
];
export { buttonVariants, outlineButtonVariants, socialLinks };
