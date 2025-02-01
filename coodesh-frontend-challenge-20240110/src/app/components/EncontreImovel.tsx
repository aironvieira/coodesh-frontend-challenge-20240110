"use client";

import { useState } from 'react';

const OptionContent: React.FC< {optionChoose : string }> = ({optionChoose}) => {
    switch (optionChoose) {
        case 'comprar':
            return(
                <div className='compre p-12'>
                    <h3 className='text-[34px] text-custom-dark-grey font-bold mb-2'>Compre com Segurança</h3>
                    <p className='text-custom-light-grey-text text-1 mb-8'>Compre seu imóvel com segurança e agilidade. Sed ut perspiciatis unde omnis iste natus error sit.</p>
                    <button className='border border-custom-purple text-custom-purple rounded-md px-4 py-2 hover:text-white hover:bg-custom-purple font-semibold mb-6'>Ver imóveis para Comprar</button>
                    <a className='block underline text-custom-dark-grey mb-3' href="#">Simule seu Financiamento</a>
                    <a className='block underline text-custom-dark-grey' href="#">Saiba como funciona a Compra na Netimóveis</a>
                </div>
            )
        case 'anunciar':
            return(
                <div className='anuncie p-12'>
                   <h3 className='text-[34px] text-custom-dark-grey font-bold mb-2'>Anuncie seu Imóvel</h3>
                    <p className='text-custom-light-grey-text text-1 mb-8'>Anuncie gratuitamente na maior rede de imobiliárias do Brasil.</p>
                    <button className='border border-custom-purple text-custom-purple rounded-md px-4 py-2 hover:text-white hover:bg-custom-purple font-semibold mb-6'>Anunciar Imóvel</button>
                    <a className='block underline text-custom-dark-grey' href="#">Descubra Quanto Cobrar</a>
                </div>
            )
        default:
            return(
                <div className='alugue p-12'>
                    <h3 className='text-[34px] text-custom-dark-grey font-bold mb-2'>Alugue sem complicação</h3>
                    <p className='text-custom-light-grey-text text-1 mb-8'>Alugue imóveis qualificados e sem repitição. Sed ut perspiciatis unde omnis iste natus error sit.</p>
                    <button className='border border-custom-purple text-custom-purple rounded-md px-4 py-2 hover:text-white hover:bg-custom-purple font-semibold mb-6'>Ver imóveis para Alugar</button>
                    <a className='block underline text-custom-dark-grey mb-3' href="#">Veja como Alugar sem Fiador</a>
                    <a className='block underline text-custom-dark-grey' href="#">Saiba como funciona o Aluguel na Netimóveis</a>
                </div>
            )
    }
}


const EncontreImovel: React.FC = () => {

    const [optionImoveis, setOptionImoveis] = useState('alugar');

    return (
      <section className="container pt-16 pb-16 grid grid-cols-1 lg:grid-cols-2 gap-4 justify-between">
        <div className='w-[495px]'>
            <h2 className='text-custom-medium-grey-text text-[60px] leading-tight font-semibold'>Encontre um lugar que é a sua cara</h2>
            <p className='text-[20px] text-custom-light-grey-text mt-8'>A Netimóveis te oferece uma experiência ágil e segura na hora de comprar ou alugar seu imóvel. Seja de maneira digital ou física, fazemos a diferença neste momento tão importante que é decidir um lar.</p>
        </div>
        <div className='w-[513px] h-[470px] bg-white rounded-md ml-auto'>
            <div className='flex justify-center border-b border-solid border-[#E1E5E9] px-12 justify-between'>
                <div className={`relative cursor-pointer text-center w-[87px] text-[14px] p-4 pb-2 text-custom-light-grey-text font-bold ${ optionImoveis === 'alugar' ? 'text-custom-medium-grey-text border-b-[3px] border-solid border-custom-dark-orange' : 'text-custom-light-grey-text' }`}>
                    <svg className={`m-auto mb-2 ${ optionImoveis === "alugar" ? 'fill-custom-medium-grey-text' : 'fill-[#A1A7AA]' }`} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M9.18886 12.5985L10.1168 12.9712C10.2643 12.6039 10.1814 12.1843 9.90524 11.9008L9.18886 12.5985ZM12.4931 9.23675L11.7903 9.94814C12.0781 10.2325 12.509 10.3154 12.8818 10.1581L12.4931 9.23675ZM6.55534 3.37071L7.25814 2.65932C7.0928 2.49598 6.87573 2.39533 6.64423 2.37467L6.55534 3.37071ZM3.08008 3.06055L3.16897 2.06451C2.87598 2.03836 2.58634 2.14253 2.37713 2.34931C2.16791 2.55608 2.06035 2.84449 2.08306 3.13776L3.08008 3.06055ZM3.36441 6.73195L2.3674 6.80916C2.40466 7.29024 2.78013 7.67611 3.26001 7.72648L3.36441 6.73195ZM5.52788 6.95907L6.52788 6.95907C6.52788 6.4472 6.14136 6.01798 5.63229 5.96454L5.52788 6.95907ZM5.52788 8.89541H4.52788C4.52788 9.40776 4.91511 9.83723 5.42473 9.89008L5.52788 8.89541ZM7.51006 9.10098L8.50847 9.04472C8.48085 8.55457 8.10152 8.15696 7.61321 8.10632L7.51006 9.10098ZM7.61615 10.9837L6.61774 11.04C6.63131 11.2808 6.73148 11.5086 6.89977 11.6814L7.61615 10.9837ZM9.7501 14.8785C9.7501 14.2025 9.88059 13.5593 10.1168 12.9712L8.26091 12.2258C7.9311 13.0469 7.7501 13.9428 7.7501 14.8785H9.7501ZM14.8709 19.9993C12.0428 19.9993 9.7501 17.7066 9.7501 14.8785H7.7501C7.7501 18.8112 10.9382 21.9993 14.8709 21.9993V19.9993ZM19.9917 14.8785C19.9917 17.7066 17.699 19.9993 14.8709 19.9993V21.9993C18.8036 21.9993 21.9917 18.8112 21.9917 14.8785H19.9917ZM14.8709 9.75771C17.699 9.75771 19.9917 12.0504 19.9917 14.8785H21.9917C21.9917 10.9458 18.8036 7.75771 14.8709 7.75771V9.75771ZM12.8818 10.1581C13.4921 9.90057 14.1635 9.75771 14.8709 9.75771V7.75771C13.8916 7.75771 12.9561 7.95594 12.1043 8.31542L12.8818 10.1581ZM13.1959 8.52536L7.25814 2.65932L5.85254 4.0821L11.7903 9.94814L13.1959 8.52536ZM6.64423 2.37467L3.16897 2.06451L2.99118 4.05659L6.46644 4.36675L6.64423 2.37467ZM2.08306 3.13776L2.3674 6.80916L4.36143 6.65473L4.07709 2.98333L2.08306 3.13776ZM3.26001 7.72648L5.42347 7.9536L5.63229 5.96454L3.46882 5.73741L3.26001 7.72648ZM4.52788 6.95907L4.52788 8.89541H6.52788L6.52788 6.95907L4.52788 6.95907ZM5.42473 9.89008L7.4069 10.0956L7.61321 8.10632L5.63103 7.90075L5.42473 9.89008ZM6.51164 9.15725L6.61774 11.04L8.61457 10.9274L8.50847 9.04472L6.51164 9.15725ZM6.89977 11.6814L8.47248 13.2962L9.90524 11.9008L8.33253 10.286L6.89977 11.6814Z"/>
                        <rect x="14.4688" y="14.5137" width="3" height="3" rx="1.5"/>
                    </svg>
                    Alugar Imóvel
                    <option className='absolute w-[100%] h-[100%] top-0 left-0' value="alugar" onClick={() => setOptionImoveis("alugar")}></option>
                </div>
                <div className={`relative cursor-pointer text-center w-[87px] text-[14px] p-4 pb-2 text-custom-light-grey-text font-bold ${ optionImoveis === 'comprar' ? 'text-custom-medium-grey-text border-b-[3px] border-solid border-custom-dark-orange' : 'text-custom-light-grey-text' }`}>
                    <svg className={`m-auto mb-2 hover:fill-red-500 fill-[#A1A7AA] ${ optionImoveis === "comprar" ? 'fill-custom-medium-grey-text' : 'fill-[#A1A7AA]' }`} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 1C12.5523 1 13 1.44772 13 2V4H14.7917C17.1159 4 19 5.88413 19 8.20833H17C17 6.9887 16.0113 6 14.7917 6H13V10H11V6H9.5C8.11929 6 7 7.11929 7 8.5C7 9.88071 8.11929 11 9.5 11H14.5C16.9853 11 19 13.0147 19 15.5C19 17.9853 16.9853 20 14.5 20H13V22C13 22.5523 12.5523 23 12 23C11.4477 23 11 22.5523 11 22V20H9.20833C6.88414 20 5 18.1159 5 15.7917H7C7 17.0113 7.9887 18 9.20833 18H11L11 14H13V18H14.5C15.8807 18 17 16.8807 17 15.5C17 14.1193 15.8807 13 14.5 13H9.5C7.01472 13 5 10.9853 5 8.5C5 6.01472 7.01472 4 9.5 4H11V2C11 1.44772 11.4477 1 12 1Z"/>
                    </svg>
                    Comprar Imóvel
                    <option className='absolute w-[100%] h-[100%] top-0 left-0' value="comprar" onClick={() => setOptionImoveis("comprar")}></option>

                </div>
                <div className={`relative cursor-pointer text-center w-[87px] text-[14px] p-4 pb-2 text-custom-light-grey-text font-bold ${ optionImoveis === 'anunciar' ? 'text-custom-medium-grey-text border-b-[3px] border-solid border-custom-dark-orange' : 'text-custom-light-grey-text' }`}>
                    <svg className={`m-auto mb-2 hover:fill-red-500 fill-[#A1A7AA] ${ optionImoveis === "anunciar" ? 'fill-custom-medium-grey-text' : 'fill-[#A1A7AA]' } `} width="24" height="24" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.669 3.94811C12.2887 3.60584 11.7113 3.60584 11.331 3.94811L5 9.64605V19.0007H11C11.5523 19.0007 12 19.4484 12 20.0007C12 20.553 11.5523 21.0007 11 21.0007H5C3.89543 21.0007 3 20.1053 3 19.0007V11.4461L2.66897 11.744C2.25846 12.1134 1.62617 12.0802 1.25671 11.6696C0.887255 11.2591 0.920534 10.6268 1.33104 10.2574L9.99311 2.46152C11.134 1.4347 12.866 1.4347 14.0069 2.46152L22.669 10.2574C23.0795 10.6268 23.1128 11.2591 22.7433 11.6696C22.3738 12.0802 21.7416 12.1134 21.331 11.744L12.669 3.94811Z"/>
                        <path d="M12 8.60132C10.9698 8.60132 10.1347 9.43642 10.1347 10.4666C10.1347 11.4967 10.9698 12.3318 12 12.3318C13.0301 12.3318 13.8653 11.4967 13.8653 10.4666C13.8653 9.43642 13.0301 8.60132 12 8.60132Z"/>
                        <path d="M18.2428 13.4159C18.6333 13.0254 19.2665 13.0254 19.657 13.4159L21.9314 15.6903C22.5172 16.2761 22.5172 17.2259 21.9314 17.8116L19.657 20.086C19.2665 20.4765 18.6333 20.4765 18.2428 20.086C17.8523 19.6955 17.8523 19.0623 18.2428 18.6718L19.1636 17.751H14.2502C13.698 17.751 13.2502 17.3033 13.2502 16.751C13.2502 16.1987 13.698 15.751 14.2502 15.751H19.1636L18.2428 14.8302C17.8523 14.4396 17.8523 13.8065 18.2428 13.4159Z"/>
                    </svg>
                    Anunciar Imóvel
                    <option className='absolute w-[100%] h-[100%] top-0 left-0' value="anunciar" onClick={() => setOptionImoveis("anunciar")}></option>
                </div>
            </div>

            <OptionContent optionChoose={optionImoveis}/>

        </div>
      </section>
    );
  }
export default EncontreImovel;
  