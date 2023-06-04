import { useContext, useState } from 'react';
import { dataContext } from '../Context/DataContext';
export const CartItemCounter = ({cantidad}) =>{
    
    const Inicial = cantidad

    const [count, setCount] = useState(Inicial)
    //const {count, setCount} = useContext(dataContext);

    const aumentar = () =>{
        console.log('aumentar');
        setCount(count + 1)
        
        

    }
    const disminuir = () =>{
        console.log('disminuir');
        setCount(count - 1)
    }

    return(
        <>

            <button className="btn restar" onClick={disminuir}>-</button>
            <p>{count}</p>
            <button className="btn sumar" onClick={aumentar}>+</button>
            
        </>
    )
}