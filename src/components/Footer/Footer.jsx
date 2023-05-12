
import './Footer.css';
import fb from '../assets/facebook2.png'
import insta from '../assets/instagram2.png'
import whatsapp from '../assets/whatsapp.png'
import data from '../../img/data.jpg';


const Footer=()=>{
    return (
        <div className='footer'>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#190832" fill-opacity="1" d="M0,192L80,176C160,160,320,128,480,138.7C640,149,800,203,960,213.3C1120,224,1280,192,1360,176L1440,160L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"></path></svg>
                <div className='sb_footer section_padding'>
                    <div className='sb_footer-links'>
                        <div className='dataFiscal'>
                            <img src={data} alt="data fiscal" srcset="" />
                        </div>
                        <div className='textitoFooter'>
                            <p>ITWorks está presente en Argentina, Bolivia, Brasil, Chile, Colombia, Costa Rica, Ecuador, El Salvador, Guatemala, Honduras, México, Nicaragua, Panamá, Paraguay, Perú, Puerto Rico, República Dominicana, Estados Unidos, Uruguay</p>

                        </div>
                        <div className='sb_footer-links_div'>
                            <h4>Conócenos</h4>
                            <a href="/emplayer">
                                <p>Nuestros compromisos</p>
                            </a>
                            <a href="/emplayer">
                                <p>Trabajá con nosotros</p>
                            </a>
                            <a href="/emplayer">
                                <p>Preguntas frecuentes</p>
                            </a>
                            <a href="/emplayer">
                                <p>Servicios ITWorks</p>
                            </a>
                        </div>
                        <div className='sb_footer-links_div'>
                            <h4>Compra online</h4>
                            <a href="/emplayer">
                                <p>¿Cómo comprar?</p>
                            </a>
                        </div>
                        <div className='sb_footer-links_div'>
                            <h4>Información util</h4>
                            <a href="/emplayer">
                                <p>Legales</p>
                            </a>
                            <a href="/emplayer">
                                <p>Tasas de interés</p>
                            </a>
                            <a href="/emplayer">
                                <p>Contacto</p>
                            </a>
                        </div>
                        <div className='sb_footer-links_div'>
                            <h4>Seguinos en redes</h4>
                            <div className='socialmedia'>
                                
                                <p><img src={fb} alt=""/></p>
                                <p><img src={insta} alt="" /></p>
                                <p><img src={whatsapp} alt="" /></p>
                                <p><img src='{ddd}' alt="" /></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
            <hr />
            <div className='sb_footer-below'>
                <div className='sb_footer-copyright'>
                    <p>
                        @{new Date().getFullYear()} ITWorks. Todos los derechos reservados.
                    </p>
                </div>
                <div className='sb_footer-below-links'>
                    <a href="/terms"><p>Terminos & Condiciones</p></a>
                    <a href="/terms"><p>Politica de Privacidad</p></a>
                    <a href="/terms"><p>Defensa al consumidor</p></a>
                    <a href="/terms"><p>Contacto</p></a>
                </div>
            </div>
        </div>
    )
}
export default Footer;