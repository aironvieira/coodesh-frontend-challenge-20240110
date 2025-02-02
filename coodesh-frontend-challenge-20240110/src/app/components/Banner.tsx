"use client";

import Image from 'next/image';
import BannerFoto from '../assets/images/BannerFoto.png'

const Diferenciais: React.FC = () => {


    return (
        <section className={` w-full max-h-[420px] bg-cover bg-center flex rounded-xl overflow-hidden border border-solid border-[#D0D5D8]`}>
            <Image
                src={BannerFoto}
                alt="Imagem para anunciar"
                className="w-[45%] lg:w-[65%] object-cover"
            />
            <div className='p-8 w-[458px] min-w-[340px]'>
                <p className='text-custom-orange font-bold mb-8'>Quer Vender ou Alugar?</p>
                <h3 className='font-bold text-[34px] text-custom-dark-grey leading-[1]'>Anuncie grátis</h3>
                <h3 className='font-bold text-[34px] text-custom-dark-grey leading-[1] mb-20'>para mais de 100 mil pessoas todos os dias</h3>

                <button className='border border-custom-purple text-custom-purple rounded-md px-4 py-2 hover:text-white hover:bg-custom-purple font-semibold mb-8'>Buscar Imóveis</button>
                <a className='block text-custom-dark-grey font-semibold text-[#4B555F]' href="#">Saiba quanto vale seu imóvel</a>

            </div>
        </section>
    );
  }
export default Diferenciais;
  