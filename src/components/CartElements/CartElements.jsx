//donde estara los articulos del usuario q va a ir metiendo

import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

export const CartElements = () =>{
    const {cart} = useContext(dataContext);
    console.log('esty en cartelements');
    console.log(cart)


    return cart.map((prod) => {
        return(
        <div className="prducto" key={prod.id}>
            
            <p>{prod.title}</p>  <p>${prod.precio}</p>

        </div>
        )
    })

}