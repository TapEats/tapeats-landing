import Link from 'next/link';

interface LogoProps {
  className?: string;
}

export const Logo = ({ className = '' }: LogoProps) => {
  return (
    <Link href="/" className={`flex items-center gap-2.5 ${className}`}>
      <div className="w-9 h-9 bg-gradient-to-br from-mint to-mintDarker rounded-md flex items-center justify-center relative">
        <span className="text-black text-lg">✨</span>
      </div>
      <span className="text-2xl font-heading">TapEats</span>
    </Link>
  );
};