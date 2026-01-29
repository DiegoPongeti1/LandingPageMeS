
import Image from 'next/image'
//import {WhatsappLogo} from 'lucide-react'
export function Body() {
    return (
        <main className='bg-white flex flex-col items-center'>

            <section>
                <div>
                    <h2>Informações da Empresa</h2>
                    <p>Empresa especializada em desenvolvimento de softwares para o comércio.</p>
                </div>

                {/* <div>
                            <a href="#"
                                className="bg-green-500 px-5 py-2 rounded-md font-semibold flex items-center 
                            justify-center w-fit gap-2"
                            >
                                <WhatsappLogo className='w-5 h-5' />
                                Contato via WhatsApp
                            </a>

                        </div> */}
            </section>
            
        </main>
    

    )
}