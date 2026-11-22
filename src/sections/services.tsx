import { specialOffers, mapExploration } from '../data/services'
import ServiceCard from '../components/layout/service-card'

export default function Services() {
    return (
        <main className='scroll-mt-24 p-8'>
            <div className='mx-auto max-w-5xl'>
                <h1 className='mb-4 text-3xl font-bold font-istok text-white'>Services</h1>

                <section className='mb-10'>
                    <h2 className='mb-4 border-l-2 border-white pl-2 text-xl font-semibold font-istok text-white'>Special Offer</h2>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                        {specialOffers.map((item) => (
                            <ServiceCard key={item.id} {...item} />
                        ))}
                    </div>
                </section>

                <section className='mb-10'>
                    <h2 className='mb-4 border-l-2 border-white pl-2 text-xl font-semibold font-istok text-white'>Map Exploration</h2>
                    <div className='grid grid-cols-1 gap-5 md:grid-cols-2'>
                        {mapExploration.map((item) => (
                            <ServiceCard key={item.id} {...item} />
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}