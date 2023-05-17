import { useContext } from "react"
import "./CarritoIcono.css"
import { CarritoContext } from "../../context/CarritoContext"
import { Link } from "react-router-dom"

const CarritoIcono = () => {
  const {totalCant} = useContext(CarritoContext)
  return (
    <Link to={"/carrito"}>
    <div className="icono">
        <p>{totalCant()}</p>
        <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-pig" width="45" height="45" viewBox="0 0 24 24" strokeWidth="1.5" stroke="#9e9e9e" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
        <path d="M15 11v.01" />
        <path d="M16 3l0 3.803a6.019 6.019 0 0 1 2.658 3.197h1.341a1 1 0 0 1 1 1v2a1 1 0 0 1 -1 1h-1.342a6.008 6.008 0 0 1 -1.658 2.473v2.027a1.5 1.5 0 0 1 -3 0v-.583a6.04 6.04 0 0 1 -1 .083h-4a6.04 6.04 0 0 1 -1 -.083v.583a1.5 1.5 0 0 1 -3 0v-2l.001 -.027a6 6 0 0 1 3.999 -10.473h2.5l4.5 -3z" />
        </svg>
    </div>
    </Link>
  )
}

export default CarritoIcono