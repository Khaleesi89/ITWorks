import React from 'react'
import CardUS from './CardUS'
import imagen1 from "./assets/pers4.avif";
import imagen2 from "./assets/Chica1.avif";
import imagen3 from "./assets/chico2.avif";
import imagen4 from "./assets/chica2.avif";
import imagen5 from "./assets/chico3.avif";
import imagen6 from "./assets/chica3.avif";

const cards = [
    {
        id:1,
        title: 'Juan - Desarrollador Web',
        image: imagen1,
        description: "Experto en programación y diseño web. Transforma ideas en páginas funcionales y atractivas, superando desafíos técnicos para ofrecer resultados de alta calidad."
    },
    {
        id:2,
        title: 'Laura - Especialista UX/UI',
        image: imagen2,
        description: "Diseñadora de experiencias y interfaces intuitivas. Crea soluciones visuales atractivas y fáciles de usar, generando interacciones fluidas y experiencias memorables."
    },
    {
        id:3,
        title: 'Carlos - Desarrollador Full Stack',
        image: imagen3,
        description: "Experto en desarrollo web full stack. Crea sistemas robustos y escalables, combinando lenguajes de programación y bases de datos para soluciones eficientes."
    },
    {
        id:4,
        title: 'Sofía - Especialista SEO y Marketing Digital',
        image: imagen4,
        description: "Apasionada del SEO y marketing digital. Optimiza la visibilidad online, investiga palabras clave y desarrolla estrategias efectivas de contenido."
    },
    {
        id:5,
        title: 'Alejandro - Experto en Seguridad Informática',
        image: imagen5,
        description: "Experto en ciberseguridad. Protege sistemas y datos, identificando vulnerabilidades y aplicando medidas preventivas para garantizar la seguridad de los proyectos."
    },
    {
        id:6,
        title: 'María - Community Manager',
        image: imagen6,
        description: "Profesional creativa y dinámica en redes sociales. Administra cuentas, interactúa con la comunidad y crea estrategias de contenido efectivas para aumentar la presencia en línea."
    }
]

const CardsUS = () => {
  return (
    <>
    <h2>Sobre nosotros</h2>
    <div className='container d-flex justify-content-center h-100 align-items-center'>
        <div className="row">
            {
                cards.map(card => (
                    <div className="col-md-4" key={card.id}>
                        <CardUS 
                            title={card.title}
                            image={card.image}
                            description={card.description}
                        />
                    </div>
                ))
            }
        </div>
    </div>
    </>
  )
}

export default CardsUS