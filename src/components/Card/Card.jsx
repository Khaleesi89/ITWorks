/* import './Servicios.css'; */
import '../Cards/Servicios.css'; 


const Card = props => {
    return(

           <> 
                <div className="card col-md-3 border-primary mb-3 text-center">
                    <div className="overflow">
                        <img src={props.img} alt={props.title + ' - Imagen'} className="card-img-top"/>
                    </div>
                    <div className="card-body text dark bg-dark">
                        <h4 className="card-title">
                            {props.title}
                        </h4>
                        <p className="card-text">
                            {props.text}
                        </p>
                        <a href="#" className="btn btn-outline-primary">
                            Saber más
                        </a>
                    </div>
                </div>
            </>
    );
}


export default Card;


