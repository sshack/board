import React from 'react';

const Footer: React.FC = () => {
   return(
    <footer className=" bg-black text-white ">
        <div className="max-w-[1440px] h-[100px] mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Esquerda - Logo + Empresa */}
            <div className="flex items-center gap-2">
            <img src="/lp/iconFooter.png" alt="Logo" className="w-[20px] h-[20px]" />
            <span className="text-sm">© To Whit Ventures</span>
            </div>

            {/* Centro - Navegação */}
            <ul className="flex gap-6 text-sm">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Games</a></li>
            <li><a href="#" className="hover:underline">Updates</a></li>
            <li><a href="#" className="hover:underline">Our Team</a></li>
            </ul>

            {/* Direita - Redes sociais */}
            <ul className="flex gap-6 text-sm">
            <li><a href="#" className="hover:underline">Facebook</a></li>
            <li><a href="#" className="hover:underline">Instagram</a></li>
            <li><a href="#" className="hover:underline">TikTok</a></li>
            <li><a href="#" className="hover:underline">Xitter</a></li>
            </ul>
        </div>
    </footer>
   )     
}

export default Footer;