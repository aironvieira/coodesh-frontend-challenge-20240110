"use client";

import Image from 'next/image';
import BannerFoto from '../assets/images/BannerFoto.png'

const Diferenciais: React.FC = () => {


    return (
        <section className='md:container md:mt-20'>

            <section className={` w-full md:max-h-[420px] bg-cover bg-center md:flex md:rounded-xl overflow-hidden md:border md:border-solid md:border-[#D0D5D8]`}>
                <Image
                    src={BannerFoto}
                    alt="Imagem para anunciar"
                    className="w-[45%] lg:w-[65%] object-cover hidden md:block"
                    />
                <div className='p-8 w-[458px] min-w-[340px]'>
                    <p className='text-custom-orange font-bold md:mb-8 mb-4'>Quer Vender ou Alugar?</p>
                    <h3 className='font-bold text-[34px] text-custom-dark-grey leading-[1]'>Anuncie grátis</h3>
                    <h3 className='font-bold text-[34px] text-custom-dark-grey leading-[1] md:mb-20 mb-10'>para mais de 100 mil pessoas todos os dias</h3>

                    <button className='border border-custom-purple text-custom-purple rounded-md px-4 py-2 hover:text-white hover:bg-custom-purple font-semibold md:mb-8 mb-4'>Buscar Imóveis</button>
                    <a className='block text-custom-dark-grey font-semibold text-[#4B555F]' href="#">Saiba quanto vale seu imóvel</a>

                </div>
                <Image
                    src={BannerFoto}
                    alt="Imagem para anunciar"
                    className="w-[100%] object-cover block md:hidden"
                    />
            </section>
        </section>
    );
  }
export default Diferenciais;
  