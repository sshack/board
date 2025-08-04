import Link from "next/link";

const Header: React.FC = () => (
  <header className="flex items-center justify-between max-w-[1440px] mx-auto px-[40px] py-[28px] w-full bg-transparent">
    {/* Logo */}
    <div className="flex items-center">
      <img
        src="/lp/logoHeader.png"
        alt="Echelon Logo"
        className="h-[28px] w-[116px]"
      />
    </div>
    {/* Menu */}
    <nav className="flex-1 flex justify-center">
      <ul className="flex gap-2 md:gap-6 bg-[#0E3045] bg-opacity-70 rounded-full px-4 py-2 text-white font-medium text-sm md:text-base">
        <li>
          <Link href="#" className="px-3 py-1 rounded-full bg-[#1A2A38]">
            Home
          </Link>
        </li>
        <li>
          <Link href="#">Games</Link>
        </li>
        <li>
          <Link href="#">Updates</Link>
        </li>
        <li>
          <Link href="#">Our Team</Link>
        </li>
      </ul>
    </nav>
    {/* Botão */}
    <div>
      <button className="bg-white text-black rounded-full px-6 py-2 font-medium shadow">
        Subscribe
      </button>
    </div>
  </header>
);

export default Header;
