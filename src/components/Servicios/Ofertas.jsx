
import './Ofertas.css';
import {BsCheckCircle} from 'react-icons/bs';



const Ofertas = () => {
    return ( 

        <section className="ofertas" id= 'ofertas' >
            
            <h2>Ofertas especiales</h2>

            <div className="container ofertas__container">
                <article className="oferta">
                    <div className="oferta__head">
                        <h3>Diseño UX/UI - Plan Inicial </h3>
                    </div>

                    <ul className="oferta_list">
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Análisis y pruebas de usuarios</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Investigación de competitividad</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Prototipos y diseños graficos</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Trayectoria del usuario</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Revisión y comentarios</p>
                        </li>
                    

                    </ul>
                    <button type="button" className="btn btn-dark">$15.000</button>
                </article>

                    {/* End of ux/ui */}


                <article className="oferta">
                    <div className="oferta__head">
                        <h3> Community Manager - Plan Inicial </h3>
                    </div>

                    <ul className="oferta_list">
            
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>2 anuncios publicitarios</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p> Identidad de Marca </p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p> Diseño de 2 posteos semanales</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Diseño de historias destacadas</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Diseño de 2 historias semanales</p>
                        </li>

                    </ul>
                    <button type="button" className="btn btn-dark">$22.500</button>
                </article>

                    {/* End of Community Manager*/}

                <article className="oferta">
                    <div className="oferta__head">
                        <h3>Desarrollo Web - Plan Especial</h3>
                    </div>

                    <ul className="oferta_list">
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p> 3 secciones</p>
                        </li>
                        
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Texto e iconos animados.</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Diseño Adaptable</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Formularios especiales</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Botón de Whatsapp</p>
                        </li>

                    </ul>
                    <button type="button" className="btn btn-dark">$25.000</button>
                </article>

                    {/* End of Desarrollo Web */}

                <article className="oferta">
                    <div className="oferta__head">
                        <h3>D. Grafico - Plan Logo +Banners</h3>
                    </div>

                    <ul className="oferta_list">
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Diseño de Logotipo</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>3 muestras de logotipos</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Formato final en png - jpg </p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p> Formato Vector</p>
                        </li>
                        <li>
                            <BsCheckCircle className = 'oferta__list-icon'/>
                            <p>Banners para sitio web</p>
                        </li>
                    
                    </ul>
                    <button type="button" className="btn btn-dark">$12.000</button>
                </article>
            </div>

                    {/* End of Diseño Grafico */}


        </section>
    )
}

export default Ofertas;