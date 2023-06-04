//donde estara los articulos del usuario q va a ir metiendo

import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import { CartItemCounter } from '../CartItemCounter/CartItemCounter';

export const CartElements = () =>{
    const {cart} = useContext(dataContext);
    console.log('esty en cartelements');
    




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
            <div className='vaciarCarrito'><i class="bi bi-trash3-fill"></i></div>

        </div>
        )
    })

}