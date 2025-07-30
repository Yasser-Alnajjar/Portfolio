import Link from 'next/link';
import { FaLink } from 'react-icons/fa6';

interface TitleProps {
  children: React.ReactNode;
  link?: string;
  name?: string;
  line?: boolean;
  className?: string;
}

export default function Title({ children, link, name, line, className = '' }: TitleProps) {
  return (
    <h2 className={`text-danger text-2xl font-bold relative ${className}`}>
      {children}
      {!line && (
        <span className={`block h-1 w-20 bg-danger mt-2 ${link ? 'opacity-50' : ''}`} />
      )}
      {link && (
        <Link
          className="btn-outline-danger border-0 inline-flex items-center gap-2 ml-4"
          href={link}
        >
          {name} <FaLink size={20} />
        </Link>
      )}
    </h2>
  );
}
