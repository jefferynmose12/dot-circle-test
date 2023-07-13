import './App.css';
import ChoseUs from './components/chose/ChoseUs';
import Footer from './components/footer/Footer';
import GrowthChose from './components/growthChose/GrowthChose';
import Hero from './components/hero/Hero';
import NavBar from './components/navbar/NavBar';
import Services from './components/services/Services';
import SlideChose from './components/slideChose/SlideChose';
import Started from './components/started/Started';
import VideoSection from './components/videoSection.js/VideoSection';

function App() {
  return (
    <div className="bg-background min-h-screen overflow-x-hidden">
      <NavBar />
      <Hero />
      <VideoSection />
      <Services />
      <GrowthChose />
      <SlideChose />
      <ChoseUs />
      <Started />
      <Footer />
    </div>
  );
}

export default App;
