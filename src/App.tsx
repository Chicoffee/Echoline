import { useState } from 'react'
import type { ServiceItem } from './types/service'
import Navbar from './components/layout/Navbar'
import Hero from './sections/hero'
import Services from './sections/services'
import Footer from './components/layout/footer'
import ConfirmModal from './components/order/order-confirm-modal'

export default function App() {
  const [cart, setCart] = useState<ServiceItem[]>([])
  const [isOrderModalOpen, setIsOrderModalOpen] = useState(false)

  function addToCart(service: ServiceItem) {
    setCart((currentCart) => {
      const isAlreadyAdded = currentCart.some(
        (item) => item.id === service.id
      )

      if(isAlreadyAdded) return currentCart
      
      return [...currentCart, service]
    })
  }

  function removeFromCart(serviceId: string) {
    setCart((currentCart) =>
      currentCart.filter((item) => item.id !== serviceId)
    )
  }

  const total = cart.reduce((sum, service) => {
    return sum + service.price
  }, 0)
  return(
    <div className='min-h-screen bg-primary'>
      <Navbar/>
      <Hero/>
      <Services cart={cart} onAddToCart={addToCart} onRemoveFromCart={removeFromCart}/>
      <Footer/>

      
      {cart.length > 0 && (
        <aside className='fixed inset-x-0 bottom-8 z-50 px-4 font-istok'>
          <div className='mx-auto flex max-w-2xl items-center justify-between gap-4 rounded-2xl border border-white/10 bg-layout/95 p-4 text-white shadow-2xl backdrop-blur-md'>
            <div>
              <p className='text-sm text-white/70'>
                {cart.length} {cart.length === 1 ? "service" : "services"} selected
              </p>

              <p className='text-xl font-bold'>
                &#8369;{total.toLocaleString()}
              </p>
            </div>

            <button
              type='button'
              className='cursor-pointer rounded-lg bg-blue-500 px-4 py-2 text-sm font-bold transition hover:bg-blue-400'
              onClick={() => setIsOrderModalOpen(true)}  
            >
              Order now
            </button>
          </div>
        </aside>
      )}

      {isOrderModalOpen && (
        <ConfirmModal
          cart={cart}
          onClose={() => setIsOrderModalOpen(false)}
          onRemove={(id) => setCart((prev) => prev.filter((s) => s.id !== id))}
          onConfirm={(items) => console.log(items)}
        />
      )}
    </div>
  );
}
