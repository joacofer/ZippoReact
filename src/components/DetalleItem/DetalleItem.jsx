import "./DetalleItem.css"

function DetalleItem({itemProd}) {
  return (
    <div className="detalle">
        <h1>{itemProd.nombre}</h1>
        <img src={itemProd.img}  alt="imagen-card" />
        <h3>USD:{itemProd.precio}</h3>
        <p>DESCRIPCION:{itemProd.descripcion}</p>

    </div>
  )
}

export default DetalleItem