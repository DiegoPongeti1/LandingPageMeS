import React from "react";

type Empresa = { // tipo de empresa
  nome: string;
  tipo: string;
  img: string;
  descricao: string;
  link?: string;
};

type InfosEmpresasProps = { // tipo de props
  aberta: boolean;
  empresa?: Empresa | null;
  onFechar: () => void;
};

export function InfosEmpresas({ aberta, empresa, onFechar }: InfosEmpresasProps) {
  if (!aberta || !empresa) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
      <div className="bg-white rounded-xl shadow-2xl max-w-md w-[90%] p-6 relative">
        <button
          type="button"
          onClick={onFechar}
          className="absolute right-4 top-4 text-gray-400 hover:text-gray-700 text-xl"
          aria-label="Fechar"
        >
          ×
        </button>

        <div className="space-y-4">
          <h3 className="text-xl font-bold text-slate-800">{empresa.nome}</h3>
          <p className="text-sm text-gray-500">{empresa.tipo}</p>

          {/* Vou pegar a  Descrição da empresa que vem do components de Parceiros.tsx*/}
          <p className="text-sm text-gray-600"> 
            {empresa.descricao} 
          </p>

          {/* Vou pegar o link da empresa que vem do components de Parceiros.tsx*/}
          {empresa.link && (
            <a
              href={empresa.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-md bg-[#800000] px-4 py-2 text-sm font-semibold text-white hover:bg-[#a00000] transition-colors"
            >
              Visitar site
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

