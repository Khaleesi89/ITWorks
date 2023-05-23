import React from 'react'

const Cart = ({item, deleteFromCart}) => {

    const{name, price, id, quantity} = item;
  return (
    <div >
        <h4>{name}</h4>
        <h5>${price} x {quantity} = {price * quantity} </h5>
        <button onClick={()=> deleteFromCart(id, false)}>eliminar uno</button>
        <button onClick={()=> deleteFromCart(id, true)}>eliminar todos</button>
    </div>
  )
}

export default Cart