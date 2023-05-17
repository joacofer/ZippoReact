import { useState } from "react"


export const ValidarForm = (WrappedComponent) => {



    const FormWithValidation = (props) =>{
        const [errors, setErrors] = useState({})
        const validateForm = () => {
            let newErrors = {}

            let isValid = true

            if (!props.formData.name) {
                newErrors.name = 'El Campo Nombre es Obligatorio'
                isValid = false
            }

            if (!props.formData.tel) {
                newErrors.tel = 'El Campo Telefono es Obligatorio'
                isValid = false
            }

            if (!props.formData.email) {
                newErrors.email = 'El Campo E-mail es Obligatorio'
                isValid = false
            }
            if (props.formData.email !== props.formData.repeatEmail) {
                newErrors.repeatEmail = 'El mail no es el mismo'
                isValid = false
            }

            setErrors(newErrors)
            return isValid
        }





        return <WrappedComponent 
            {...props}
            errors = {errors}
            validateForm = {validateForm}
        />
    }
    return FormWithValidation
}