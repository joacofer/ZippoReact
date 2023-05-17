import { useContext, useState } from 'react'



import { ValidarForm } from './ValidarForm'
import Formulario from './Formulario'
import { CarritoContext } from '../../context/CarritoContext'



const FormWithValidation = ValidarForm(Formulario)

const FormularioCentral = () => {

    const {cartList, total} = useContext(CarritoContext)

    const [formData, setFormData] = useState({
        name: '',
        tel:'',
        email: '',
        repeatEmail: ''

    })


    const handleChange = (evt) => {

        setFormData({
            ...formData,
            [evt.target.name]: evt.target.value
        })
    }

  return <FormWithValidation formData={formData} handleChange={handleChange} total={total} cartList={cartList} />
}

export default FormularioCentral