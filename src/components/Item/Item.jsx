import React from 'react'
import"./Item.css"
import { Link } from 'react-router-dom'
const Item = (producto) => {
  return (
    <div className='col-lg-3 col-mb-6 col-sm-10'>
      <div key={producto.id}> 

        <Link to = {`/detalle/${producto.id}`}>
          <img src={producto.img}  alt="imagen-card" />
        </Link>
  
        <div className='card-body'>
          <h2>{producto.nombre}</h2>
          <div className='info'>
          </div>
        </div>
      </div>
    </div>
  ) 
}

export default Item