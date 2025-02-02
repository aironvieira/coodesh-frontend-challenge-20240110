"use client";

import { useState } from 'react';
import Image from 'next/image';
import Logo from '../assets/images/logo.png'
import Menu from '../assets/images/Menu.svg'
import CloseMenu from '../assets/images/close.svg'
import LogoBranco from '../assets/images/LogoBranco.png'


const Header: React.FC = () => {

    const [menuToggle, setMenuToggle] = useState(false);

    return (
      <div className="flex items-center justify-between px-8 py-4 sticky top-0 bg-white z-[100]">
        <Image src={Logo} alt="Logo da Empresa" width={162} height={50}/>

        <nav className="gap-4 hidden md:flex">
            <a className='text-custom-grey' href="#">Imobiliárias</a>
            <a className='text-custom-grey' href="#">Quero me Associar</a>
            
            <div className="relative group text-custom-grey">
                <button className="flex items-center gap-1">
                    Sobre
                    <svg className="ml-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute bg-white left-0 w-48 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden group-hover:block">
                    <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-100">Desenvolvimento Web</a>
                    <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-100">Design Gráfico</a>
                    <a href="#" className="block px-4 py-2 rounded-md hover:bg-gray-100">Consultoria</a>
                </div>
            </div>

            <a className='text-custom-grey' href="#">Blog</a>
        </nav>

        <div className="gap-4 items-center hidden md:flex">
            <button className='border border-custom-purple text-custom-purple rounded-full px-3 py-1 hover:text-white hover:bg-custom-purple '>Anunciar Imóvel</button>
            <a className='text-custom-grey' href="#">Entrar</a>
        </div>

        <Image src={Menu} alt="menu" width={18} height={14} className='md:hidden' onClick={() => setMenuToggle(true)}/>
        <div className={`text-white md:hidden absolute p-8 bg-custom-orange w-[100vw] h-[100vh] transition duration-200 top-0 z-[100] left-[-100%] ${menuToggle ? "left-[0%]" : "" }`}>
			<div className='flex justify-between mb-10'>
				<Image 
						onClick={() => setMenuToggle(false)}
						src={LogoBranco}
						alt="Logo Branco"
						className="object-cover w-[162px] h-[41px]"
						/>
				<Image 
						onClick={() => setMenuToggle(false)}
						src={CloseMenu}
						alt="Logo Branco"
						className="object-cover w-[22px] h-[22px] fill-white"
						/>
			</div>

			<a onClick={() => setMenuToggle(false)} className='block px-4 py-2 ' href="#">Imobiliárias</a>
            <a onClick={() => setMenuToggle(false)} className='block px-4 py-2 ' href="#">Quero me Associar</a>
			<a onClick={() => setMenuToggle(false)} className='block px-4 py-2 ' href="#">Sobre</a>		
			<a onClick={() => setMenuToggle(false)} href="#" className="block px-4 py-2">Desenvolvimento Web</a>
			<a onClick={() => setMenuToggle(false)} href="#" className="block px-4 py-2">Design Gráfico</a>
			<a onClick={() => setMenuToggle(false)} href="#" className="block px-4 py-2">Consultoria</a>
            <a onClick={() => setMenuToggle(false)} className='block px-4 py-2' href="#">Blog</a>
            <a onClick={() => setMenuToggle(false)} className='block px-4 py-2' href="#">Entrar</a>
			<button className='border border-white text-white rounded-full mt-6 ml-4 px-3 py-1 hover:hover:bg-custom-purple '>Anunciar Imóvel</button>

			
        </div>


      </div>
    );
  }
export default Header;
  