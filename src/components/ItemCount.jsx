import { useState } from 'react'
import { AddIcon } from '@chakra-ui/icons'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const sumar = () => {

        if (contador === 0) {
            setContador(contador + 1)
        }

    }

    return (
        <div>

            <h2>Contador</h2>
            <h3>{contador}</h3>

      
            <button onClick={() => setContador(contador - 1)}>-</button>
            <button onClick={sumar}>+</button>

        </div>
    )
}


const iconoSumar = () => {
  return (
    <div>
        <AddIcon/>
    </div>
  )
}

export default iconoSumar


//export default ItemCount
