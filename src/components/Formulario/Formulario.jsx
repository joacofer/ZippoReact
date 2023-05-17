import { addDoc, collection, getFirestore } from 'firebase/firestore';
import"./Formulario.css";
import { useContext, useState } from 'react';
import { CarritoContext } from '../../context/CarritoContext';
import { Link } from 'react-router-dom';

const Formulario = ({formData, handleChange, errors, validateForm, cartList, total}) => {
    const [ordenExitosa, setOrderExitosa] = useState(false)
    const {eraseCart} = useContext(CarritoContext)
    const [orderId , setOrderId] = useState('')
    const handleSubmit = async (evt) => {
        evt.preventDefault()
        if (validateForm()) {
            console.log('enviando', formData)
            const order = {}
            order.buyer = formData
            order.items = cartList.map(({nombre, id, precio, cantidad}) => ({id, nombre, precio, cantidad}))
            order.total = total()

            const dbFirestore = getFirestore()
            const ordersCollection = collection(dbFirestore, 'orders')

            const docRef = await addDoc(ordersCollection, order)
            
            setOrderId(docRef.id)

            setOrderExitosa(true)
        }


    }

    const OrdenCompleta = () => {
        setOrderExitosa(false)
        eraseCart()
    }

    



  return (
    
        ordenExitosa  ? 
        <>
            <h2>Compra Realiza</h2>
            <h3>La orden fue guardado con el id : {orderId} </h3>
            <Link to={"/"}>
                <button onClick={OrdenCompleta}>inicio</button>
            </Link>
         </>
        :


        <section>
        <form className='formu' onSubmit={handleSubmit}>
            <input 
                type="text" 
                name='name' 
                placeholder='Ingrese el Nombre'
                onChange={handleChange}
                value={formData.name}
            /> <br />
            {errors && errors.name && <span>{errors.name}</span>}
            <br />
    
    
            <input 
                type="text" 
                name='tel' 
                placeholder='Ingrese el Telefono'
                onChange={handleChange}
                value={formData.tel}
            /> <br />
            {errors && errors.tel && <span>{errors.tel}</span>}
            <br />
    
    
            <input 
                type="text" 
                name='email' 
                placeholder='Ingrese el E-mail'
                onChange={handleChange}
                value={formData.email}
            /> <br />
            {errors && errors.email && <span>{errors.email}</span>}
            <br />
            <input 
                        type="text" 
                        name='repeatEmail' 
                        placeholder='Ingrese su mail nuevamente'
                        onChange={handleChange}
                        value={formData.repeatEmail}
                    /> 
                        <p className='errorText'>
                            {errors && errors.repeatEmail && <span>{errors.repeatEmail}</span>}
                        
                        </p>
    
    
            <button type='submit' className='buy btn btn-danger'>BUY</button>
        </form>
    </section>

    
  )
}

export default Formulario