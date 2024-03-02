import { useContext, useState } from 'react';
import { Button } from '@chakra-ui/react'
import { CartContext } from '../../context/CartContext';

const ItemCount = ({ id, nombre, precio, imagen }) => {

    const [cart, setCart] = useContext(CartContext);
    const [contador, setContador] = useState(1);


    const sumar = () => {
        setContador(contador + 1)
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        }
        else {
            alert("No hay más productos para sacar del carrito")
        }
    }

    const addToCart = () => {
        alert(`Agregado al carrito ${contador} unidades`)
        setCart((cartAtm) => {
            const alrdyIn = cartAtm.find((item) => item.id === id);

            if (alrdyIn) {
                return cartAtm.map((item) => {
                    if (item.id === id) {
                        return { ...item, stock: item.stock + counter }
                    } else {
                        return item
                    }
                })
            } else {
                return [...cartAtm, { id, stock: counter, precio, nombre, imagen }]
            }
        })
    }

    return (
        <div>

            <Button colorScheme='teal' size='xs' onClick={restar}>
                -
            </Button>
            <Button onClick={() => addToCart()}>
                Agregar al carrito {contador}
            </Button>
            <Button colorScheme='teal' size='xs' onClick={sumar}>
                +
            </Button>

        </div>
    )
}

export default ItemCount


