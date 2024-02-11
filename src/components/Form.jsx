import React, { useState } from 'react'
import { Input, Button, Text } from '@chakra-ui/react'
import Swal from 'sweetalert2'

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [purchaseId, setPurchaseId] = useState("sdsdasd")

    const handleSubmit = (e) => {
        e.preventDefault()
        Swal.fire(`Muchas gracias ${nombre}, nos contactaremos a ${email} para finalizar el proceso de compra`);

        setEmail("")
        setNombre("")
    }

    return (
        <div>
            <form action="" onSubmit={handleSubmit} className='formulario'>
                <Input placeholder='Nombre y apellido' type='text' onChange={(e) => setNombre(e.target.value)} value={nombre} />
                <Input placeholder='Correo electrónico' type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <Button type="submit" bg='#3D5FC8' width='150px'>Enviar</Button>
            </form>
            <Text>
                {`El id de su compra es: ${purchaseId}`}
            </Text>
        </div>
    )
}

export default Form 