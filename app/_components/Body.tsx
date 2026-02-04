'use client'

import useEmblaCarousel from "embla-carousel-react"
import { ChevronLeft, ChevronRight} from 'lucide-react'

const services = [
    {
        title: "Autonomia para a sua empresa",
        description: "Contruimos aplicativos que vão automatizar e acelarar as suas vendas.",
    },
    {
        title: "Mais de 20 anos no mercado",
        description: "A mais de 20 anos trazendo suporte",
    },
    {
        title: "",
        description: "",
    },
    {
        title: "",
        description: "",
    },
]



export function Body() {


        const [emblaRef, emblaApi] = useEmblaCarousel({
        loop: false,
        align: 'start',
        slidesToScroll: 1,
        breakpoints: {
            "(min-whith: 768px)": { slidesToScroll: 3 }

        }
    })

    function scollPrev() {
        emblaApi?.scrollPrev()
    }

    function scollNext() {
        emblaApi?.scrollNext()
    }
    
 return (
        <section className="bg-gray-100 py-16">
            <div className="container mx-auto px-4">

                <h2 className="text-4xl font-bold text-slate-800 mb-12 text-center">Serviços</h2>

                <div className="relative">

                    <div className="overflow-hidden" ref={emblaRef}>

                        <div className="flex">
                            {services.map((item, index) => (
                                <div key={index} className="flex-[0_0_100%] min-w-0 md:flex-[0_0_calc(100%/3)] px-3">
                                    <article className="bg-[#1e293b] text-white p-6 rounded-2xl space-y-4 h-full flex 
                                    flex-col ">
                                        <div className="flex-1 flex items-start justify-between">

                                            <div className="flex gap-3">

                                                
                                                <div>
                                                    <h3 className="font-bold text-xl mb-1 m-y">{item.title}</h3>
                                                    <p className="text-gray-400 text-sm select-none">{item.description}</p>
                                                </div>
                                            </div>

                                        </div>

                                        <div className="border-t border-gray-700 pt-4 flex items-center justify-between">

                                            <div className="flex items-center gap-2 text-sm">
                                                
                                                
                                            </div>
{/* 
                                            <a href='#'
                                                className="flex items-center gap-2 justify-center hover:bg-green-500 px-4 py-1 rounded-md duration-300"
                                            >

                                                <WhatsappLogo className="w-5 h-5" />
                                                Entrar em contato
                                            </a> */}

                                        </div>


                                    </article>
                                </div>
                            ))}
                        </div>

                    </div>

                         <button className=" bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute left-3 -translate-y-1/2
                                    -translate-x-1/2 top-1/2 z-10"
                                        onClick={scollPrev}
                                    >
                                        <ChevronLeft className="w-5 h-5 text-gray-600" />
                            </button>

                                    <button className=" bg-white  flex items-center justify-center rounded-full shadow-lg w-10 h-10 absolute right-3 -translate-y-1/2
                                    translate-x-1/2 top-1/2 z-10"
                                        onClick={scollNext}
                                    >
                                        <ChevronRight

                                            className=" w-6 h-6 text-gray-600 "
                                        />

                           </button>

               </div>
            </div>
        </section >
    )
    


}