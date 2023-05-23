import './CartItem.css';
import { useReducer } from 'react';
import {  cartInitialState, cartReducer} from '../../Reducer/CartReducer';
import Service from './Service';
import Cart from './Cart';
import { TYPES } from '../../Actions/CartAction';


const CartItem = () => {
   
  const [state, dispatch]= useReducer(cartReducer, cartInitialState)

            const {services, cart} = state;
            const addToCart = (id) => {dispatch({type: TYPES.ADD_TO_CART, payload: id})}
            const deleteFromCart = (id, all = false) => {
              if (all) {
                dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
              }else{
                dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})
                }
              }
            const clearCart = () => dispatch({type: TYPES.CLEAR_CART})

  return (
     <div className="cart">
          <h2>Tienda</h2>
          <h3>Servicios</h3>
          <div className='box grid-responsive'>
            { services.map(service => <Service
                      key={service.id}
                      service={service}
                      addToCart={addToCart}
            />)}
           </div>
           <h3>Carrito</h3>
           <div className='box'>
            {
              cart.map((item, index) => <Cart
                     key={index}
                     item={item}
                     deleteFromCart={deleteFromCart}
              
              
              />)

            }
           </div>
           <button onClick={clearCart}>Vaciar Carrito</button>
       </div>
          
      )
       
}
export default CartItem