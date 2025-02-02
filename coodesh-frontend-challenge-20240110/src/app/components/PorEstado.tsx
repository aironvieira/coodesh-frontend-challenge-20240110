"use client";

import Estados from "../assets/states.json";

const CardEstado: React.FC<{estado:string, cidade:string, imagem:string}>  = ({estado, cidade, imagem}) => {

    return(

        <div className='w-[294px] m-auto'>
            <div className='relative h-[192px] bg-cover bg-no-repeat rounded-xl overflow-hidden ' style={{ backgroundImage: `url(${imagem})` }}>
                <div className='absolute bg-gradient-to-b from-[rgba(0,0,0,0)] to-[rgba(0,0,0,0.8)] h-[100%] w-[100%] z-0'></div>
                <p className='absolute text-white z-1 bottom-4 left-4 font-bold text-[24px]'>
                    {estado}
                </p>
            </div>
            <ul className='list-none pl-6 mt-5'>
                <li className='relative mb-1 before:absolute before:left-[-1.5em] before:top-[0.5em] before:w-2 before:h-2 before:bg-orange-500 before:rounded-full text-[14px] text-custom-light-grey-text'>Casas à venda em {cidade}</li>
                <li className='relative mb-1 before:absolute before:left-[-1.5em] before:top-[0.5em] before:w-2 before:h-2 before:bg-orange-500 before:rounded-full text-[14px] text-custom-light-grey-text'>Apto. à venda em {cidade}</li>
                <li className='relative mb-1 before:absolute before:left-[-1.5em] before:top-[0.5em] before:w-2 before:h-2 before:bg-orange-500 before:rounded-full text-[14px] text-custom-light-grey-text'>Casas para Locação em {cidade}</li>
                <li className='relative mb-1 before:absolute before:left-[-1.5em] before:top-[0.5em] before:w-2 before:h-2 before:bg-orange-500 before:rounded-full text-[14px] text-custom-light-grey-text'>Apto. para locação em {cidade}</li>
            </ul>
        </div>

    );
};


const Estado: React.FC = () => {
    
    const estados = Estados;


    return (
        <section className={`container mt-20`}>
            <h2 className="font-bold md:text-[34px] text-custom-dark-grey md:mb-8 mb-4 text-center md:text-left">Prontos para te Receber em mais de 10 estados</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
            {

                estados.map((estado) => (

                    <CardEstado key={estado.placeId} estado={estado.state.name} cidade={estado.name} imagem={estado.imagem}/>
                    
                ))
            }
            </div>

        </section>
    );
  }
export default Estado;
  