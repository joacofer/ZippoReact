import useContador from "../../hook/useContador"
import "./Contador.css"

const Contador = ({inicial=1, stock= 10, onAdd }) => {
    const {contador, resta, suma} = useContador (inicial, 1, stock);

  return (
    <div>
      <div className="contador">
        <button onClick={resta}>-</button>
        <h5>{contador}</h5>
        <button onClick={suma}>+</button>
      </div>
        <button className="botonCarrito" onClick={() => {onAdd(contador)}}>🛒</button>
    </div>
  )
}

export default Contador