import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { LuMenu } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import ToggleMode from '../ToggleMode';
import { outlineButtonVariants } from '../../constants';
import OutlineButton from '../ui/OutlineButton';
import { toggleMenu } from '../../redux/slices/theme.slice';
import cv from '../../assets/Front_End_Yasser_Al_Najjar.pdf';

export default function Navbar() {
  const dispatch = useDispatch();
  const [isMoved, setIsMoved] = useState(false);

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
    <nav className={`navbar ${isMoved ? 'shadow' : ''}`}>
      <div className="container">
        <div className="navbar-logo">
          <NavLink
            to="/"
            className={`${outlineButtonVariants({
              variant: 'danger-500',
              size: 'lg',
              border: false,
            })} text-bold`}
          >
            Yasser
          </NavLink>
        </div>
        <OutlineButton
          className="toggle-menu"
          variant="danger"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        >
          <LuMenu />
        </OutlineButton>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/projects">Projects</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
          <li className="navbar-list-item">
            <a
              className={outlineButtonVariants({
                variant: 'danger-500',
                border: false,
              })}
              href={cv}
            >
              Resume
            </a>
          </li>
          <li>
            <div className="navbar-toggle">
              <ToggleMode />
            </div>
          </li>
          <li>
            <input
              className="control p-0"
              style={{ width: '30px', height: '30px' }}
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
