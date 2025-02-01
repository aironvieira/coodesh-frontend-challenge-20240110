'use client'

import Image from "next/image"
import ExternalLink from '../assets/images/externalLink.svg'
import CarrotOrange from '../assets/images/carrotOrange.svg'
import Anuncios from "../assets/anuncio.json";
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const NovosAnuncios: React.FC = () => {

    const anuncios = Anuncios;

    return (
        <section className="container pt-16 pb-16">
            <div>
                <h2 className="flex text-[24px] font-bold gap-2">Novos Anúncios em <span className="text-custom-orange">Belo Horizonte</span><Image src={CarrotOrange} alt="Logo da Empresa" width={16} height={16}/></h2>
                <a href="#" className="flex text-[#2362AF] text-[16px] mb-5"> Ver todos imóveis <Image src={ExternalLink} alt="Logo da Empresa" width={16} height={16}/></a>
            </div>
            <div className="pb-4">
            <Swiper

                spaceBetween={20}         
                slidesPerView={1}         
                freeMode={true}
                breakpoints={{
                    768: { slidesPerView: 2 },  
                    1100: { slidesPerView: 3 },  
                    1300: { slidesPerView: 4 },
                }}
                modules={[FreeMode, Pagination, Navigation]}
                pagination={{
                  clickable: true,
                  type: 'bullets'
                }}
                navigation={{
                  nextEl: '.swiper-button-next',  // Botão para avançar
                  prevEl: '.swiper-button-prev',  // Botão para voltar
                }}
                className="p-4"
            >
                {
                    anuncios.map(( anuncio, index ) => (
                        <SwiperSlide  key={index} className="mb-12 max-w-[300px]">
                            <div className="border rounded-lg shadow-lg overflow-hidden">
                            <Image
                                src={anuncio.imagem}
                                alt={anuncio.tipo}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-xl font-bold">{anuncio.tipo}, {anuncio.area}</h3>
                                <p className="text-gray-600">{anuncio.endereco}</p>
                                <div className="flex gap-2 my-2">
                                    <span>{anuncio.quartos} Quartos</span>
                                    <span>{anuncio.banheiros} Banheiros</span>
                                    <span>{anuncio.vagas} Vagas</span>
                                    </div>
                                    <div className="flex gap-2 my-2">
                                        {anuncio.comodidades.map((comodidade : any, index : any) => (
                                            <span key={index} className="bg-gray-200 px-2 py-1 rounded">
                                            {comodidade}
                                            </span>
                                        ))}
                                    </div>
                                    <p className="text-2xl font-bold text-custom-orange">{anuncio.preco}</p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))
                }

            </Swiper>
            </div>
        </section>
    );
}

export default NovosAnuncios;