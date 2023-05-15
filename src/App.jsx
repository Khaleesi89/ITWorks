import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Promotions } from './components/Promotions/Promotions';
import {Home} from './components/Home/Home';
import {Cards} from './components/Servicios/Cards';
import Ofertas from './components/Servicios/Ofertas';
import Carrousel from './components/Carrousel/Carrousel';
import Footer from '../src/components/Footer/Footer';


function App() {
  
    return(
        <div>
            
            <Promotions/>
            <Navbar />
            <Home/>
            <Cards />
            <Ofertas /> 
            <Carrousel />
            <Footer/>

        </div>
    )

}

export default App;


