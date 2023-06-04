import { useContext, useState } from 'react';
import { dataContext } from '../Context/DataContext';
export const CartItemCounter = ({oferta,cantidad}) =>{
    
    const Inicial = cantidad

    const [count, setCantidad] = useState(Inicial)

    const aumentar = () =>{
        console.log('aumentar');
        setCantidad(count + 1)
        
        

    }
    const disminuir = () =>{
        console.log('disminuir');
        setCantidad(count - 1)
    }

    return(
        <>

            <button className="btn restar" onClick={disminuir}>-</button>
            <p>{count}</p>
            <button className="btn sumar" onClick={aumentar}>+</button>
            
        </>
    )
}