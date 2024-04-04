import { LuPanelRightClose } from 'react-icons/lu';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { themeSelector, toggleMenu } from '../../redux/slices/theme.slice';
import ToggleMode from '../ToggleMode';
import OutlineButton from '../ui/OutlineButton';

export default function SideMenu() {
  const theme = useSelector(themeSelector);
  const dispatch = useDispatch();

  return (
    <aside className={`sidemenu ${theme.openMenu ? 'open' : ''}`}>
      <div className="close">
        <OutlineButton
          className="toggle-menu"
          variant="danger"
          onClick={() => {
            dispatch(toggleMenu());
          }}
        >
          <LuPanelRightClose />
        </OutlineButton>
      </div>
      <ul className="sidemenu-list">
        <li className="sidemenu-list-item">
          <NavLink to="/">Home</NavLink>
        </li>
        <li className="sidemenu-list-item">
          <NavLink to="/about">About</NavLink>
        </li>
        <li className="sidemenu-list-item">
          <NavLink to="/contact">Contact Me</NavLink>
        </li>
        <li>
          <div className="sidemenu-toggle">
            <ToggleMode />
          </div>
        </li>
      </ul>
    </aside>
  );
}
