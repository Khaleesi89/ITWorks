import{TYPES} from '../Actions/CartAction';
import Service from '../components/CartItem/Service';

export const cartInitialState = {
    services : [
        {id: 1, name: "Diseño UX/UI", price: 15000 },
        {id: 2, name: "Administrador de la comunidad", price:22500},
        {id: 3, name: "Desarrollo Web", price: 25000},
        {id: 4, name: "Diseño Grafico", price: 12000},
    ],
    cart: [ ]
}
export const cartReducer = (state, action) => {
  switch (action.type) {
      case TYPES.ADD_TO_CART:{
          const newService =state.services.find(service => service.id === action.payload)

          const itemInCart = state.cart.find(item =>item.id === newService.id)
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