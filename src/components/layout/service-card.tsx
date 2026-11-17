import type { ServiceItem } from "../../types/service"

type ServiceCardProps = ServiceItem;

export default function ServiceCard({
    title,
    image,
    price,
    features,
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

                    <span className='shrink-0 text-xl font-bold text-white font-istok'>
                        &#8369;{price.toLocaleString()}
                    </span>
                </div>
            </div>
        </div>
    )
}