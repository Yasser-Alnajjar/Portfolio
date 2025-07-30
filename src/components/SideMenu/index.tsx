'use client';

import { IoDocumentTextOutline } from 'react-icons/io5';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { socialLinks } from '../../constants';
import { themeSelector, toggleMenu } from '../../redux/slices/theme.slice';
import ToggleMode from '../ToggleMode';
import Button from '../ui/Button';
const cv = '/assets/Front_End_Yasser_Al_Najjar.pdf';

export default function SideMenu() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const pathname = usePathname();
  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  
  return (
    <aside className={`fixed top-0 right-0 w-full h-full z-20 backdrop-blur-sm border-t border-b border-danger transition-transform duration-300 ease-in-out bg-white dark:bg-black ${
      theme.openMenu ? 'translate-y-0' : '-translate-y-full'
    }`}>
      <div className="flex justify-end">
        <Button
          className="mr-4 text-danger"
          variant="transparent"
          onClick={handleMenu}
        >
          <IoIosCloseCircleOutline size={25} />
        </Button>
      </div>
      
      <ul className="flex flex-col items-center justify-center gap-6">
        {[
          { to: '/', label: 'Home' },
          { to: '/about', label: 'About' },
          { to: '/contact', label: 'Contact Me' },
        ].map((link) => (
          <li key={link.to} className="transition-all duration-200 ease-in-out relative hover:text-danger hover:-translate-y-1.5">
            <Link 
              onClick={handleMenu} 
              href={link.to}
              className={pathname === link.to ? 'text-danger' : ''}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <li>
          <div>
            <ToggleMode />
          </div>
        </li>
      </ul>
      
      <ul className="flex flex-wrap flex-row gap-5 justify-center mt-5">
        {socialLinks.map((link) => (
          <li key={link.id} className="transition-all duration-200 ease-in-out relative hover:text-danger hover:-translate-y-1.5">
            <a
              className="relative px-2 py-1 transition-all duration-300 ease-in-out group"
              data-name={link.name}
              target="_blank"
              rel="noreferrer"
              href={link.href}
            >
              {link.icon}
              <span className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out border border-danger px-2 py-1 rounded-md z-30 bg-white dark:bg-black text-danger">
                {link.name}
              </span>
            </a>
          </li>
        ))}
        <li className="transition-all duration-200 ease-in-out relative hover:text-danger hover:-translate-y-1.5">
          <a
            className="relative px-2 py-1 transition-all duration-300 ease-in-out group"
            href="mailto:yasseralnajjar72@gmail.com"
          >
            <MdOutlineAttachEmail size={22} />
            <span className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out border border-danger px-2 py-1 rounded-md z-30 bg-white dark:bg-black text-danger">
              Email
            </span>
          </a>
        </li>
        <li className="transition-all duration-200 ease-in-out relative hover:text-danger hover:-translate-y-1.5">
          <a 
            className="relative px-2 py-1 transition-all duration-300 ease-in-out group" 
            href={cv}
          >
            <IoDocumentTextOutline size={22} />
            <span className="absolute left-1/2 -translate-x-1/2 -top-10 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 ease-in-out border border-danger px-2 py-1 rounded-md z-30 bg-white dark:bg-black text-danger">
              Resume
            </span>
          </a>
        </li>
      </ul>
    </aside>
  );
}
