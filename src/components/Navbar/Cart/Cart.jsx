
import {Link} from 'react-router-dom'

import { useContext } from 'react';
import { dataContext } from '../../Context/DataContext';

export const Cart = () =>{
    const {cart} = useContext(dataContext)
    let cantidadProductos = cart.length

    return (
        <Link className='carritoIcono' to={('/cart')}><i className="bi bi-cart3"><span className="m-2 cantidad-productos">{cantidadProductos}</span></i></Link>
        
       
    )
}