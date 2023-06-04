import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../Contexts/ShoppingCartContext'

export const ShoppingCart = () => {

const [cart, setCart] = useContext(CartContext);
/*cantidad total, acc(acumulador),curr representa a cada objeto del arreglo*/ 
const quantity = cart.reduce((acc, curr) =>{
  return acc + curr.quantity;
}, 0);
  return (
    <div className='barra'>
        <Link to={"/"}>
        <h2>Inicio</h2>
        </Link>
        <ul className='list'>
            <Link to={"/cart"}>
            <li>
               <h4>🛒</h4>
            <div className='cart-count'>{quantity}</div>
            </li>
            </Link>
        </ul>
    </div>
  );
};