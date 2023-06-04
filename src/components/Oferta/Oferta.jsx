import {BsCheckCircle} from 'react-icons/bs';
import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
export const Oferta = props =>{

    const {data, cart, setCart} = useContext(dataContext)

    const comprarOferta = (producto) =>{
        console.log("dentro de comprarOferta")
        //console.log(producto)

        //buscar dentro del carrito existe oferta o no q ya este en el carrito
        const ofertRepetido = cart.find((item) => item.id === producto.id);

        if(ofertRepetido){
            //modificamos la cantidad de ese producto
            setCart(cart.map((item)=> (item.id === producto.id ? {...producto, cantidad: ofertRepetido.cantidad + 1} : item )));
        } else {
            //carga el producto si no existe en carrito
            setCart([...cart,producto]);

        }
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
                        <button type="button" className="btn btn-dark cardOfertas">${props.precio}</button>
                        <button onClick = {() => comprarOferta(props)} id={`servicio-${props.id}`} type="button" className="btn cardOfertas btn-dark">Contratar</button>
                        {/* <button id={`servicio-${props.id}`} type="button" className="btn btn-dark">Contratar</button> */}

                </div>

    )
}