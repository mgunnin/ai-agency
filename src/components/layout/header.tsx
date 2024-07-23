import React from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-ub-grey text-white p-4">
      <nav className="container mx-auto flex justify-between items-center">
        <Link href="/">
          <a className="text-2xl font-bold">Vertical Labs</a>
        </Link>
        <ul className="flex space-x-4">
          <li><Link href="/about"><a>About</a></Link></li>
          <li><Link href="/projects"><a>Projects</a></Link></li>
          <li><Link href="/team"><a>Team</a></Link></li>
          <li><Link href="/contact"><a>Contact</a></Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;