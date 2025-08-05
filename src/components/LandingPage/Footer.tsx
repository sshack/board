import React from 'react';

const PAGES = [
  { href: '/', label: 'Home' },
  { href: '/games', label: 'Games' },
  { href: '/updates', label: 'Updates' },
  { href: '/team', label: 'Our Team' },
];

const SOCIAL = [
  {
    href: 'https://www.instagram.com/gameonechelon/',
    label: 'Instagram',
  },
  {
    href: 'https://discord.gg/8vg87vZyfS',
    label: 'Discord',
  },
];

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white w-full">
      <div className="max-w-[1440px] mx-auto px-4 py-6 flex flex-col md:flex-row md:justify-between md:items-center">
        {/* Logo & Company */}
        <div className="flex flex-col items-center md:flex-row md:items-center md:gap-2">
          <img
            src="/lp/iconFooter.png"
            alt="Echelon Logo"
            className="w-5 h-5"
          />
          <span className="text-sm mt-4 md:mt-0">© To Whit Ventures</span>
        </div>

        {/* Divider */}
        <img src="/lp/divider.png" alt="" className="w-full mt-6 md:hidden" />

        {/* Page links */}
        <ul className="flex flex-row items-center justify-center gap-6 text-sm mt-6 md:mt-0 md:flex-row">
          {PAGES.map(({ href, label }) => (
            <li key={href}>
              <a href={href} className="hover:underline">
                {label}
              </a>
            </li>
          ))}
        </ul>

        {/* Divider */}
        <img src="/lp/divider.png" alt="" className="w-full mt-6 md:hidden" />

        {/* Social links */}
        <ul className="flex flex-row items-center justify-center gap-6 text-sm mt-6 md:mt-0 md:flex-row">
          {SOCIAL.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
