import Header from './components/Header';
import Hero from './components/Hero';
import StatsStrip from './components/StatsStrip';
import PainPoints from './components/PainPoints';
import SimpleSlider from './components/Slider';

import Features from './components/Features';
import Testimonials from './components/Testimonials';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-moxinexa-light text-moxinexa-dark font-sans antialiased selection:bg-moxinexa-teal selection:text-white">
      <Header />
      <Hero />
      <StatsStrip />
      <PainPoints />
      <SimpleSlider />

      <Features />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
}

export default App;