
import './Servicios.css';

const Card = props => {
    return(

           <> 

            <div className="card border-primary mb-3">
            
                <div className="card text-center">
                    <div className="overflow">
                        <img src={props.imgsrc} alt="" className="card-img-top"/>
                    </div>
                    <div className="card-body text dark bg-dark">
                        <h4 className="card title">
                            {props.title}
                        </h4>
                        <p className="card-text text-">
                            {props.text}
                        </p>
                    
                    
                        <a href="#" className="btn btn-outline-primary">
                            {props.button}
                        </a>
                    </div>
                </div>
            </div>  

   
        </>
    );
}


export default Card;


