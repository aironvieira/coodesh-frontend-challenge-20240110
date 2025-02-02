"use client";

import Image from 'next/image';
import MotivacionalFoto from '../assets/images/Motivacional.jpeg'

const Estado: React.FC = () => {
    return (
        <section className={`flex h-[513px] mt-20`}>
            <div className=' relative motivacionalBg bg-center w-[50%] h-[100%] bg-cover bg-no-repeat'>
                <h2 className='ml-auto mt-12 mr-20 text-[45px] text-white w-[260px] font-semibold leading-[1.15]'>
                    Todo mundo merece seu cantinho do aconchego.
                </h2>
            </div>  
            <div className='w-[50%] h-[100%] bg-gradient-to-bl from-[#EDF1F4] to-[#FFFFFF] p-20 pb-0 pr-30'>
                <h3 className='font-bold text-[24px] text-[#A1A7AA]  mb-8 pl-20'>Aqui vai uma frase de efeito</h3>

                <div className='w-[400px] mb-10 pl-20 box-content'>
                    <h4 className='font-bold text-custom-medium-grey-text mb-3'>Motivo para negociar com a Netimóveis</h4>
                    <p className='text-custom-medium-grey-text text-[14px]'>Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                </div>
                <div className='w-[400px] mb-10 pl-20 box-content'>
                    <h4 className='font-bold text-custom-medium-grey-text mb-3'>Motivo para negociar com a Netimóveis</h4>
                    <p className='text-custom-medium-grey-text text-[14px]'>Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                </div>
                <div className='w-[400px] pl-20 box-content'>
                    <h4 className='font-bold text-custom-medium-grey-text mb-3'>Motivo para negociar com a Netimóveis</h4>
                    <p className='text-custom-medium-grey-text text-[14px]'>Aqui é desenvolvido esse motivo para negociar com a Netimóveis. ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit</p>
                </div>
            </div>
        </section>
    );
}
export default Estado;
  