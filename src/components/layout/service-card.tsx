import type { ServiceItem } from "../../types/service"

type ServiceCardProps = ServiceItem & {
    isAdded: boolean;
    onAddToCart: () => void;
    onRemoveFromCart: () => void;
};

export default function ServiceCard({
    title,
    image,
    price,
    features,
    isAdded,
    onAddToCart,
    onRemoveFromCart,
}: ServiceCardProps) {
    return(
        <div className='relative h-64 overflow-hidden rounded-2xl hover:-translate-y-2 duration-300 transition-all'>
            <img src={image} alt={title} className='absolute inset-0 h-full w-full object-cover'/>

            <div className='absolute inset-x-0 bottom-0 bg-black/50 p-3 backdrop-blur-sm'>
                <h3 className='text-lg font-istok font-semibold text-white'>{title}</h3>

                <div className='flex items-end justify-between gap-3 font-istok'>
                    <ul className='list-disc pl-3 space-y-0.5 text-[10px] text-white/90'>
                        {features.map((f) => (
                            <li key={f}>{f}</li>
                        ))}
                    </ul>
                    
                    <div className='flex shrink-0 flex-col items-end gap-2'>
                        <span className='text-xl font-bold text-white font-istok'>
                            &#8369;{price.toLocaleString()}
                        </span>
                        
                        <button 
                            type='button'
                            onClick={isAdded ? onRemoveFromCart : onAddToCart}
                            className='cursor-pointer rounded-lg bg-blue-500 px-3 py-1.5 text-xs font-bold font-istok text-white transition hover:bg-blue-400'>
                                {isAdded ? "Remove" : "Avail now"}
                        </button>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}
