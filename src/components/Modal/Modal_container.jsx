
import Modal_card from './Modal_card';
import './Modal_card.css';
import './Modal_container.css'

const Modal_container = () => {

    const cards = [

        {
            id: 1,
            title: "In-company",
            description: "nuestros planes para compañias, garantizan la mejor eficiencia para la oferta de sus servicios. Tienes una duda? no dudes en consultarnos!"
        },
        {
            id: 2,
            title: "Academy",
            description: "potenciá a tu organizacion con los skills del mañana. Aprendé con nosotros!"
        },
        {
            id: 3,
            title: "Start-up program",
            description: "capacitaciones sin costo para compañias emergentes."
        },
        {
            id: 4,
            title: "Education",
            description: "planes exclusivos para instituciones educativas."
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