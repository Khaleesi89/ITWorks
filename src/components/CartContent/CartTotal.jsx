import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';


export const CartTotal = () =>{
    const {cart} = useContext(dataContext);
    


    const total = cart.reduce((acc,prodd) =>acc + prodd.precio,0);
    return <div className="total">total a pagar: $ {total}</div>;

}

