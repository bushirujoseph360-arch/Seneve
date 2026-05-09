import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Stats from './components/Stats';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Infobar from './components/Infobar';

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <section id="accueil">
          <Hero />
        </section>
        <Infobar />
        <section id="le-collège">
          <Stats />
        </section>
        <Features />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
