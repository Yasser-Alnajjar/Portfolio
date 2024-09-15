import { LuGithub, LuFacebook, LuLinkedin, LuInstagram } from 'react-icons/lu';
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
import css from '../assets/language-logos/css.png';
import javascript from '../assets/language-logos/javascript.svg';
import typescript from '../assets/language-logos/typescript.svg';
import sass from '../assets/language-logos/sass.svg';
import git from '../assets/language-logos/git.png';
import github from '../assets/language-logos/github.svg';
import bootstrap from '../assets/language-logos/bootstrap.svg';
import vite from '../assets/language-logos/vite.svg';
import react from '../assets/language-logos/react.png';
import next from '../assets/language-logos/next.svg';
import vue from '../assets/language-logos/vue.ico';
import vercel from '../assets/language-logos/vercel.svg';
import npm from '../assets/language-logos/npm.png';
import tailwind from '../assets/language-logos/tailwind.png';
import mui from '../assets/language-logos/mui.png';
import webpack from '../assets/language-logos/webpack.png';

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
    name: 'Github',
    icon: <LuGithub size={20} />,
  },
  {
    id: 2,
    href: 'https://www.linkedin.com/in/yasser-alnajjar-643a77225',
    name: 'Linkedin',
    icon: <LuLinkedin size={20} />,
  },
  {
    id: 3,
    href: 'https://www.facebook.com/yasseralnajjar23',
    name: 'Facebook',
    icon: <LuFacebook size={20} />,
  },
  {
    id: 4,
    href: 'https://www.instagram.com/y.a.s.s.e.r.a.l.n.a.j.j.a.r',
    name: 'Instagram',
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
      live: 'https://the-union-school.vercel.app',
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
    direction: '100',
  },
  {
    id: 2,
    skill: 'Css',
    icon: <img className="img-fluid" src={css} alt="css" />,
    direction: '-100',
  },
  {
    id: 3,
    skill: 'Javascript',
    icon: <img className="img-fluid" src={javascript} alt="javascript" />,
    direction: '100',
  },
  {
    id: 4,
    skill: 'Typescript',
    icon: <img className="img-fluid" src={typescript} alt="typescript" />,
    direction: '-100',
  },
  {
    id: 5,
    skill: 'React.js',
    icon: <img className="img-fluid" src={react} alt="react" />,
    direction: '100',
  },
  {
    id: 6,
    skill: 'Next.js',
    icon: <img className="img-fluid" src={next} alt="next" />,
    direction: '-100',
  },
  {
    id: 7,
    skill: 'Vue.js (Fundamentals)',
    icon: <img className="img-fluid" src={vue} alt="vue" />,
    direction: '100',
  },
  {
    id: 8,
    skill: 'Bootstrap',
    icon: <img className="img-fluid" src={bootstrap} alt="bootstrap" />,
    direction: '-100',
  },
  {
    id: 9,
    skill: 'Sass',
    icon: <img className="img-fluid" src={sass} alt="sass" />,
    direction: '100',
  },
  {
    id: 10,
    skill: 'Tailwind Css',
    icon: <img className="img-fluid" src={tailwind} alt="tailwind" />,
    direction: '-100',
  },
  {
    id: 11,
    skill: 'MUI',
    icon: <img className="img-fluid" src={mui} alt="mui" />,
    direction: '100',
  },
  {
    id: 12,
    skill: 'NPM',
    icon: <img className="img-fluid" src={npm} alt="npm" />,
    direction: '-100',
  },
  {
    id: 13,
    skill: 'Vite',
    icon: <img className="img-fluid" src={vite} alt="vite" />,
    direction: '100',
  },
  {
    id: 14,
    skill: 'Webpack',
    icon: <img className="img-fluid" src={webpack} alt="webpack" />,
    direction: '-100',
  },
  {
    id: 15,
    skill: 'Git',
    icon: <img className="img-fluid" src={git} alt="git" />,
    direction: '100',
  },
  {
    id: 16,
    skill: 'Github',
    icon: <img className="img-fluid" src={github} alt="github" />,
    direction: '-100',
  },
  {
    id: 17,
    skill: 'vercel',
    icon: <img className="img-fluid" src={vercel} alt="vercel" />,
    direction: '100',
  },
];
const BadgeVariants = cva('badge', {
  variants: {
    variant: {
      ...variantData,
    },
    rounded: {
      true: 'rounded',
      pill: 'pill',
      circle: 'circle',
    },
    size: {
      xs: 'text-xs px-1 py-0',
      sm: 'text-sm px-2 py-2',
      base: 'text-base px-1 py-1',
      lg: 'text-lg px-1 py-1',
      xl: 'text-xl px-1 py-1',
    },
  },
  defaultVariants: {
    variant: 'primary',
    rounded: 'pill',
  },
});
export {
  BadgeVariants,
  buttonVariants,
  outlineButtonVariants,
  socialLinks,
  projects,
  skills,
};
