'use client'

import Image from 'next/image'
import { useState } from 'react'
import { InfosEmpresas } from './InfosEmpresas'

type Empresa = {
  nome: string;
  tipo: string;
  img: string;
  descricao: string;
  link?: string;
};

export function Parceiros() {

  const [empresaSelecionada, setEmpresaSelecionada] = useState<Empresa | null>(null);
  const [modalAberto, setModalAberto] = useState(false);

  const empresas: Empresa[] = [ // faz um array de empresas, buscando os nomes, img, tipo e link
    // e passando os valores para o array, e dps pegando com o map para renderizar os cards
    {
      nome: "Veromoc",
      tipo: "Calçados",
      img: "/logo-veromoc-023.png",
      link: "https://veromoc.com.br",
      descricao: "A Veromoc é referência em calçados de segurança e EPI, unindo conforto, durabilidade e proteção para diversas áreas da indústria."
    },
    {
      nome: "Coberchapas",
      tipo: "Chapas",
      img: "/Coberchapas.jpg",
      link: "https://www.instagram.com/coberchapasoficial/",
      descricao: "A Coberchapas atua no fornecimento de chapas e coberturas metálicas, oferecendo soluções sob medida para estruturas industriais e comerciais."
    },
    {
      nome: "Classe Couro",
      tipo: "Couros",
      img: "/Logo_Microesoft400.jpg",
      link: "https://classecouro.com.br/?srsltid=AfmBOoq_pVEokkk5pqQzFsTnxSgGMPxAjPVY3qU_H4E8Q3ZZ3PVmpanN", 
      descricao: "Parceira focada em Couros e Peles."
    },
    {
      nome: "Empresa 4",
      tipo: "Varejo",
      img: "/Logo_Microesoft400.jpg",
      descricao: "Rede de varejo que conecta fornecedores e clientes finais, com foco em atendimento personalizado e experiência de compra."
    },
    {
      nome: "Empresa 5",
      tipo: "Varejo",
      img: "/Logo_Microesoft400.jpg",
      descricao: "Empresa voltada ao varejo especializado, levando inovação e variedade de produtos para o consumidor."
    },
  ];

  return (
    <section className="py-16 bg-gray-100 overflow-hidden w-full">
      <h2 className="text-2xl font-bold text-slate-800 mb-12 text-center">
        Empresas parceiras da Micro&Soft
      </h2>


      <div className="relative flex overflow-hidden  rounded-xl ">


        <div className={`flex whitespace-nowrap animate-infinite-scroll ${modalAberto ? 'pause-scroll' : ''}`}>

          {[...empresas, ...empresas, ...empresas].map((emp, i) => ( // .map faz um array de empresas, buscando os nomes, img, tipo e link
            <button
              key={i} // key é para identificar cada elemento do array
              type="button"
              onClick={() => {
                setEmpresaSelecionada(emp);
                setModalAberto(true);
              }}
              className="group flex flex-col items-center justify-center mx-12 min-w-[150px] cursor-pointer bg-transparent border-0 p-0"
            >
              <Image
                src={emp.img} // pega a imagem
                alt={emp.nome} // Pega o Nome
                width={120} // acerta a largura
                height={60} // acerta o tamanho
                className="opacity-100 sm:grayscale sm:opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all mb-4"
              />
              <span className="font-bold text-gray-800 text-sm group-hover:text-[#800000]  transition-colors ">{emp.nome}</span>
              <span className="text-[10px] text-gray-400 group-hover:text-[#800000] transition-colors">{emp.tipo}</span>
            </button>
          ))}
        </div>
      </div>

      <InfosEmpresas
        aberta={modalAberto}
        empresa={empresaSelecionada}
        onFechar={() => setModalAberto(false)}
      />

      {/* CSS para o movimento */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite ;
        }
        .pause-scroll {
          animation-play-state: paused;
        }

      `}</style>
    </section>
  );
}