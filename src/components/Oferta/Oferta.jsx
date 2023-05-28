import {BsCheckCircle} from 'react-icons/bs';
export const Oferta = props =>{
    return(
                <div className="oferta">
                        <div className="oferta__head">
                            <h3>{props.title}</h3>
                        </div>

                        <ul className="oferta_list">
                            <li>
                                <BsCheckCircle className = 'oferta__list-icon'/>
                                <p>{props.text1}</p>
                            </li>
                            <li>
                                <BsCheckCircle className = 'oferta__list-icon'/>
                                <p>{props.text2}</p>
                            </li>
                            <li>
                                <BsCheckCircle className = 'oferta__list-icon'/>
                                <p>{props.text3}</p>
                            </li>
                            <li>
                                <BsCheckCircle className = 'oferta__list-icon'/>
                                <p>{props.text4}</p>
                            </li>
                            <li>
                                <BsCheckCircle className = 'oferta__list-icon'/>
                                <p>{props.text5}</p>
                            </li>
                        </ul>
                        <button type="button" className="btn btn-dark">{props.precio}</button>
                        <button id={`servicio-${props.id}`} type="button" className="btn btn-dark">Contratar</button>

                </div>

    )
}