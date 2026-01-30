
import { Computer, Map, FactoryIcon } from 'lucide-react'

export function CardsChamativos() { 
    return (
        <section className="py-16 bg-grey-100"> 
            <div className="container mx-auto px-4">
                
                <h2 className="text-3xl font-bold align text-gray-800 mb-10 text-center">
                    Por que escolher a Micro & Soft?
                </h2>

                <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
                    
                    <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-red-600 flex flex-col items-center text-center gap-4">
                        <div className="bg-red-50 p-4 rounded-full">
                           <Computer />
                        </div>
                        <h3 className="font-bold text-xl">Suporte Imediato</h3>
                        <p className="text-gray-600 text-sm">
                            Estamos sempre prontos garantir atendimento rápido quando você precisar.
                        </p>
                    </div>

                     <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-red-600 flex flex-col items-center text-center gap-4">
                        <div className="bg-red-50 p-4 rounded-full">
                           <Map />
                        </div>
                        <h3 className="font-bold text-xl">Todo o Brasil</h3>
                        <p className="text-gray-600 text-sm">
                            Disponveis para todo o Brasil.
                        </p>
                    </div>

                     <div className="bg-white p-8 rounded-2xl shadow-md border-t-4 border-red-600 flex flex-col items-center text-center gap-4">
                        <div className="bg-red-50 p-4 rounded-full">
                           <FactoryIcon />
                        </div>
                        <h3 className="font-bold text-xl">Serviços</h3>
                        <p className="text-gray-600 text-sm">
                            Trabalhos com empresas de calçados, fabricas e muito mais.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    )
}