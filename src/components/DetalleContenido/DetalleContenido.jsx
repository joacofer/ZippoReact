import { useParams } from 'react-router-dom';
import './DetalleContenido.css';
import DetalleItem from '../DetalleItem/DetalleItem';
import { useEffect, useState } from 'react';
import { mFetch } from '../../utils/mFetch';


const DetalleContenido = () => {
    const [productos, setProductos] = useState([])
    const {pid} = useParams()
    useEffect(()=> {

        mFetch(pid)
        .then(resultado=>{
          setProductos(resultado)
        })
        .catch(error=>console.log(error))
        .finally(()=>setIsLoading(false))

    } ,[]); 

  return (
    <DetalleItem itemProd={productos}/>
  )
}

export default DetalleContenido