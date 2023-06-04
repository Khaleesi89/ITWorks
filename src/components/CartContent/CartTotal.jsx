import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';


export const CartTotal = () =>{
    const {cart} = useContext(dataContext);
    


    const total = cart.reduce((acc,prodd) =>acc + (prodd.cantidad * prodd.precio),0);
    return <div className="total">Total a pagar: $ {total}</div>;

}

