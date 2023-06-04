
import  {Button}  from "./Button"
import {Slogan} from "./Slogan"
import { Navbar } from "../Navbar/Navbar"
import { Promotions } from "../Promotions/Promotions"
import { Cards } from "../Cards/Cards"
import Ofertas from "../Ofertas/Ofertas"
import CardsUS from "../AboutUs/CardsUS"
import Contact from "../Contact/Contact"
import Carrousel from "../Carrousel/Carrousel"
import Footer from "../Footer/Footer"





export const Home = () => {
    return (
        <>
            <Promotions/>
            <Navbar/>
            <div className="home-container" >
                <Slogan/>
                <Button/>
            </div>
            <Cards />
            <Ofertas /> 
            <CardsUS /> 
            <Contact />
            <Carrousel />
            <Footer/>
            
        </>
        
    )
}