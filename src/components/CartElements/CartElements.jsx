//donde estara los articulos del usuario q va a ir metiendo

import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import { CartItemCounter } from '../CartItemCounter/CartItemCounter';

export const CartElements = () =>{
    
    const {cart, setCart} = useContext(dataContext);
    console.log('esty en cartelements');
    
    const eliminarItem = (prod) =>{
        console.log("estoy por eliminar un item");
        console.log(prod);
        const nuevoCarrito = cart.filter((item) => item.id !== prod.id)
        setCart(nuevoCarrito);
    }

    

    return cart.map((prod) => {
        return(
        <div className="prducto" key={prod.id}>
            <div className='productotitulo'> 
                <p>{prod.title}</p>
            </div>
            <div className='productoprecio'>
              <p>${prod.precio}</p> 
            </div>
            <div className='contador'>
                <CartItemCounter key={prod.id} oferta={prod} cantidad={prod.cantidad}/>
            </div>
            <div onClick={()=>eliminarItem(prod)} id={prod.id} className='vaciarCarrito'><i className="bi bi-trash3-fill"></i></div>

        </div>
        )
    })

}