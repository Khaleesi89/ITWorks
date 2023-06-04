//contenedor del carrito
import { CartElements } from "../CartElements/CartElements"
import {Navbar} from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { CartTotal } from "./CartTotal"
import { dataContext } from "../Context/DataContext"
import { useContext } from "react"


export const CartContent = () =>{
    const {cart} = useContext(dataContext)


    return cart.length > 0 ?(

        <>
        <Navbar/>
        <div className="carritoElemntos">
            <div className="tituloCarrito">
                <h2>Carrito de compras</h2> 
                <div className="articulosCarrito">
                    <CartElements/>
                </div>
                <div className="totalCarrito">
                    <CartTotal/>
                </div>
                <div className="finalizarCarrito">
                    <button className="btnFinalizar">Finalizar Compra!</button>
                </div>
            </div>
        </div>
        <Footer/>
        
        </>

    ):(
        <>
            <Navbar/>
            <div className="carritoElemntos">
                <div className="tituloCarrito">
                    <h2>Carrito de compras</h2> 
                    <div className="articulosCarrito">
                        <h2 className="cart-mensaje-vacio center">Tu carrito está vacío</h2>
                    </div>
                    
                </div>
            </div>
        </>

    )
}