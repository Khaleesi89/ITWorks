
import './Ofertas.css';
import { useEffect,useState } from 'react';
import axios from 'axios'; 
import { Oferta } from '../Oferta/Oferta';

const Ofertas = () => {
    const [data, setData] = useState([]);

    useEffect(()=>{
        axios.get('http://localhost:3001/ofertas')
        .then(response => {
         // Manejar la respuesta de la solicitud
        setData(response.data);
        
        })
        .catch(error => {
        // Manejar el error de la solicitud
        console.log(error);
        });
        
    },[] );
    
    const Ofertastotales = data.map((oferta) => <Oferta key={oferta.id} {...oferta} />)


    return ( 

        <section className="ofertas" id= 'ofertas' >
            <h2>Ofertas especiales</h2>

            <div className="container ofertas__container">
                
                {Ofertastotales}
                
            </div>
        </section>
    )
}

export default Ofertas;