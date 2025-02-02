"use client";

import Image from 'next/image';
import BannerFoto from '../assets/images/OportunidadeImage.png'
import Estados from "../assets/states.json";

const Estado: React.FC = () => {
    return (
        <section className={`container relative flex oportunidadeBg bg-cover pl-16 pr-16 items-center rounded-xl justify-between overflow-hidden h-[160px] mt-20`}>
            <div className='absolute bg-gradient-to-l from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)] h-[100%] w-[100%] z-0 top-0 left-0'></div>
            <h2 className='relative text-[34px] text-white w-[400px] font-bold leading-[1.15] z-1'>
                Encontre a oportunidade Perfeita em Portugal
            </h2>
            <button className="relative bg-white text-custom-orange font-semibold z-1 px-3 py-1 transition duration-200 hover:text-white hover:bg-custom-orange rounded-md">Ver imóveis em Portugal</button>
        </section>
    );
}
export default Estado;
  