import React from 'react'
import { useEffect, useState } from 'react'
import { doc, getDoc, getFirestore } from 'firebase/firestore'

const CartWidget = () => {

    const [product, setProduct] = useState([])

    useEffect(() => {
        const db = getFirestore()

        const oneItem = doc(db, "carrito", "rmYwuVVOPN3WIicDY9t1")
        getDoc(oneItem).then((snapshot) => {
            if (snapshot.exists()) {
                const doc = snapshot.data()
                setProduct(doc)
            }
        })
    }, [])

    return (
        <div>
            <img src={product.imagen} alt="" />
        </div>
    )
}

export default CartWidget