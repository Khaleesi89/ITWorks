//contenedor del carrito
import { CartElements } from "../CartElements/CartElements"
import { CartTotal } from "./CartTotal"


export const CartContent = () =>{
    return (
        <>
        <CartElements/>
        <CartTotal/>
        </>

    )
}