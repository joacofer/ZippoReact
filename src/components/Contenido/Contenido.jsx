import Saludo from "../Saludo/Saludo"
import SpinnerLoading from "../SpinnerLoading/SpinnerLoading"
import "./Contenido.css"
import { useEffect, useState } from "react"
import ItemList from "../ItemList/ItemList"
import { useParams } from "react-router-dom"
import { collection, getDocs, getFirestore, query, where } from "firebase/firestore"


const Contenido = (props) => {
  const [productos, setProductos] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const { cid } = useParams()



  useEffect(()=>{
    if (!cid) {

    const dbFirestore = getFirestore()
    const queryCollection = collection(dbFirestore, 'zippos')

    getDocs(queryCollection)
        .then(res => setProductos( res.docs.map(productos =>({ id: productos.id, ...productos.data() }) ) ))
        .catch( error => console.log(error))
        .finally(()=> setIsLoading(false))

    } else {

      const dbFirestore = getFirestore()
      const queryCollection = collection(dbFirestore, 'zippos')

      const queryCollectionFiltered = query(queryCollection, where('categoria', '==' , cid))

      getDocs(queryCollectionFiltered)
          .then(res => setProductos( res.docs.map(productos =>({ id: productos.id, ...productos.data() }) ) ))
          .catch( error => console.log(error))
          .finally(()=> setIsLoading(false))

    }
  }, [cid])

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

