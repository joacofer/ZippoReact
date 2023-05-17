import { useContext } from 'react';
import"./ContenedorCarrito.css"

import { Link } from 'react-router-dom';
import { CarritoContext } from '../../context/CarritoContext';
import FormularioCentral from '../Formulario/FormularioCentral';

const ContenedorCarrito = () => {

  const {cartList, eraseCart, removeItem, total, menosCant, masCant} = useContext(CarritoContext)

  return (
    <div className="ContenedorCarrito">
      {

        cartList.length != 0 ?
          <>
            <div className='ItemsContenedor'>
              { cartList.map(prod => (

                    <div key={prod.id} className='Item'>
                      <img src={prod.img} alt="" />
                      <h2>{prod.nombre}</h2>
                      <div className='cantiBoton'>
                        <button onClick={() => menosCant(prod.id)}>-</button>
                        <p>{prod.cantidad}</p>
                        <button onClick={() => masCant(prod.id)}>+</button>
                      </div>
                      <p className='precio'>U$D {prod.precio * prod.cantidad}</p>

                      <button  onClick={() => {removeItem(prod.id)}} className='btn btn-danger'>X</button>

                    </div>

              ))}

            </div>

                <div className='botCont'>

                      <div className='totalCont'>
                        <h4 className='totalCompra'>TOTAL: U$D {total()}</h4>
                        <button onClick={eraseCart} className='clear btn btn-danger'>CLEAR</button>

                      </div>

                      <FormularioCentral/>

                </div>
          </>



              :
              <div className='vacioCont'>

                  <h1 className='vacioTittle'>EMPTY CART</h1>
                  <Link to = '/'>
                      <button className='vacioButt'>KEEP BUYING!</button>
                  </Link>
              </div>

      }
    </div>
  )
}

export default ContenedorCarrito