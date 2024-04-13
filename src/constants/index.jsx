import { LuGithub, LuFacebook, LuLinkedin, LuInstagram } from 'react-icons/lu';
import { IoLogoHtml5, IoLogoCss3, IoLogoJavascript } from 'react-icons/io5';
import { SiTypescript } from 'react-icons/si';
import { cva } from 'class-variance-authority';
import variantData from '../data';
import bondi from '../assets/projects/bondi.png';
import productBuilder from '../assets/projects/product-builder.png';
import special from '../assets/projects/special.png';
import mitralHr from '../assets/projects/mitral-hr.png';
import union from '../assets/projects/union.png';
import hasabatt from '../assets/projects/hasabatt.png';
import aihr from '../assets/projects/aihr.png';
import akira from '../assets/projects/akira.png';
import tPage from '../assets/projects/t-page.png';
import kasper from '../assets/projects/kasper.png';
import analogClock from '../assets/projects/analog-clock.png';
import reminderApp from '../assets/projects/reminder-app.png';
import todoList from '../assets/projects/todo-list.png';
import community from '../assets/projects/community.png';
import memoryGame from '../assets/projects/memory-game.png';
import digitalClock from '../assets/projects/digital-clock.png';
import quizApp from '../assets/projects/quiz-app.png';

import html from '../assets/language-logos/html.svg';
import css from '../assets/language-logos/css.svg';
import javascript from '../assets/language-logos/javascript.svg';
import typescript from '../assets/language-logos/typescript.svg';
import cpp from '../assets/language-logos/cpp.svg';

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
      100: 'text-start',
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
      100: 'text-start',
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
const projects = [
  {
    id: 1,
    image: hasabatt,
    title: 'Hasabatt Dashboard',
    noLink: true,
    direction: '100',
  },
  {
    id: 2,
    image: aihr,
    title: 'Ai Hr Dashboard',
    noLink: true,
    direction: '-100',
  },
  {
    id: 3,
    image: union,
    title: 'The Union School',
    link: {
      live: 'the-union-school.vercel.app',
      github: 'https://github.com/Yasser-Alnajjar/The-Union-School',
    },
    direction: '100',
  },
  {
    id: 4,
    image: mitralHr,
    title: 'Mitral Hr',
    link: {
      live: 'https://mitral-hr.vercel.app',
      github: 'https://github.com/Yasser-Alnajjar/Mitral-HR',
    },
    direction: '-100',
  },
  {
    id: 5,
    image: productBuilder,
    title: 'Product Builder',
    link: {
      live: 'https://product-builder-chi.vercel.app',
      github: 'https://github.com/Yasser-Alnajjar/Product_Builder',
    },
    direction: '100',
  },
  {
    id: 6,
    image: special,
    title: 'Special',
    link: {
      live: 'https://yasser-alnajjar.github.io/Special',
      github: 'https://github.com/Yasser-Alnajjar/Special',
    },
    direction: '-100',
  },
  {
    id: 7,
    image: bondi,
    title: 'Bondi',
    link: {
      live: 'https://yasser-alnajjar.github.io/Bondi',
      github: 'https://github.com/Yasser-Alnajjar/Bondi',
    },
    direction: '100',
  },
  {
    id: 8,
    image: tPage,
    title: 'T-Page',
    link: {
      live: 'https://yasser-alnajjar.github.io/T-page',
      github: 'https://github.com/Yasser-Alnajjar/T-page',
    },
    direction: '-100',
  },
  {
    id: 9,
    image: kasper,
    title: 'Kasper',
    link: {
      live: 'https://yasser-alnajjar.github.io/Kasper',
      github: 'https://github.com/Yasser-Alnajjar/Kasper',
    },
    direction: '100',
  },
  {
    id: 10,
    image: quizApp,
    title: 'Quiz App',
    link: {
      live: 'https://yasser-alnajjar.github.io/Quiz-App',
      github: 'https://github.com/Yasser-Alnajjar/Quiz-App',
    },
    direction: '-100',
  },
  {
    id: 11,
    image: memoryGame,
    title: 'Memory Game Kids',
    link: {
      live: 'https://yasser-alnajjar.github.io/memoryGame-Kids',
      github: 'https://github.com/Yasser-Alnajjar/memoryGame-Kids',
    },
    direction: '100',
  },
  {
    id: 12,
    image: community,
    title: 'Eng Community',
    link: {
      live: 'https://yasser-alnajjar.github.io/Eng-Community',
      github: 'https://github.com/Yasser-Alnajjar/Eng-Community',
    },
    direction: '-100',
  },
  {
    id: 13,
    image: todoList,
    title: 'Todo List',
    link: {
      live: 'https://yasser-alnajjar.github.io/Todo-List',
      github: 'https://github.com/Yasser-Alnajjar/Todo-List',
    },
    direction: '100',
  },
  {
    id: 14,
    image: reminderApp,
    title: 'Reminder App',
    link: {
      live: 'https://yasser-alnajjar.github.io/Reminder-App',
      github: 'https://github.com/Yasser-Alnajjar/Reminder-App',
    },
    direction: '-100',
  },
  {
    id: 15,
    image: analogClock,
    title: 'Analog Clock',
    link: {
      live: 'https://yasser-alnajjar.github.io/Analog-Clock',
      github: 'https://github.com/Yasser-Alnajjar/Analog-Clock',
    },
    direction: '100',
  },
  {
    id: 16,
    image: digitalClock,
    title: 'Digital Clock',
    link: {
      live: 'https://yasser-alnajjar.github.io/Digital-Clock',
      github: 'https://github.com/Yasser-Alnajjar/Digital-Clock',
    },
    direction: '-100',
  },
  {
    id: 17,
    image: akira,
    title: 'Akira',
    link: {
      live: 'https://yasser-alnajjar.github.io/Akira',
      github: 'https://github.com/Yasser-Alnajjar/Akira',
    },
    direction: '100',
  },
];
const skills = [
  {
    id: 1,
    skill: 'HTML',
    icon: <img className="img-fluid" src={html} alt="html" />,
  },
  {
    id: 2,
    skill: 'Css',
    icon: <img className="img-fluid" src={css} alt="css" />,
  },
  {
    id: 3,
    skill: 'Javascript',
    icon: <img className="img-fluid" src={javascript} alt="javascript" />,
  },
  {
    id: 4,
    skill: 'Typescript',
    icon: <img className="img-fluid" src={typescript} alt="typescript" />,
  },
  {
    id: 5,
    skill: 'Cpp',
    icon: <img className="img-fluid" src={cpp} alt="cpp" />,
  },
];
export { buttonVariants, outlineButtonVariants, socialLinks, projects, skills };
