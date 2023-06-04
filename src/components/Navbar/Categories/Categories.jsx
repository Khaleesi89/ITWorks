import {Link} from 'react-router-dom'
export const Categories = () => {
    return(
        <>
            <ul className="navbar-nav me-auto">
                <li className="nav-item">
                    <Link to={('/')}>Home
                        <span className="visually-hidden">(current)</span></Link>
                    {/* <a to={('/') className="nav-link" href="#">Home
                        <span className="visually-hidden">(current)</span>
                    </a> */}
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Sobre Nosotros</a>
                </li>
                <li className="nav-item dropdown">
                    <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-haspopup="true" aria-expanded="false">Nuestros Servicios</a>
                    <div className="dropdown-menu">
                        <a className="dropdown-item" href="#">Desarrollo Web</a>
                        <a className="dropdown-item" href="#">Community Manager</a>
                        <a className="dropdown-item" href="#">Diseño UX/UI</a>
                        <a className="dropdown-item" href="#">Diseño Gráfico</a>
                    </div>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="#">Contacto</a>
                </li>
            </ul>
        </>
    )
}