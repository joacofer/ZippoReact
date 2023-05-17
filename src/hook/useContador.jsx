import React, { useState } from 'react'

const useContador = (inicial=0, min , max) => {
    const [contador, setContador] = useState(inicial);

    let suma = () => {
        if (contador < max) {
            setContador( contador + 1)
        }    
    }

    let resta = () => {
        if (contador > min) {
            setContador ( contador - 1)
        }
    }
  return {contador, suma, resta}
}

export default useContador