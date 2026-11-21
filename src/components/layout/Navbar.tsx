import { useState } from 'react'
import { Menu, X } from 'lucide-react'

export default function Navbar(){
    const [menuOpen, setMenuOpen] = useState(false); 

    return(
        <nav className='sticky top-0 left-0 w-full z-50 border-b border-black/10 px-4 md:px-8 py-4 font-istok'>
            <div aria-hidden='true' className={`absolute inset-x-0  top-0 -z-10 backdrop-blur-md bg-layout/80 transition-[height] duration-300 ease-in-out md:h-full ${menuOpen ? 'h-[calc(100%+6rem)]' : 'h-full'}`}/>
            <div className='max-w-5xl mx-auto'>
                <div className='flex justify-between items-center'>
                    <a href="#hero" className='text-3xl text-white font-bold'>Echoline<span className='text-blue-500'>.kohi</span></a>

                    <div className='flex items-center text-white gap-8'>
                        <ul className='hidden md:flex font-bold gap-6 text-xl'>
                            <li><a href="#about">About</a></li>
                            <li><a href="#faq">FAQs</a></li>
                        </ul>
                    </div>

                    <button onClick={() => setMenuOpen(!menuOpen)} aria-label='Toggle menu' aria-expanded={menuOpen} className='md:hidden flex items-center justify-center w-10 h-10'>
                        {menuOpen ? <X size={20} className='text-white'/> : <Menu size={20} className='text-white'/>}
                    </button> 
                </div>
            </div>

            <div className={`absolute top-full left-0 w-full px-4 md:hidden overflow-hidden text-white ease-in-out ${menuOpen ? 'h-24 opacity-100' : 'h-0 opacity-0 pointer-events-none'}`}>
                <ul className='flex flex-col gap-4 font-bold text-lg pb-2'>
                    <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
                    <li><a href="#faq" onClick={() => setMenuOpen(false)}>FAQs</a></li>
                </ul>
            </div>
        </nav>
    );
}