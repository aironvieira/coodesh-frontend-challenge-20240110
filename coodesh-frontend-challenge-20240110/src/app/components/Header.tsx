import Image from 'next/image';
import Logo from '../assets/images/logo.png'

const Header: React.FC = () => {
    return (
      <div className="flex items-center justify-between px-8 py-4">
        <Image src={Logo} alt="Logo da Empresa" width={162} height={50}/>

        <nav className="flex gap-8">
            <a className='text-custom-grey' href="#">Imobiliárias</a>
            <a className='text-custom-grey' href="#">Quero me Associar</a>
            
            <div className="relative group text-custom-grey">
                <button className="flex items-center gap-1">
                    Sobre
                    <svg className="ml-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-0 w-48 rounded-md shadow-lg opacity-0 group-hover:opacity-100 transition-opacity hidden group-hover:block">
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Desenvolvimento Web</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Design Gráfico</a>
                    <a href="#" className="block px-4 py-2 hover:bg-gray-100">Consultoria</a>
                </div>
            </div>

            <a className='text-custom-grey' href="#">Blog</a>
        </nav>

        <div className="flex gap-4 items-center">
            <button className='border border-custom-purple text-custom-purple rounded-full px-3 py-1 hover:text-white hover:bg-custom-purple '>Anunciar Imóvel</button>
            <a className='text-custom-grey' href="#">Entrar</a>
        </div>

      </div>
    );
  }
export default Header;
  