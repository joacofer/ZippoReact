import { useContext, useState } from "react"
import Contador from "../Contador/Contador"
import "./DetalleItem.css"
import DetalleCompra from "../DetalleCompra/DetalleCompra";
import { CarritoContext } from "../../context/CarritoContext";

function DetalleItem({itemProd}) {

  const [IsCant, ModCantidad] = useState (false)
  const {addToCart} = useContext(CarritoContext)
  const onAdd = (cantidad) => {
    addToCart({...itemProd , cantidad})
    ModCantidad (true);
  };

  return (
    <div className="detalle">
        <h1>{itemProd.nombre}</h1>
        <img src={itemProd.img}  alt="imagen-card" />
        <h3>USD:{itemProd.precio}</h3>
        {
          !IsCant ? 

          <Contador onAdd={onAdd}/>

        :
          <DetalleCompra/>

        }
        <p>DESCRIPCION:{itemProd.descripcion}</p>



    </div>
  )
}

export default DetalleItem