import {BsCheckCircle} from 'react-icons/bs';
import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
export const Oferta = props =>{

    /* console.log("etoy dentro de oferta");
    console.log(props) */

    const {data, cart, setCart} = useContext(dataContext)


    const comprarOferta = (producto) =>{
        console.log("dentro de comprarOferta")
        //console.log(producto)
        setCart([...cart,producto]);
        console.log("lo q hay dentro de cart")
        console.log(cart)

    }
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
                        <button onClick = {() => comprarOferta(props)} id={`servicio-${props.id}`} type="button" className="btn btn-dark">Contratar</button>

                </div>

    )
}