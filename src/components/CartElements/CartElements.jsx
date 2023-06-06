import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';
import { CartItemCounter } from '../CartItemCounter/CartItemCounter';

export const CartElements = () => {
  const { cart, setCart } = useContext(dataContext);

  const eliminarItem = (prod) => {
    const nuevoCarrito = cart.filter((item) => item.id !== prod.id);
    setCart(nuevoCarrito);
  };

  const actualizarCantidad = (prodId, nuevaCantidad) => {
    const nuevoCarrito = cart.map((prod) => {
      if (prod.id === prodId) {
        return { ...prod, cantidad: nuevaCantidad };
      }
      return prod;
    });
    setCart(nuevoCarrito);
  };

  return cart.map((prod) => (
    <div className="producto" key={prod.id}>
      <div className='productotitulo'> 
        <p>{prod.title}</p>
      </div>
      <div className='productoprecio'>
        <p>${prod.precio}</p> 
      </div>
      <div className='contador'>
        <CartItemCounter
          id={prod.id}
          cantidad={prod.cantidad}
          actualizarCantidad={actualizarCantidad}
        />
      </div>
      <div onClick={() => eliminarItem(prod)} id={prod.id} className='vaciarCarrito'>
        <i className="bi bi-trash3-fill"></i>
      </div>
    </div>
  ));
};
