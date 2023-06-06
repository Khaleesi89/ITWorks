//import{TYPES} from '../Actions/CartAction';
import { useContext } from "react"
import {TYPES} from '../CartAction';
import { dataContext } from '../../Context/DataContext'; 



export const cartInitialState = () => {
  const {data, cart} = useContext(dataContext)
  return ArrayConDatos = [data,cart]
  }


export const cartReducer = (state, action) => {

  const {data, cart} = useContext(dataContext)
 
  console.log("que info tiene data")
  console.log(data)

  //state tiene tdoso los servicios disponibles y lo q hay en el carrito
  console.log("q tiene state");
  console.log(state)
  //la acccion q estas haciendo ej{type: 'ADD_TO_CART', payload: 4}
  console.log("q tiene action");
  console.log(action)
  switch (action.type) {
      case TYPES.ADD_TO_CART:{
          const newService =state.services.find(service => service.id === action.payload)

          const itemInCart = state.cart.find(item =>item.id === newService.id)
          console.log("que tiene itemInCart")
          console.log(itemInCart)
          return itemInCart
             ?{
               ...state,
               cart : state.cart.map( item =>
                item.id === newService.id
                      ? {...item, quantity: item.quantity + 1}
                      : item
               )
             }
             
             :{
               ...state,
               cart: [...state.cart, {...newService, quantity: 1}]
             }
          
         
      }
      case TYPES.REMOVE_ONE_PRODUCT:{
             const itemToDelete = state.cart.find(item => item.id === action.payload)
             return itemToDelete.quantity > 1
               ? {
                  ...state,
                  cart : state.cart.map( item =>
                    item.id === action.payload
                          ? {...item, quantity: item.quantity - 1}
                          : item
                   )
               }
              
              :{
                  ...state,
                  cart: state.cart.filter(item => item.id !== action.payload)
              }
            }
      case TYPES.REMOVE_ALL_PRODUCTS:{ 
        return {
          ...state,
          cart: state.cart.filter(item => item.id !== action.payload)
      }
      }
      case TYPES.CLEAR_CART:{
          return cartInitialState;
      }
          
          
  
      default:{
        return  state;
      }
  }
 
}