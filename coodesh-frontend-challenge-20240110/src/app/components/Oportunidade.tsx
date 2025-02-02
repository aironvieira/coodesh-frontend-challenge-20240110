"use client";

import Image from 'next/image';
import BannerFoto from '../assets/images/OportunidadeImage.png'
import Estados from "../assets/states.json";

const Estado: React.FC = () => {
    return (
        <section className='container'>
            <section className={`relative flex flex-col md:flex-row oportunidadeBg bg-cover p-4 py-6 md:pl-16 md:pr-16 md:items-center rounded-xl md:justify-between overflow-hidden md:h-[160px] mt-20`}>
                <div className='absolute bg-gradient-to-l from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)] h-[100%] w-[100%] z-0 top-0 left-0'></div>
                <h2 className='relative text-[24px] md:text-[34px] text-white w-[264px] md:w-[400px] font-bold leading-[1.15] z-1 mb-6 md:mb-0'>
                    Encontre a oportunidade Perfeita em Portugal
                </h2>
                <button className="relative bg-white text-custom-orange font-semibold z-1 px-5 py-2 transition duration-200 hover:text-white hover:bg-custom-orange rounded-md w-[max-content]">Ver imóveis em Portugal</button>
            </section>
        </section>
    );
}
export default Estado;
  