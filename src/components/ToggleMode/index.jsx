import { useState } from 'react';

import OutlineButton from '../ui/OutlineButton';

export default function ToggleMode() {
  const [mode, setMode] = useState(document.body.classList.contains('dark'));
  const handleClick = () => {
    setMode(!mode);
    if (mode) {
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
    }
  };

  return mode ? (
    <OutlineButton variant="danger" border={false} onClick={handleClick}>
      🌕
    </OutlineButton>
  ) : (
    <OutlineButton variant="danger" border={false} onClick={handleClick}>
      🌑
    </OutlineButton>
  );
}
