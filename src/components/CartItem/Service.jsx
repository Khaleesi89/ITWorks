import React from 'react'

const Service = ({service, addToCart}) => {
    const {name, price, id}= service;
  return (
   <div  >  
        <h2>{name}</h2>
        <h3>${price}</h3>
        <button onClick={() => addToCart(id)}>Añadir al carrito</button>
      
        </div>  
     
     
     
  )
}

export default Service