import { useState } from 'react'
import { Button } from '@chakra-ui/react'
//import { AddIcon } from '@chakra-ui/icons'

const ItemCount = () => {

    const [contador, setContador] = useState(0)

    const mostrarMensaje = () => {
        alert (`Agregador al carrito ${contador} uniadaes`)
    }

    const sumar = () => {
        if (contador < 10) {
            setContador(contador + 1)
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
    }

    return (
        <div>

            <Button colorScheme='teal' size='xs' onClick={sumar}>
                +
            </Button>
            <Button onClick={mostrarMensaje}>
                Agragar al carrito {contador}
            </Button>
            <Button colorScheme='teal' size='xs' onClick={restar}>
                +
            </Button>

        </div>
    )
}


//const iconoSumar = () => {
//    return (
//        <div>
//            <AddIcon />
//        </div>
//    )
//}

//export default iconoSumar

export default ItemCount
