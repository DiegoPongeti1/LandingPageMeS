'use client'

import Image from 'next/image'

export function Parceiros() {

  const empresas = [ // faz um array de empresas, buscando os nomes, img, tipo e link
                     // e passando os valores para o array, e dps pegando com o map para renderizar os cards
    { nome: "Veromoc", tipo: "Calçados", img: "/logo-veromoc-023.png", link: "https://veromoc.com.br"},
    { nome: "Coberchapas", tipo: "Chapas", img: "/Coberchapas.jpg", link: "https://www.instagram.com/coberchapasoficial/"},
    { nome: "Empresa 3", tipo: "Logística", img: "/Logo_Microesoft400.jpg" },
    { nome: "Empresa 4", tipo: "Varejo", img: "/Logo_Microesoft400.jpg" },
    { nome: "Empresa 5", tipo: "Varejo", img: "/Logo_Microesoft400.jpg" },
  ];

  return (
    <section className="py-16 bg-gray-100 overflow-hidden w-full">
      <h2 className="text-2xl font-bold text-slate-800 mb-12 text-center">
        Empresas parceiras da Micro&Soft
      </h2>

     
      <div className="relative flex overflow-hidden  rounded-xl">
        
       
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          
          {[...empresas, ...empresas, ...empresas].map((emp, i) => ( // .map faz um array de empresas, buscando os nomes, img, tipo e link
            <a 
              key={i} // key é para identificar cada elemento do array
              href={emp.link || "#"} // Se não tiver link, não vai para lugar nenhum 
              target="_blank" // Abre em outra aba
              rel="noopener noreferrer" // Segurança para links externos
              className="group flex flex-col items-center justify-center mx-12 min-w-[150px] cursor-pointer"
            >
              <Image 
                src={emp.img} 
                alt={emp.nome}
                width={120} 
                height={60} 
                className="opacity-100 sm:grayscale sm:opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all mb-4"
              />
              <span className="font-bold text-gray-800 text-sm group-hover:text-[#800000]  transition-colors ">{emp.nome}</span>
              <span className="text-[10px] text-gray-400 group-hover:text-[#800000] transition-colors">{emp.tipo}</span>
            </a>
          ))}
        </div>
      </div>

      {/* CSS para o movimento */}
      <style jsx global>{`
        @keyframes infinite-scroll {
          from { transform: translateX(0); }
          to { transform: translateX(-33.33%); }
        }
        .animate-infinite-scroll {
          animation: infinite-scroll 25s linear infinite;
        }
      `}</style>
    </section>
  );
}