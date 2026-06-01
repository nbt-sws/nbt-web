import Nav from '../sections/Nav';
import Hero from '../sections/Hero';
import About from '../sections/About';
import Services from '../sections/Services';
import Products from '../sections/Products';
import Contact from '../sections/Contact';
import Footer from '../sections/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Nav />
      <main>
        <Hero />
        <About />
        <Services />
        <Products />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
