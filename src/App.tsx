import Navbar from './components/layout/Navbar.tsx'
import Hero from './sections/hero.tsx'
import Services from './sections/services.tsx'
import Footer from './components/layout/footer.tsx';

function App() {
  return(
    <div className='min-h-screen bg-primary'>
      <Navbar/>
      <Hero/>
      <Services/>
      <Footer/>
    </div>
  );
}

export default App