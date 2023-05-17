import { Link } from "react-router-dom"
import "./DetalleCompra.css"

const DetalleCompra = () => {
  return (

    <div className="detalleCompra">

    <Link to = "/carrito">
        <button>Ver Carrito</button>
    </Link>

    <Link to = "/">
        <button>Seguir Comprando</button>
    </Link>

    </div>
  )
}

export default DetalleCompra