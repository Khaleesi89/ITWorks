import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Promotions } from './components/Promotions/Promotions';
import {Home} from './components/Home/Home';
import Cards from './components/Servicios/Cards';
import Ofertas from './components/Servicios/Ofertas';
import Footer from '../src/components/Footer/Footer';
import Carrousel from './components/Carrousel/Carrousel';




function App() {
  
    return(
        <div>
            
            <Promotions/>
            <Navbar />
            <Home/>
            <Cards />
            <Ofertas /> 
            <Footer/>
            <Ofertas />
            <Carrousel />

        </div>
    )

}

export default App;


