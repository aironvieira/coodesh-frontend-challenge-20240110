'use client'

import Image from 'next/image';
import Pin from '../assets/images/pin.svg';
import Search from '../assets/images/search.svg';
import Bed from '../assets/images/bed.svg';
import Dados from '../assets/place.json';
import { useState, useRef } from 'react';

function PesquisaLocal({ filtro, setFiltro, setJanela }: { filtro: string, setFiltro: (filtro: string) => void, setJanela: (janelaAberta: false) => void; }){
  const dadosFiltrados = Dados.filter((local) =>
    local.name.toLowerCase().includes(filtro.toLowerCase())
  );

  const janelaLocalRef = useRef<HTMLDivElement | null>(null); 

  const handleClickOutsideJanelaLocal = (e: MouseEvent) => {
    if (janelaLocalRef.current && !janelaLocalRef.current.contains(e.target as Node)) {
      setJanela(false);
    }
  };

  useState(() => {
    document.addEventListener('mousedown', handleClickOutsideJanelaLocal);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideJanelaLocal);
    };
  });

  return (
    <div className='rounded-md bg-white pt-4 overflow-hidden' ref={janelaLocalRef}>
      <h4 className='text-[#A1A7AA] text-[14px] text-center'>Busque por cidade, região, bairro ou código</h4>
      <ul>
        {
          dadosFiltrados.length !== 0 ? (
            dadosFiltrados.map((dado) => (
              <div key={dado.placeId} className='flex gap-2 p-4 hover:bg-custom-light-grey' onClick={e => { setFiltro(dado.name + ", " + dado.state.shortname); setJanela(false) }}>
                <Image src={Pin} alt="Pin" width={16} height={20} />
                <li>{dado.name}, {dado.state.shortname}</li>
              </div>
            ))
          ) : (
            <li className='text-center p-4'>Nenhuma localização encontrada</li>
          )
        }
      </ul>
    </div>
  );
}

function PesquisaRequisitos(
  { nroQuartos, tipoPropriedade, setJanelaRequisitos, setNroQuartos, setTipoPropriedade}
  : 
  {nroQuartos: string, tipoPropriedade : string, setJanelaRequisitos: (janelaRequisitos: false) => void, setNroQuartos: (nroQuartos: string) => void , setTipoPropriedade: (tipoPropriedade: string) => void; }){

  const janelaRef = useRef<HTMLDivElement | null>(null);

  const handleClickOutsideJanelaRequisitos = (e: MouseEvent) => {
    if (janelaRef.current && !janelaRef.current.contains(e.target as Node)) {
      setJanelaRequisitos(false);
    }
  };

  useState(() => {
    document.addEventListener('mousedown', handleClickOutsideJanelaRequisitos);
    return () => {
      document.removeEventListener('mousedown', handleClickOutsideJanelaRequisitos);
    };
  });

  return (
    <section className='absolute top-20 w-[80%] left-0 rounded-md bg-white p-4 overflow-hidden' ref={janelaRef}>
      <h4 className='text-[14px] text-custom-dark-grey mb-2'>Número de Quartos</h4>
      <div className='flex justify-around'>
        <option className={`w-[70px] h-[42px] cursor-pointer border rounded-full flex items-center justify-center font-bold ${ nroQuartos === "Todos" ? 'border-custom-purple text-custom-purple' : 'border-custom-grey text-custom-grey' }`} onClick={() => setNroQuartos("Todos")}>Todos</option>
        <option className={`w-[42px] h-[42px] cursor-pointer border rounded-full flex items-center justify-center font-bold ${ nroQuartos === "1+" ? 'border-custom-purple text-custom-purple' : 'border-custom-dark-grey text-custom-grey' }`} onClick={() => setNroQuartos("1+")}>1+</option>
        <option className={`w-[42px] h-[42px] cursor-pointer border rounded-full flex items-center justify-center font-bold ${ nroQuartos === "2+" ? 'border-custom-purple text-custom-purple' : 'border-custom-grey text-custom-grey' }`} onClick={() => setNroQuartos("2+")}>2+</option>
        <option className={`w-[42px] h-[42px] cursor-pointer border rounded-full flex items-center justify-center font-bold ${ nroQuartos === "3+" ? 'border-custom-purple text-custom-purple' : 'border-custom-grey text-custom-grey' }`} onClick={() => setNroQuartos("3+")}>3+</option>
        <option className={`w-[42px] h-[42px] cursor-pointer border rounded-full flex items-center justify-center font-bold ${ nroQuartos === "4+" ? 'border-custom-purple text-custom-purple' : 'border-custom-grey text-custom-grey' }`} onClick={() => setNroQuartos("4+")}>4+</option>
      </div>

      <hr className='mt-4 mb-4'/>
      <h4 className='text-[14px] text-custom-dark-grey mb-2'>Tipo de Propriedade</h4>
      <div className="">
        <select className='text-custom-grey border p-2 border-[#D0D5D8] rounded-md w-[100%]' name="" id="valueTipoPropriedade"  value={tipoPropriedade} onChange={(e) => setTipoPropriedade(e.target.value)} >
          <option value="" hidden>Tipos de propriedade</option>
          <option value="Todos">Todos os tipos</option>
          <option value="Casa">Casa</option>
          <option value="Apartamento">Apartamento</option>
        </select>
      </div>
    </section>
  );
}

const Hero: React.FC = () => {
  const [filtro, setFiltro] = useState('');
  const [nroQuartos, setNroQuartos] = useState('');
  const [tipoPropriedade, setTipoPropriedade] = useState('');
  const [janelaAberta, setJanela] = useState(false);
  const [janelaRequisitos, setJanelaRequisitos] = useState(false);

  const valorInputRequisitos = () => {
    const partes: string[] = [];
    if (nroQuartos) partes.push(nroQuartos);
    if (tipoPropriedade) partes.push(tipoPropriedade);
    return partes.length ? partes.join(', ') : "";
  }

  return (
    <section className="hero-background bg-heroImage h-[40rem] bg-right bg-no-repeat bg-cover">
      <h2 className='text-center text-[34px] text-white font-bold pt-[7rem]'>Vende. Aluga. Conecta.</h2>
      <div className='w-[770px] h-[78px] bg-white rounded-full m-auto flex justify-between'>
        <div className='relative bg-white rounded-full px-8 py-4 w-[49%] hover:bg-custom-light-grey transition duration-500 focus-within:shadow-[4px_0px_15px_rgba(0,0,0,0.2)]'>
          <div className='flex gap-2 '>
            <Image src={Pin} alt="Pin" width={16} height={20} />
            <span className='text-[14px] font-bold text-custom-dark-grey'>Localização</span>
          </div>
          <input value={filtro} onChange={(e) => { setFiltro(e.target.value); setJanela(true) }} type="text" placeholder="Qual é a Localização?" className='border-0 outline-none  bg-transparent w-[100%] truncate' />

          {
            filtro && janelaAberta && (
              <div className='absolute top-20 w-[80%] left-0'>
                <PesquisaLocal filtro={filtro} setFiltro={setFiltro} setJanela={setJanela} />
              </div>
            )
          }
        </div>

        <div className='relative bg-white rounded-full px-8 pr-4 py-4 w-[49%] flex justify-between hover:bg-custom-light-grey transition duration-500 focus-within:shadow-[-4px_0px_15px_rgba(0,0,0,0.2)]'>
          <div className='w-[100%]'>
            <div className='flex gap-2'>
              <Image src={Bed} alt="Pin" width={24} height={24} />
              <span className='text-[14px] font-bold text-custom-dark-grey'>N° de Quartos?</span>
            </div>
            <input type="text" placeholder="N° de Quartos?" className='border-0 outline-none bg-transparent w-[95%]' onClick={() => setJanelaRequisitos(true)} value={valorInputRequisitos()} readOnly />

            {
              janelaRequisitos && (
                <PesquisaRequisitos nroQuartos={nroQuartos} tipoPropriedade={tipoPropriedade} setNroQuartos={setNroQuartos} setTipoPropriedade={setTipoPropriedade} setJanelaRequisitos={setJanelaRequisitos}/>
              )
            }
          </div>
          <Image src={Search} alt="Pin" width={46} className='bg-custom-orange hover:bg-custom-dark-orange rounded-full p-2 transition duration-200 cursor-pointer' />
        </div>
      </div>

    </section>
  );
}

export default Hero;
