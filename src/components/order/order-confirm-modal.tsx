import { X } from 'lucide-react'
import { useEffect } from 'react'
import type { ServiceItem } from '../../types/service'

type OrderConfirmModalProps = {
    cart: ServiceItem[];
    total: number;
    onClose: () => void;
};

export default function ConfirmModal({
    cart,
    onClose,
}: OrderConfirmModalProps){
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

    document.body.style.overflow = 'hidden';

    return () => {
        document.body.style.overflow = originalOverflow;
    };
    }, []);

    return(
        <div 
            className='fixed inset-0 z-60 flex items-center justify-center overflow-y-auto bg-black/70 p-4 sm:items-center'
            role='dialog'
            aria-modal='true'
            aria-labelledby='order-modal-title'
        >
            <div className='relative my-auto w-full max-w-md max-h-[calc(100dvh-2rem)] overflow-y-auto no-scrollbar rounded-xl bg-layout p-5 text-white shadow-2xl'>
                <button
                    type='button'
                    onClick={onClose}
                    aria-label='Close order form'
                    className='absolute right-4 top-3 cursor-pointer text-white/60 transition'
                >
                    <X size={20} className='text-white'/>
                </button>

                <h2 id='order-modal-title' className='text-2xl font-bold font-istok'>Confirm Pilot Service</h2>
                <p className='text-xs text-white/60'>Review your order and add your details.</p>

                <section aria-labelledby='services-heading' className='mt-4'>
                    <h2 id='services-heading' className='mb-4 border-l-3 border-blue-500 pl-2 text-md font-semibold'>
                        Your Services
                    </h2>

                    <ul>
                        {cart.map((service) => (
                            <li
                                key={service.id}
                                className='flex items-center justify-between gap-3 px-3 py-2'
                            >
                                <div>
                                    <p className='text-sm text-white'>{service.title}</p>
                                    <p className='text-sm text-white/40'>Quantity: 1</p>
                                </div>

                                <span className='shrink-0 text-sm font-bold'>
                                    &#8369;{service.price.toLocaleString()}
                                </span>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className='mt-4 font-istok'>
                    <h2 className='mb-4 border-l-3 border-blue-500 pl-2 text-md font-semibold'>Your Details</h2>

                    <label htmlFor="uid" className='mb-1 block text-md text-white'>In-game UID*</label>
                    <input id='uid' type="text" required placeholder='Enter your in-game UID' className='w-full mb-4 rounded-md border border-white bg-primary px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-blue-500'/>
                    
                    <div className='grid grid-cols-2 gap-3 sm-grid-cols-2 mb-4'>
                        <div>
                            <label htmlFor="ign" className='mb-1 block text-md text-white'>In-game name*</label>
                            <input id='ign' type="text" required placeholder='Enter your in-game name' className='w-full rounded-md border border-white bg-primary px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-blue-500'/>
                        </div>

                        <div>
                            <label htmlFor="server" className='mb-1 block text-md text-white'>Server*</label>
                            <select id="server" defaultValue='' required className='w-full cursor-pointer rounded-md border border-white/20 bg-primary px-3 py-2 text-sm text-white outline-none transition hover:border-blue-400 focus:border-blue-500'>
                                <option value="" disabled>Select your server</option>
                                <option value="america" className='hover:bg-blue-500'>America</option>
                                <option value="asia">Asia</option>
                                <option value="eu">EU</option>
                                <option value="hmt">HMT</option>
                                <option value="sea">SEA</option>
                            </select>
                        </div>
                    </div>

                    <label htmlFor="username" className='mb-1 block text-md text-white'>Contact/Username (FB, Discord, X, Tiktok)</label>
                    <input id='username' type="text" required placeholder='Enter your username' className='w-full mb-4 rounded-md border border-white bg-primary px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-blue-500'/>

                    <label htmlFor="commnet" className='mb-1 block text-md text-white'>Comment</label>
                    <textarea id='comment' rows={3} placeholder='Anything I should skip or prioritize?' className='w-full resize-none mb-2 rounded-md border border-white bg-primary px-3 py-2 text-sm text-white outline-none placeholder:text-white/40 focus:border-blue-500'/>

                    <div className='flex items-start gap-2'>
                        <input id='terms' type="checkbox" required className='mt-0.5 h-4 w-4 cursor-pointer accent-blue-500'/>
                        <label htmlFor="terms" className='text-xs text-white/50'>
                            I understand that the pilot will log into my account to complete the services, and I agree to the terms.
                        </label>
                    </div>
                </section>
            </div>
        </div>
    );
}