
import Image from 'next/image'
export function Header() {
    return (
        <header className="bg-[#fdfdfdb7] w-full border-b border-orange-100/50">
            <div className='flex flex-col justify-center items-center py-10'>
                <h1>
                    <Image 
                    src="/Logo_Microesoft400.jpg"
                    alt="Logo"
                    width="300"
                    height="300"
                    className='object-contain'
                    />
                </h1>

                <p className='text-center font-extrabold text-3xl text-gray-600 tracking-tight'>
                    
                </p>

            </div>
        </header>
    )
}