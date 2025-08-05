'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import clsx from 'clsx';
import Hamburguer from '../icons/hamburguer';
import Close from '../icons/close';

const NAV_LINKS = [
  { href: '/', label: 'Home' },
  { href: '/games', label: 'Games' },
  { href: '/updates', label: 'Updates' },
  { href: '/team', label: 'Our Team' },
];

const Header: React.FC = () => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const originalStyle = window.document.body.style.overflow;
    window.document.body.style.overflow = isOpen ? 'hidden' : originalStyle;
    return () => {
      window.document.body.style.overflow = originalStyle;
    };
  }, [isOpen]);

  // Automatically close the mobile menu whenever the route changes
  useEffect(() => {
    if (isOpen) {
      setIsOpen(false);
    }
  }, [pathname]);

  return (
    <header className="w-full bg-transparent fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center justify-between max-w-[1440px] mx-auto px-4 md:px-10 py-6 w-full">
        <Link href="/" className="flex items-center flex-shrink-0">
          <img
            src="/lp/logoHeader.png"
            alt="Echelon Logo"
            className="w-[116px] h-[28px] object-contain flex-shrink-0"
          />
        </Link>

        <nav className="hidden sm:flex flex-1 justify-center">
          <ul className="flex items-center h-11 px-5 gap-7 rounded-full bg-[#0E3045] backdrop-blur-sm">
            {NAV_LINKS.map(({ href, label }) => {
              const isActive =
                pathname === href || pathname.startsWith(`${href}/`);
              return (
                <li key={href} className="whitespace-nowrap">
                  <Link
                    href={href}
                    className={clsx(
                      'font-medium text-[14px] leading-[20px]',
                      isActive ? 'text-white' : 'text-white/50'
                    )}
                  >
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <button className="hidden sm:block bg-white text-black rounded-full px-6 py-2 font-medium shadow whitespace-nowrap">
          Subscribe
        </button>

        <button
          type="button"
          aria-label="Toggle menu"
          className="sm:hidden"
          onClick={() => setIsOpen((prev) => !prev)}
        >
          {isOpen ? (
            <Close className="w-6 h-6 text-white" />
          ) : (
            <Hamburguer className="w-6 h-6 text-white" />
          )}
        </button>
      </div>

      <div
        className={clsx(
          'fixed inset-0 z-50 bg-black transform transition-transform duration-300 ease-in-out',
          isOpen ? 'translate-x-0' : 'translate-x-full'
        )}
      >
        <div className="flex justify-end px-6 pt-6 sm:hidden">
          <button
            type="button"
            aria-label="Close menu"
            onClick={() => setIsOpen(false)}
          >
            <Close className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="flex flex-col items-start px-6 gap-5 absolute top-1/2 -translate-y-1/2 w-full">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              pathname === href || pathname.startsWith(`${href}/`);
            return (
              <Link
                key={href}
                href={href}
                className={clsx(
                  'font-semibold text-[28px] leading-[36px] tracking-[-1.12px]',
                  isActive ? 'text-[#FC5212]' : 'text-white'
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <div className="absolute bottom-6 left-0 right-0 px-6">
          <button className="w-full bg-white text-black rounded-full py-3 font-medium shadow">
            Subscribe
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
