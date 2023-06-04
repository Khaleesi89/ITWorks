import { Cards } from "../Cards/Cards"
import Carrousel from "../Carrousel/Carrousel"
import Footer from "../Footer/Footer"
import { Navbar } from "../Navbar/Navbar"
import { Oferta } from "../Oferta/Oferta"
import { Promotions } from "../Promotions/Promotions"
import Button from "./Button"
import { Slogan } from "./Slogan"

export const Home = () => {
    return (
        <>
            <Promotions/>
            <Navbar/>
            <div className="home-container" >
                <Slogan/>
                <Button/>
            </div>
            <Cards/>
            <Oferta/>
            
            
            <Carrousel/>
            <Footer/>
            </>
    )
}


            

        
            
            
    

