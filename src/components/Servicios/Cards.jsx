import React, {Component} from 'react'
import Card from './Card' 
import DiseñoUXUI from "../assets/UX-UI.jpg"
import CommunityManager from "../assets/communitymanager.png"
import DesarrolloWeb from "../assets/Desarrolloweb.png"
import DiseñoGrafico from "../assets/DiseñoGrafico.png"

class Cards extends Component {
    render() {
        return (
          
        <div className="container-fluid d-flex justify-content-center">
            <div className="row">
                <div className="col-md-3">
                    <Card imgsrc={DiseñoUXUI}  
                    title= "Diseño UX/UI" 
                    text= "Diseños de interfaz sofisticados, creativos y con propósito. Le ayudaremos a definir, diseñar y planificar los productos que los usuarios adoran."
                   
                    button = "Saber más"

                    />
                </div>
                <div className="col-md-3">
                    <Card imgsrc={CommunityManager} 
                    title= "Community Manager" 
                    text= "Construye una reputación para hacer que tu marca sea distinguida y única. Elige el mejor plan para tus redes sociales y conectar con la audencia."
                   
                    button = "Saber más"

                    />
                </div>
                <div className="col-md-3">
                    <Card imgsrc={DesarrolloWeb} title= "Desarrollo Web" 
                    text= "Diferenciate de la competencia con tu propio sitio web y asegura tu presencia en Google. Nuestro equipo ofrece servicios a medida."
                    
                    button = "Saber más"

                    />
                </div>
                <div className="col-md-3">
                    <Card imgsrc={DiseñoGrafico} 
                    title= "Diseño Grafico"
                     text= "Desarrollamos la identidad y personalidad de tu negocio. Diseño grafico personalizados, realizado 100% para adaptarse a tu proyecto y necesidad. "
                  
                     button = "Saber más"

                    />
                </div>
            </div>
        </div>

            )
    }
}

export default Cards;
