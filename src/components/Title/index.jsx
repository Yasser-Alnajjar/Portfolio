import { Link } from 'react-router-dom';
import { FaLink } from 'react-icons/fa6';
import { outlineButtonVariants } from '../../constants';

export default function Title({ children, link, name, line, className }) {
  return (
    <h2 className={`title text-danger ${className}`}>
      {children}
      {!line && <span className={`line ${link ? 'opacity' : ''}`} />}
      {link && (
        <Link
          className={`link ${outlineButtonVariants({ variant: 'danger', border: false })}`}
          to={link}
        >
          {name} <FaLink size={20} />
        </Link>
      )}
    </h2>
  );
}
