import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <span className="text-2xl font-heading">TapEats</span>
    </Link>
  );
};