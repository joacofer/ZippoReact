import Saludo from "../Saludo/Saludo"
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading"
import "./Contenido.css"
import { useEffect, useState } from "react"
import { mFetch } from '../../utils/mFetch' 
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"




const Contenido = (props) => {
  const [productos, setProductos] = useState([])
  const[isLoading, setIsLoading] = useState(true)
  const { cid } = useParams()

  useEffect(()=>{

    if (!cid) {
      
      mFetch()
      .then(resultado=>{
        setProductos(resultado)
      })
      .catch(error=>console.log(error))
      .finally(()=>setIsLoading(false))
    } else {

      mFetch()
      .then(resultado=>{
        setProductos(resultado.filter(productos => productos.categoria === cid ))
      })
      .catch(error=>console.log(error))
      .finally(()=>setIsLoading(false))

    }
  },[cid]);

  return (
    <div className="contenido">
        <Saludo nombre = 'Mundo Zippo'/>
        <div className='container_card'>
          {isLoading ? <SpinnerLoading/> : <ItemList productos = {productos}/>}
        </div>
    </div>
  )
}

export default Contenido

