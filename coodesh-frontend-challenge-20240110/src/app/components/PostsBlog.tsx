"use client";

import Image from 'next/image';
import relogio from '../assets/images/relogio.svg'
import Connections from '../assets/images/connections.png'
import Financeiro from '../assets/images/financeiro.png'
import Manutenção from '../assets/images/manutenção.png'

const PostsBlog: React.FC = () => {


    return (
        <section className={`container mb-20`}>
            <div className='flex justify-between mb-6 mt-20'>
                <h2 className='font-bold text-[34px] text-custom-dark-grey'>Para compradores, vendedores e curiosos :)</h2>
                <a href="#" className='flex text-custom-medium-grey-text'>Ver mais no blog <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M12.2929 6.29289C12.6834 5.90237 13.3166 5.90237 13.7071 6.29289L18.7071 11.2929C19.0976 11.6834 19.0976 12.3166 18.7071 12.7071L13.7071 17.7071C13.3166 18.0976 12.6834 18.0976 12.2929 17.7071C11.9024 17.3166 11.9024 16.6834 12.2929 16.2929L15.5858 13H6C5.44772 13 5 12.5523 5 12C5 11.4477 5.44772 11 6 11H15.5858L12.2929 7.70711C11.9024 7.31658 11.9024 6.68342 12.2929 6.29289Z" fill="#4E5254"/>
                </svg></a>
            </div>
            <div className='posts grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 items-center gap-8'>
                <div className='post w-[384px] m-auto mt-0 '>
                    <Image
                        src={Connections}
                        alt="Evento Connections"
                        className="object-cover rounded-xl mb-4 h-[252px]"
                        />
                    <div className='text-[14px] flex gap-4 mb-3'>
                        <div className='flex gap-1'>
                            <Image
                                src={relogio}
                                alt="Evento Connections"
                                className="object-cover w-[21px] "
                                />
                            <span className='text-[#848484]'>2 min de Leitura</span>
                        </div>
                        <span className='categoria text-custom-orange'>Mundo Netimóveis</span>
                    </div>
                    <h3 className='font-bold text-[#3A3A3A] leading-[1] text-[24px]'>
                        ENCONTRO NETIMÓVEIS BRASIL – N CONNECTIONS 2021: A FORÇA DOS NEGÓCIOS EM REDE
                    </h3>
                </div>
                <div className='post w-[384px] m-auto mt-0 '>
                    <Image
                        src={Financeiro}
                        alt="Evento Connections"
                        className="object-cover rounded-xl mb-4 h-[252px]"
                        />
                    <div className='text-[14px] flex gap-4 mb-3'>
                        <div className='flex gap-1'>
                            <Image
                                src={relogio}
                                alt="Evento Connections"
                                className="object-cover w-[21px] "
                                />
                            <span className='text-[#848484]'>3 min de Leitura</span>
                        </div>
                        <span className='categoria text-custom-orange'>Finanças</span>
                    </div>
                    <h3 className='font-bold text-[#3A3A3A] leading-[1] text-[24px]'>
                        ORGANIZAÇÃO FINANCEIRA NAS IMOBILIÁRIAS
                    </h3>
                </div>
                <div className='post w-[384px] m-auto mt-0 '>
                    <Image
                        src={Manutenção}
                        alt="Evento Connections"
                        className="object-cover rounded-xl mb-4 h-[252px]"
                        />
                    <div className='text-[14px] flex gap-4 mb-3'>
                        <div className='flex gap-1'>
                            <Image
                                src={relogio}
                                alt="Evento Connections"
                                className="object-cover w-[21px] "
                                />
                            <span className='text-[#848484]'>4 min de Leitura</span>
                        </div>
                        <span className='categoria text-custom-orange'>Sucesso Profissional</span>
                    </div>
                    <h3 className='font-bold text-[#3A3A3A] leading-[1] text-[24px]'>
                        EFICIÊNCIA NA GESTÃO DE CHAMADOS DE MANUTENÇÃO
                    </h3>
                </div>
            </div>
        </section>
    );
  }
export default PostsBlog;
  