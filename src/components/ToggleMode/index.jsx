import OutlineButton from '../ui/OutlineButton';
import { useTheme } from '../../hooks';

export default function ToggleMode() {
  const {theme,toggleTheme}=useTheme();
  return theme ? (
    <OutlineButton variant="danger" border={false} onClick={toggleTheme}>
      🌕
    </OutlineButton>
  ) : (
    <OutlineButton variant="danger" border={false} onClick={toggleTheme}>
      🌑
    </OutlineButton>
  );
}
