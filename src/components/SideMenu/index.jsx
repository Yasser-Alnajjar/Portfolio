import { IoDocumentTextOutline } from 'react-icons/io5';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { MdOutlineAttachEmail } from 'react-icons/md';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { socialLinks } from '../../constants';
import { themeSelector, toggleMenu } from '../../redux/slices/theme.slice';
import ToggleMode from '../ToggleMode';
import Button from '../ui/Button';
import cv from '../../assets/Front_End_Yasser_Al_Najjar.pdf';

export default function SideMenu() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();
  const handleMenu = () => {
    dispatch(toggleMenu());
  };
  return (
    <aside className={`sidemenu  ${theme.openMenu ? 'open' : ''}`}>
      <div className="close">
        <Button
          className="toggle-menu mr-4 text-danger"
          variant="transparent"
          border={false}
          onClick={handleMenu}
        >
          <IoIosCloseCircleOutline size={25} />
        </Button>
      </div>
      <ul className="sidemenu-list">
        <li className="sidemenu-list-item">
          <NavLink onClick={handleMenu} to="/">
            Home
          </NavLink>
        </li>
        <li className="sidemenu-list-item">
          <NavLink onClick={handleMenu} to="/about">
            About
          </NavLink>
        </li>
        <li className="sidemenu-list-item">
          <NavLink onClick={handleMenu} to="/contact">
            Contact Me
          </NavLink>
        </li>
        <li>
          <div className="sidemenu-toggle">
            <ToggleMode />
          </div>
        </li>
      </ul>
      <ul className="flex flex-wrap flex-row gap-5 justify-center mt-5">
        {socialLinks.map((link) => (
          <li className="sidemenu-list-item" key={link.id}>
            <a
              className="tooltip"
              data-name={link.name}
              target="_blank"
              rel="noreferrer"
              href={link.href}
            >
              {link.icon}
            </a>
          </li>
        ))}
        <li className="sidemenu-list-item">
          <a
            className="tooltip"
            data-name="Email"
            href="mailto:yasseralnajjar72@gmail.com"
          >
            <MdOutlineAttachEmail size={22} />
          </a>
        </li>
        <li className="sidemenu-list-item">
          <a className="tooltip" href={cv} data-name="Resume">
            <IoDocumentTextOutline size={22} />
          </a>
        </li>
      </ul>
    </aside>
  );
}
