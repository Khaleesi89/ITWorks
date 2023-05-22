

import './Contact.css';

export const Contact = () => {

    return (
        <>
        <section className="Contact">
            <h1> Contactanos<small>Ofrecemos una atencion personalizada para poder asesorarte con tus proyectos.<br /><br />Envianos un mail y nos pondremos en contacto contigo.</small></h1>
                <section className="contact-wrap">
                    <form action="" className="contact-form">
                        <div className="col-sm-12">
                            <div className="input-block">
                                <input type="text" className="form-control" required="required"/>
                                <span>Nombre</span>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-block">
                                <input type="text" className="form-control" required="required"/>
                                <span>Apellido</span>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-block">
                                <input type="text" className="form-control" required="required"/>
                                <span>Email</span>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-block">
                                <input type="text" className="form-control" required="required"/>
                                <span>Asunto</span>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <div className="input-block">
                                <textarea rows="3" type="text" className="form-control" required="required"></textarea>
                                <span>Informacion</span>
                            </div>
                        </div>
                        <div className="col-sm-12">
                            <button className="square-button">Enviar</button>
                        </div>
                    </form>
                </section>
        </section>
        </>
    )
} 

export default Contact