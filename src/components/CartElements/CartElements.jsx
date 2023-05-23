//donde estara los articulos del usuario q va a ir metiendo

import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

export const CartElements = () =>{
    const {cart} = useContext(dataContext);

    let productosTotalesCarrito = cart.map((prod) => {

                    <tr>
                        <th scope="row">{prod.id}</th>
                        <td>{prod.title}</td>
                        <td>{prod.precio}</td>
                    </tr>
    })

    return(
             /* modal del carrito */
            <div className="modal fade" id="carritoModal" tabIndex={-1} aria-labelledby="carritoModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="carritoModalLabel">Carrito de compras</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Cerrar" />
                        </div>
                        <div className="modal-body">
                         {/* Contenido del carrito */}
                            <table className="table table-striped table-dark">
                                <thead>
                                    <tr>
                                        <th scope="col">#</th>
                                        <th scope="col">Servicio</th>
                                        <th scope="col">Precio</th>
                                    </tr>
                                </thead>
                                <tbody>

                                    {productosTotalesCarrito}
                                </tbody>
                            </table>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Cerrar</button>
                            <button type="button" className="btn btn-primary">Realizar pedido</button>
                        </div>
                    </div>
                </div>
            </div>
    );

}