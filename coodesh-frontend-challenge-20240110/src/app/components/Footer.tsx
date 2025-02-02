"use client";

import Image from 'next/image';
import AppleStore from '../assets/images/appleStore.png'
import PlayStore from '../assets/images/playStore.png'
import Instagram from '../assets/images/Instagram.svg'
import Facebook from '../assets/images/Facebook.svg'
import Linkedin from '../assets/images/Linkedin.svg'
import Youtube from '../assets/images/Youtube.svg'
import LogoBranco from '../assets/images/LogoBranco.png'
import { useState } from "react"

const Footer: React.FC = () => {

    const [optionImoveis, setOptionImoveis] = useState('alugar');

    return (
        <section className="footer-container">
            <div className='container pb-10'>
                <div className=''>
                    <div className='flex border-b border-solid border-[#E1E5E9] gap-4 mb-8'>
                        <div className={`relative cursor-pointer text-center w-[max-content] text-[14px] p-4 pb-2 text-custom-light-grey-text font-bold ${ optionImoveis === 'alugar' ? 'text-custom-orange border-b-[3px] border-solid border-custom-dark-orange' : 'text-custom-light-grey-text' }`}>
                            Tipos de Propriedades
                            <option className='absolute w-[100%] h-[100%] top-0 left-0' value="alugar" onClick={() => setOptionImoveis("alugar")}></option>
                        </div>
                        <div className={`relative cursor-pointer text-center w-[max-content] text-[14px] p-4 pb-2 text-custom-light-grey-text font-bold ${ optionImoveis === 'comprar' ? 'text-custom-orange border-b-[3px] border-solid border-custom-dark-orange' : 'text-custom-light-grey-text' }`}>
                        
                            Populares para Venda
                            <option className='absolute w-[100%] h-[100%] top-0 left-0' value="comprar" onClick={() => setOptionImoveis("comprar")}></option>

                        </div>
                        <div className={`relative text-center w-[max-content] text-[14px] p-4 pb-2 text-custom-light-grey-text font-bold ${ optionImoveis === 'anunciar' ? 'text-custom-orange border-b-[3px] border-solid border-custom-dark-orange' : 'text-custom-light-grey-text' }`}>
                            Populares para Locação
                            <option className='absolute w-[100%] h-[100%] top-0 left-0' value="anunciar" onClick={() => setOptionImoveis("anunciar")}></option>
                        </div>
                    </div>
                    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8'>
                        <div>
                            <h3 className='font-bold text-custom-grey mb-4'>Alugar</h3>
                            <ul>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Apartamentos</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Casas</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Terrenos</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Lojas</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold text-custom-grey mb-4'>Comprar</h3>
                            <ul>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Casas à venda</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Imóv. em Condomínios</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Comprar Terrenos</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Lançamentos</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold text-custom-grey mb-4'>Comercial</h3>
                            <ul>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Imóveis com escritório</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Prédio Comercial</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Galpão de Armazenamento</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Salão de Eventos</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-[#EDF1F4]'>
                <div className='container '>
                    <div className='grid grid-cols-1 md:grid-cols-3 xl:grid-cols-4 gap-8 py-10'>
                        <div>
                            <h3 className='font-bold text-[#063D7E] mb-4'>A Netimóveis</h3>
                            <ul>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Quem somos</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Como funciona</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Seja um parceiro</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Acessoria de Imprensa</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Soluções Corporativas</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Covid-19</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold text-[#063D7E] mb-4'>Recursos</h3>
                            <ul>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Comprar</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Alugar</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Lançamentos</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Anunciar Imóvel</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Simular Financiamento</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Imobiliárias</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Blog</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold text-[#063D7E] mb-4'>Contato</h3>
                            <ul>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Fale Conosco</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Perguntas Frequentes</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Suporte</a></li>
                            </ul>
                        </div>
                        <div>
                            <h3 className='font-bold text-[#063D7E] mb-4'>Nossos Aplicativos</h3>
                            <ul>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Loc Fácil Netimóveis</a></li>
                                <li className='mb-2 leading-[1]'><a className='mb-2 text-[14px] text-custom-grey' href="#">Prob Imob Netimóveis</a></li>
                            </ul>
                            <div className='flex gap-2'>
                                <Image
                                    src={AppleStore}
                                    alt="Imagem para anunciar"
                                    className="object-cover w-[108px] h-[32px]"
                                />
                                <Image
                                    src={PlayStore}
                                    alt="Imagem para anunciar"
                                    className="object-cover w-[124px] h-[32px]"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-custom-orange'>
                <div className='container py-3 lg:grid lg:grid-cols-3'>
                    <Image
                        src={LogoBranco}
                        alt="Logo Branco"
                        className="object-cover w-[153px] h-[38px] m-auto mb-4 lg:m-0"
                        />
                    
                    <div className='mb-4 lg:m-0'>
                        <p className='font-light text-[12px] text-white text-center whitespace-nowrap'>© Copyright 2021 Netimóveis Brasil SA. Todos os direitos reservados.</p>
                        
                        <div className='flex gap-4 justify-center'>
                            <a className='font-light text-[12px] text-white whitespace-nowrap' href="#">Política de Privacidade</a>
                            <a className='font-light text-[12px] text-white whitespace-nowrap' href="#">Termos de Uso</a>
                            <a className='font-light text-[12px] text-white whitespace-nowrap' href="#">LGPD</a>
                            <span className='font-light text-[12px] text-white whitespace-nowrap'>Versão 25/10/2021</span>
                        </div>
                        
                    </div>
                    <div className='flex gap-4 justify-center lg:justify-end items-center'>
                        <a href="#">
                            <Image
                                src={Instagram}
                                alt="Instagram"
                                className="object-cover w-[32px] h-[32px] bg-white rounded-xl"
                            />
                        </a>
                        <a href="#">
                            <Image
                                src={Facebook}
                                alt="Facebook"
                                className="object-cover w-[32px] h-[32px] bg-white rounded-xl"
                            />
                        </a>
                        <a href="#">
                            <Image
                                src={Linkedin}
                                alt="Linkedin"
                                className="object-cover w-[32px] h-[32px] bg-white rounded-xl"
                            />
                        </a>
                        <a href="#">
                            <Image
                                src={Youtube}
                                alt="Youtube"
                                className="object-cover w-[32px] h-[32px] bg-white rounded-xl"
                            />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
  }
export default Footer;
  