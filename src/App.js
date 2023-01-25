
import './App.scss';
import Hero from './components/Hero/Hero'
import Join from './components/Join/Join';
import Plans from './components/Plans/Plans';
import Map from './components/Map/Map';
import Programs from './components/Programs/Programs';
import Reasons from './components/Reasons/Reasons';
import Testimonials from './components/Testimonial/Testimonials';
import Footer from './components/Footer/Footer';
function App() {
  return (
  
  <div className="App">
 <Hero/>
 <Programs/>
 <Reasons/>
 
 <Testimonials/>
 <Join/>
 <Map/>
 <Footer/>
 </div>
  
  );
}

export default App;
