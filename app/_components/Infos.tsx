'use client'
import { WhatsappLogo, Phone, EnvelopeSimple, MapPin } from "@phosphor-icons/react"

 
export function Infos() {
    return (
        <section className="py-20 bg-gray-100">
            <div className="container mx-auto px-4">
               
                <div className="max-w-2xl mx-auto bg-white border border-gray-200 shadow-xl rounded-2xl p-8 md:p-12">
                    
                    <div className='flex flex-col items-center justify-center text-center'>
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Informações de Contato</h2>
                        
                        
                        <div className="space-y-4 mb-8 text-gray-600 w-full">
                            <div className="flex items-center justify-center gap-3">
                                <Phone size={20} className="text-[#800000]" />
                                <p>(16) 3724-0011</p>
                            </div>
                            
                            <div className="flex items-center justify-center gap-3">
                                <EnvelopeSimple size={20} className="text-[#800000]" />
                                <a href="mailto:falecom@microesoft.com.br">falecom@microesoft.com.br</a>
                            </div>
                            
                            <div className="flex items-center justify-center gap-5">
                                <MapPin size={20} className="text-[#800000]" />
                                <a href="https://maps.app.goo.gl/NnjrrG53YkLbvZXX8 "className="max-w-xs">R. Augusto Marques, 1711 - Vila Flores, Franca - SP</a>
                            </div>
                        </div>

                        
                        <a 
                            href="https://wa.me/5516992342975?text=Olá! Gostaria de mais informações sobre os serviços da Micro&Soft."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-bold flex items-center justify-center w-full sm:w-fit gap-2 transition-all shadow-md hover:shadow-lg"
                        >
                            <WhatsappLogo size={24} weight="fill" />
                            Contato via WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}