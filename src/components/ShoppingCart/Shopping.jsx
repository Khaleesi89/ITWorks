import React, { useContext } from 'react';
import { CartContext } from '../Contexts/ShoppingCartContext';
import './Cart.css';

 export const Shopping = () => {
  const [cart, setCart] = useContext(CartContext);
  
  const quantity = cart.reduce((acc, curr) =>{
    return acc + curr.quantity;
  }, 0);

  const totalPrice = cart.reduce((acc, curr ) =>{
        return acc + curr.quantity * curr.price;
  },0);

  return (
    <div className='cart-container'>
      <div className='cont'>Articulos en el carrito: {quantity}</div>
      <div className='cont'>Total =    ${totalPrice}</div>
     
    </div>
  );
};
