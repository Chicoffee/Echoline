import { X, Trash2 } from 'lucide-react'
import { useEffect, useState } from 'react'
import type { ServiceItem } from '../../types/service'

type OrderConfirmModalProps = {
    cart: ServiceItem[];
    onClose: () => void;
    onRemove: (id: ServiceItem['id']) => void;
    onConfirm?: (items: { service: ServiceItem; quantity: number} []) => void;
};

export default function ConfirmModal({
    cart,
    onClose,
    onRemove,
    onConfirm,
}: OrderConfirmModalProps){
    useEffect(() => {
        const originalOverflow = document.body.style.overflow;

        document.body.style.overflow = 'hidden';

        return () => {
            document.body.style.overflow = originalOverflow;
        };
    }, []);

    const [quantities, setQuantities] = useState<Record<ServiceItem['id'], string>>({});

    const getInputValue = (id: ServiceItem['id']) => quantities[id] ?? '1';

    const getQty = (id: ServiceItem['id']) => {
        const n = Number(quantities[id] ?? 1);
        return Number.isFinite(n) && n >= 1 ? Math.min(99, Math.floor(n)) : 1;
    }

    const handleQtyChange = (id: ServiceItem['id'], value: string) => {
        if (value === '' || /^\d{1,2}$/.test(value)) {
            setQuantities((prev) => ({ ...prev, [id]: value }));
        }
    };

    const handleQtyBlur = (id: ServiceItem['id']) => {
        setQuantities((prev) => ({...prev, [id]: String(getQty(id)) }));
    };

    const total = cart.reduce((sum, s) => sum + s.price *getQty(s.id), 0);

    const handleConfirm = () => {
        onConfirm?.(cart.map((service) => ({service, quantity: getQty(service.id) })));
    };

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
                                className='flex items-center gap-1 px-3 py-2'
                            >
  
                                <p className='min-w-0 flex-1 truncate text-sm text-white'>{service.title}</p>
                                <label htmlFor={`qty-${service.id}`} className='text-sm text-white/40'></label>
                                <input 
                                    type="text"
                                    inputMode='numeric'
                                    id={`qty-${service.id}`}
                                    value={getInputValue(service.id)}
                                    onChange={(e) => handleQtyChange(service.id, e.target.value)}
                                    onBlur={() => handleQtyBlur(service.id)}
                                    className='w-16 shrink-0 rounded-md border border-white/20 bg-primary px-2 py-1 text-sm outline-none focues:bg-blue-500 text-center'
                                />

                                <span className='w-24 pl-4 shrink-0 text-sm font-bold'>
                                    &#8369;{(service.price * getQty(service.id)).toLocaleString()}
                                </span>
                                
                                <button
                                    type='button'
                                    onClick={() => onRemove(service.id)}
                                    aria-label={`Remove ${service.title}`}
                                    className='shrink-0 cursor-pointer text-white transition hover:text-red-400'
                                >
                                    <Trash2 size={16}/>
                                </button>
                            </li>
                        ))}
                    </ul>
                </section>

                <section className='mt-4 font-istok'>
                    <div className='mb-4 border-l-3 border-blue-500'>
                        <h2 className=' pl-2 text-md font-semibold'>Your Details</h2>
                        <p className='pl-2 text-xs text-white/40'>Further details will be discussed in chat. Never share your log in credentials.</p>
                    </div>
                    

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
                
                <footer className='sticky -bottom-5 -mx-5 -mb-5 mt-6 flex items-center justify-between gap-4 border-t border-white/10 bg-layout px-5 py-4 font-istok'>
                    <div>
                        <p className='text-xs text-white/60'>Total</p>
                        <p className='text-lg text-white font-bold'>&#8369;{total.toLocaleString()}</p>
                    </div>

                    <button
                        type='button'
                        onClick={handleConfirm}
                        disabled={cart.length === 0}
                        className='cursor-pointer rounded-md bg-blue-500 px-6 py-2 text-sm font-semibold text-white transition hover:bg-blue-600'
                    >
                        Confirm
                    </button>
                </footer>
            </div>
        </div>
    );
}