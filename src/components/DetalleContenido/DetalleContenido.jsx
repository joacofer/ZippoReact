import { useParams } from 'react-router-dom';
import './DetalleContenido.css';
import DetalleItem from '../DetalleItem/DetalleItem';
import { useEffect, useState } from 'react';
import {doc, getDoc, getFirestore} from 'firebase/firestore'




const DetalleContenido = () => {
    const [productos, setProductos] = useState([])
    const {pid} = useParams()




    useEffect(() => {
      const dbFirestore = getFirestore()
      const queryDoc = doc(dbFirestore, 'zippos', pid)
  
      getDoc(queryDoc)
          .then(resp => setProductos({id: resp.id, ...resp.data()}))
          .catch( error => console.log(error))
        
    }, [])

  return (
    <DetalleItem itemProd={productos}/>
  )
}

export default DetalleContenido