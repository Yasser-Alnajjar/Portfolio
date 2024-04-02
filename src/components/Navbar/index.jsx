import { NavLink } from 'react-router-dom';
import ToggleMode from '../ToggleMode';
import { outlineButtonVariants } from '../../constants';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar-logo">
          <NavLink
            to="/"
            className={outlineButtonVariants({
              variant: 'danger-500',
              border: false,
            })}
          >
            Yasser
          </NavLink>
        </div>
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/about">About</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/contact">Contact Me</NavLink>
          </li>
          <li>
            <div className="navbar-toggle">
              <ToggleMode />
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}
