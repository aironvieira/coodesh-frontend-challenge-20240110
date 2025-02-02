"use client";

import Image from 'next/image';
import Associacao from '../assets/images/Associacao.png'

const Associar: React.FC = () => {


    return (
        <section className={` h-[328px] flex rounded-xl overflow-hidden mb-20`}>
           
            <div className='lg:w-[50%] bg-[#1C2A39] py-8 px-12'>
                <div className=' lg:max-w-[490px]'>
                    <p className='text-white text-[14px] border border-solid border-custom-orange mb-4 w-[max-content] px-3 py-1 rounded-full'>Para Empresas</p>
                    <h2 className='text-white font-bold text-[34px] leading-[1] mb-6'>Faça parte da Netimóveis</h2>
                    <p className='text-white text-[20px] font-light leading-[1.15] mb-12'>É uma empresa ou rede de imobiliárias? Associe-se e alcance um próximo patamar de eficiência e tecnologia.</p>

                    <div className='flex items-center gap-10'>
                        <button className='text-custom-orange bg-white rounded-xl px-4 py-2 transition durantion-200 hover:text-white hover:bg-custom-orange font-semibold'>Mais sobre se Associar</button>
                        <a className='text-white text-custom-dark-grey font-light text-white underline text-[14px]' href="#">Conheça nossos produtos</a>
                    </div>
                </div>

            </div>
            <Image
                src={Associacao}
                alt="Imagem para anunciar"
                className="object-cover w-[50%] hidden lg:block"
            />
        </section>
    );
  }
export default Associar;
  