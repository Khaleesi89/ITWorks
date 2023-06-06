import { useContext } from 'react';
import { dataContext } from '../Context/DataContext';

export const CartItemCounter = ({ id, cantidad, actualizarCantidad }) => {
  const { cart } = useContext(dataContext);

  const aumentar = () => {
    const nuevaCantidad = cantidad + 1;
    actualizarCantidad(id, nuevaCantidad);
  };

  const disminuir = () => {
    if (cantidad > 1) {
      const nuevaCantidad = cantidad - 1;
      actualizarCantidad(id, nuevaCantidad);
    }
  };

  return (
    <>
      <button className="btn restar" onClick={disminuir}>-</button>
      <p>{cantidad}</p>
      <button className="btn sumar" onClick={aumentar}>+</button>
    </>
  );
};
