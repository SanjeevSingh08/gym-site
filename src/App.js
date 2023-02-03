import { BrowserRouter as Router, Routes, Route ,useLocation} from 'react-router-dom';
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';

import Programs from './components/Programs/Programs';

import Testimonials from './components/Testimonial/Testimonials';
import Footer from './components/Footer/Footer';
import "./App.scss"

import AboutUs from './components/About/AboutUs';
import Head from './components/Head/Head';
import { useEffect, useState } from 'react';
import Loading from './components/Headers/Loading/Loading';


import GalleryCarousel from "./components/Gallery/GalleryCorousel";
import Contact from './components/Contact/Contact'


function App() {
  const location = useLocation();
  const [showHead, setShowHead] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    console.warn("I am here");
    if (location.pathname === '/' || location.pathname === "/gym-site") {
      setShowHead(false);
      
      
    } else {
      setShowHead(true);
   
    }
  }, [location]);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);


useEffect(() => {
  setTimeout(() => {
    setIsLoading(false);
  }, 1500);
}, []);

if (isLoading) {
  return <Loading/>;
}
  return (
   
    <div className="App">
 
      {showHead && <Head />}
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/gym-site" element={<Hero />} />
        <Route path="/programs" element={<Programs />} />
        <Route path="/gallery" element={<GalleryCarousel/>} />
        <Route path="/testimonials" element={<Testimonials />} />
        <Route path="/join" element={<Join />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/about-us" element={<AboutUs  />} />
        <Route path="/contact-us" element={<Contact/>} />
        </Routes>
        
      <Footer />
    </div>
     
  );
}

function Application(){
  return (
    <Router>
      <App />
      </Router>
  )
}
export default  Application


