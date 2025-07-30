'use client';

import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LuMenu } from 'react-icons/lu';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import ToggleMode from '../ToggleMode';
import OutlineButton from '../ui/OutlineButton';
import { toggleMenu } from '../../redux/slices/theme.slice';
const cv = '/assets/Front_End_Yasser_Al_Najjar.pdf';

export default function Navbar() {
  const dispatch = useDispatch();
  const [isMoved, setIsMoved] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    document.addEventListener('scroll', () => {
      if (window.scrollY > 0) {
        setIsMoved(true);
      } else {
        setIsMoved(false);
      }
    });
  }, [isMoved]);

  return (
    <nav className={`sticky top-0 z-10 backdrop-blur-lg py-4 transition-all duration-300 ease-in-out ${
      isMoved ? 'shadow-lg dark:shadow-[0_10px_30px_-10px_rgba(2,12,27,0.7)] shadow-[0_10px_30px_-10px_rgba(179,180,181,0.7)]' : ''
    }`}>
      <div className="container mx-auto flex justify-between items-center">
        <div>
          <Link
            href="/"
            className="text-lg font-bold btn-outline-danger border-0"
          >
            Yasser
          </Link>
        </div>
        <OutlineButton
          className="block md:hidden"
          variant="danger"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        >
          <LuMenu />
        </OutlineButton>
        <ul className="hidden md:flex items-center gap-6">
          {[
            { to: '/', label: 'Home' },
            { to: '/about', label: 'About' },
            { to: '/projects', label: 'Projects' },
          ].map((link) => (
            <li key={link.to} className="transition-transform duration-300 ease-in-out hover:text-danger hover:-translate-y-1.5 relative">
              <Link 
                href={link.to}
                className={`block transition-colors duration-300 ease-in-out ${pathname === link.to ? 'text-danger font-bold' : ''}`}
              >
                {link.label}
              </Link>
            </li>
          ))}
          <li className="transition-transform duration-300 ease-in-out hover:text-danger hover:-translate-y-1.5 relative">
            <a
              className="btn-outline-danger border-0"
              href={cv}
            >
              Resume
            </a>
          </li>
          <li>
            <div>
              <ToggleMode />
            </div>
          </li>
          <li>
            <input
              className="w-[30px] h-[30px] p-0"
              type="color"
              onChange={(e) => {
                document.documentElement.style.setProperty(
                  '--danger',
                  e.target.value,
                );
              }}
            />
          </li>
        </ul>
      </div>
    </nav>
  );
}
