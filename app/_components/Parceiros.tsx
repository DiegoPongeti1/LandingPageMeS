'use client'
import Image from 'next/image'
export function Parceiros() {
  const empresas = [
    { nome: "Empresa 1", tipo: "Metais", img: "/Logo_Microesoft400.jpg" },
    { nome: "Empresa 2", tipo: "Calçados", img: "/Logo_Microesoft400.jpg" },
    { nome: "Empresa 3", tipo: "Logística", img: "/Logo_Microesoft400.jpg" },
    { nome: "Empresa 4", tipo: "Varejo", img: "/Logo_Microesoft400.jpg" },
    { nome: "Empresa 5", tipo: "Varejo", img: "/Logo_Microesoft400.jpg" },
  ];

  return (
    <section className="py-16 bg-white overflow-hidden w-full">
      <h2 className="text-center text-gray-400 uppercase tracking-widest text-xs mb-10">
        Empresas que confiam na Micro&Soft
      </h2>

      {/* Janela de visualização */}
      <div className="relative flex overflow-hidden">
        
        {/* A "Fila" que se move */}
        <div className="flex animate-infinite-scroll whitespace-nowrap">
          {/* Duplicamos a lista para criar o efeito infinito sem saltos */}
          {[...empresas, ...empresas, ...empresas].map((emp, i) => (
            <div key={i} className="group flex flex-col items-center justify-center mx-12 min-w-[150px] cursor-pointer">
              <Image 
                src={emp.img} 
                alt={emp.nome} 
                width={120} 
                height={60} 
                className="grayscale opacity-60 group-hover:opacity-100 group-hover:grayscale-0 transition-all mb-4"
              />
              <span className="font-bold text-gray-800 text-sm group-hover:text-[#800000] transition-colors ">{emp.nome}</span>
              <span className="text-[10px] text-gray-400 group-hover:text-[#800000] transition-colors">{emp.tipo}</span>
            </div>
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