//contenedor del carrito
import { CartElements } from "../CartElements/CartElements"
import {Navbar} from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import { CartTotal } from "./CartTotal"
import { dataContext } from "../Context/DataContext"
import { useContext } from "react"
import swal from 'sweetalert';





export const CartContent = () =>{
    const {cart,setCart} = useContext(dataContext)

    const vaciarCarrito = ()=>{
        console.log(' vaciar carrito');
        setCart([]);
    }

    const finalizacion = ()=>{
        console.log(' finalizacion');
        swal('GRACIAS POR SU COMPRA', '', 'success');
        setCart([]);
            
            
    }

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
                    <button onClick= {finalizacion} className="btnFinalizar">Finalizar Compra!</button>
                    <button className="btnFinalizar" onClick={vaciarCarrito}>Vaciar Carrito</button>
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