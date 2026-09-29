import './App.css';
import {Header} from "./components/Header";
import { CarouselComponent } from './components/CarouselComponent';
import "./styles/general.css";
import { ShineProducts } from './components/ShineProducts';
import { Footer } from './components/Footer';
import { Copy } from './components/Copy';

function App() {
  return (
    <div className="App" id="home">
      <Header/>
      <CarouselComponent/>
      <ShineProducts/>
      <Footer/>
      <Copy/>
    </div>
  );
}

export default App;
