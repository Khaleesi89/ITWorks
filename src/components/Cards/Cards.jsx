
import { useEffect,useState } from 'react';
import Card from '../Card/Card'; 
import axios from 'axios'; 


export const Cards = ()=>{
    const [data, setData] = useState([]);
    
    useEffect(()=>{
        axios.get('http://localhost:3001/services')
        .then(response => {
         // Manejar la respuesta de la solicitud
        setData(response.data);
        
        })
        .catch(error => {
        // Manejar el error de la solicitud
        console.log(error);
        });
        
    },[] );
    
    const cardsTotales = data.map((card) => <Card key={card.id} {...card} />)

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                
                    {cardsTotales}
                
            </div>
        </div>
    )
}
