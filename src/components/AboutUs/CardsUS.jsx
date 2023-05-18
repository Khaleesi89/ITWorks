import React from 'react'
import CardUS from './CardUS'
import imagen1 from "./assets/imagen1.png";
import imagen2 from "./assets/imagen2.png";
import imagen3 from "./assets/imagen3.png";
import imagen4 from "./assets/imagen4.png";
import imagen5 from "./assets/imagen5.png";
import imagen6 from "./assets/imagen6.png";

const cards = [
    {
        id:1,
        title: 'Persona 1',
        image: imagen1,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatum."
    },
    {
        id:2,
        title: 'Persona 2',
        image: imagen2,
        description: "Lorem ipsum dolor sit amet."
    },
    {
        id:3,
        title: 'Persona 3',
        image: imagen3,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus ullam natus eligendi saepe blanditiis recusandae molestiae praesentium dolore, exercitationem quasi."
    },
    {
        id:4,
        title: 'Persona 4',
        image: imagen4,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatum."
    },
    {
        id:5,
        title: 'Persona 5',
        image: imagen5,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatum."
    },
    {
        id:6,
        title: 'Persona 6',
        image: imagen6,
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, voluptatum."
    }
]

const CardsUS = () => {
  return (
    <div className='container d-flex justify-content-center h-100 align-items-center'>
        {/* <h2>Quienes somos</h2> */}
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
  )
}

export default CardsUS