import React, { useContext } from 'react';
import { CartContext } from '../Contexts/ShoppingCartContext';

 export const Item = ({id, name, price}) => {

    const [cart, setcart] =useContext(CartContext);
  /*si el producto esta añadido a la lista o no buscamos dentro del arreglo currItems*/
    const AddToCart = () =>{
        setcart((currItems) =>{
        const isItemsFound = currItems.find((item) => item.id === id);
        /*obtenemos la cantidad actual y añadimos uno*/
        if (isItemsFound){
          return currItems.map((item) => {
            if(item.id === id){
              return {...item,quantity: item.quantity + 1};
              
            }else{
              return item;
            }
          });
        }else{
          return [...currItems, {id, quantity:1, price}];
        }
        });
    };

    /*remover productos del carrito*/ 
    const removeItem = (id) =>{
      setcart((currItems) =>{
        if(currItems.find((item) => item.id === id)?.quantity === 1){
            return currItems.filter((item) => item.id !== id);

        }else{
          return currItems.map((item) =>{
            if(item.id === id){
              return {...item, quantity: item.quantity - 1};
            }else{
              return item;
            }

          });
        }

        
      });
    };
    /*cuantos fueron seleccionados con respecto a un solo producto*/
    const getQuantityByid = (id) => {
      return cart.find((item) => item.id === id )?.quantity || 0;
    };

    const quantityPerItem = getQuantityByid(id);
  return (
    <div className='item-box'>
      {
        quantityPerItem > 0 && (
          <div className='item-quantity'>{quantityPerItem}</div>
        )
      }
        <div className='title'>{name}</div>
        <div className='item-price'>${price}</div>
       {quantityPerItem === 0 ? (
          <button className='item-add-button' onClick={( ) => AddToCart()}>Añadir</button>
       ):(
        <button className='item-plus-button' onClick={( ) => AddToCart()}>Añadir +</button>
       ) }
       {quantityPerItem > 0 && (
         <button className='item-minus-button' onClick={()=> removeItem(id)}>Restar</button>
       )}
    
    
    </div>
  );
};