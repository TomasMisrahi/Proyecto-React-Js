import React, { useState } from 'react'
import { Input, Button, Text } from '@chakra-ui/react'
import Swal from 'sweetalert2'
import { collection, addDoc, getFirestore } from 'firebase/firestore'

const Form = () => {

    const [nombre, setNombre] = useState("")
    const [email, setEmail] = useState("")
    const [orderId, setOrderId] = useState("")

    const db = getFirestore()

    const handleSubmit = (e) => {
        e.preventDefault()
        Swal.fire(`Muchas gracias ${nombre}, nos contactaremos a ${email} para finalizar el proceso de compra`);
        addDoc(ordersCollection, order).then(({ id }) =>
            setOrderId(id))
    }
    const order = {
        cliente: { nombre, email },
        // items: cart,
    }

    const ordersCollection = collection(db, "orden")


    return (
        <div>
            <form action="" onSubmit={handleSubmit} className='formulario'>
                <Input placeholder='Nombre y apellido' type='text' onChange={(e) => setNombre(e.target.value)} value={nombre} />
                <Input placeholder='Correo electrónico' type='email' onChange={(e) => setEmail(e.target.value)} value={email} />
                <Button type="submit" bg='#3D5FC8' width='150px'>Enviar</Button>
            </form>
            <Text>
                {`El id de su compra es: ${orderId}`}
            </Text>
        </div>
    )
}

export default Form 