import React from 'react';
import Modal_card from './Modal_card';

const Modal_container = () => {

    const cards = [

        {
            id: 1,
            title: "In-company",
            description: ""
        },
        {
            id: 2,
            title: "Academy",
            description: ""
        },
        {
            id: 3,
            title: "e-gov",
            description: ""
        },
        {
            id: 4,
            title: "Educacion primero",
            description: ""
        }

    ];

    return(
       <div className='Modal_container'>
            <div className='Modal_cards'>
                {cards.map((card) => (
                    <Modal_card key={card.id} title={card.title} description={card.description}/>
                ))}
            </div>
        </div>
    );
}

export default Modal_container;