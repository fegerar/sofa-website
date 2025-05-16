import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import Demo from './components/Demo';
import Testimonials from './components/Testimonials';
import CallToAction from './components/CallToAction';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-dark-bg"> {/* Use dark background */}
      <Navbar />
      <main>
        <Hero />
        <Features />
        <Demo />
        <Testimonials />
        {/* <CallToAction /> */}
      </main>
      <Footer />
    </div>
  );
}

export default App;