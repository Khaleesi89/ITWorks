import './App.css'
import { Navbar } from './components/Navbar/Navbar';
import { Promotions } from './components/Promotions/Promotions';
import {Home} from './components/Home/Home';
import {Cards} from './components/Cards/Cards';
import Ofertas from './components/Ofertas/Ofertas';
import Carrousel from './components/Carrousel/Carrousel';
import Footer from '../src/components/Footer/Footer';
import CardsUS from './components/AboutUs/CardsUS';
import Contact from './components/Contact/Contact';


function App() {

    return(
        <div>
            <Promotions/>
            <Navbar />
            <Home/>
            <Cards />
            <Ofertas /> 
            <CardsUS />
            <Contact />
            <Carrousel />
            <Footer/>
        </div>
    )

}

export default App;


