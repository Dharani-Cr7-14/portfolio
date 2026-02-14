import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import { useState } from 'react';

export default function Header() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#project' },
    { name: 'Skills & Certifications', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed w-full top-0 left-0 bg-slate-900/80 backdrop-blur-md border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <a className="font-bold text-2xl bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent tracking-tight" href="#">
            DHARANI S
          </a>

          {/* Desktop Menu */}
          <nav className="hidden md:block">
            <ul className="flex gap-8 text-gray-300 font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="hover:text-indigo-400 transition duration-300"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-white focus:outline-none"
            onClick={() => setToggleMenu(!toggleMenu)}
          >
            {toggleMenu ? (
              <XMarkIcon className="h-6 w-6" />
            ) : (
              <Bars3Icon className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {toggleMenu && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg absolute w-full left-0 top-16">
          <ul className="flex flex-col text-gray-600 font-medium p-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="block hover:text-indigo-600 transition duration-300"
                  onClick={() => setToggleMenu(false)}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}