import { useDispatch } from 'react-redux';
import { LuMenu } from 'react-icons/lu';
import { NavLink } from 'react-router-dom';
import ToggleMode from '../ToggleMode';
import { outlineButtonVariants } from '../../constants';
import OutlineButton from '../ui/OutlineButton';
import { toggleMenu } from '../../redux/slices/theme.slice';

export default function Navbar() {
  const dispatch = useDispatch();
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
