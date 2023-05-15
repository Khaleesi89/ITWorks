import Card from './Card'; 
import DiseñoUXUI from "../assets/UX-UI.jpg";
import CommunityManager from "../assets/communitymanager.png";
import DesarrolloWeb from "../assets/Desarrolloweb.png";
import DiseñoGrafico from "../assets/DiseñoGrafico.png";

export const Cards = ()=>{
        return (
            <div className="container-fluid d-flex justify-content-center">
                <div className="row">
                    <div className="col-md-3">
                        <Card img={DiseñoUXUI}  
                        title= "Diseño UX/UI" 
                        text= "Diseños de interfaz sofisticados, creativos y con propósito. Le ayudaremos a definir, diseñar y planificar los productos que los usuarios adoran."
                        button = "Saber más"

                        />
                    </div>
                    <div className="col-md-3">
                        <Card img={CommunityManager} 
                        title= "Community Manager" 
                        text= "Construye una reputación para hacer que tu marca sea distinguida y única. Elige el mejor plan para tus redes sociales y conectar con la audencia."
                    
                        button = "Saber más"

                        />
                    </div>
                    <div className="col-md-3">
                        <Card img={DesarrolloWeb} title= "Desarrollo Web" 
                        text= "Diferenciate de la competencia con tu propio sitio web y asegura tu presencia en Google. Nuestro equipo ofrece servicios a medida."
                        
                        button = "Saber más"

                        />
                    </div>
                    <div className="col-md-3">
                        <Card img={DiseñoGrafico} 
                        title= "Diseño Grafico"
                        text= "Desarrollamos la identidad y personalidad de tu negocio. Diseño grafico personalizados, realizado 100% para adaptarse a tu proyecto y necesidad. "
                    
                        button = "Saber más"

                        />
                    </div>
                </div>
            </div>

            )
    }



/* import { useEffect,useState } from 'react';

import Card from './Card'; 
import axios from 'axios'; */


///////////INICIO DE UN METODO/////////////////
 /*  export const Cards = ()=>{
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
        
    },[] ); */

///////////FIN DE UN METODO/////////////////

///////////INICIO DE UN METODO/////////////////

/*     const getData = async ()=>{
        const ENDPOINT = 'http://localhost:3001/services';
        const res = await axios.get(ENDPOINT);
        const info = await res.data;
        setData(info);
    }
    
    useEffect(()=>{
        getData()
        
    },[] ); */



    ///////////FIN DE UN METODO/////////////////
    /* const cardsTotales = data.map((card) => <Card key={card.id} {...card} />)

    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                
                    {cardsTotales}
                
            </div>
        </div>
    )
} */
