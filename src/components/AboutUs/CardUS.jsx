import React from 'react'
import './CardsUS.css'

const CardUS = ({title, image, description}) => {
  return (

    <>
      <div className='card bg-dark cardAU'>
        <div className="overflow">
          <img src={image} alt="" className='card-img-top'/>
        </div>
        <div className="card-body text-light">
          <h4 className='card-title text-center'>{title}</h4>
          <p className='card-text text-secondary text-center'>{description}</p>
        </div>
      </div>
    </>
    
  )
}

export default CardUS