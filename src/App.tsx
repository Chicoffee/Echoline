import Navbar from './components/layout/Navbar'
import Hero from './sections/hero'
import Services from './sections/services'
import Footer from './components/layout/footer'

export default function App() {
  return (
    <div className='min-h-screen bg-primary'>
      <Navbar />
      <Hero />
      <Services />
      <Footer />
    </div>
  )
}