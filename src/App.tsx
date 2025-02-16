import { Link } from 'react-scroll';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Accommodations from './components/Accommodations';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-['Inter']">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Accommodations />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;