import React from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {

    const { id } = useParams()

    const productos = [
        { id: 1, titulo: "Producto A", descripcion: "descripcion de producto A", precio: 1000, categoria: "A" },
        { id: 2, titulo: "Producto B", descripcion: "descripcion de producto A", precio: 2000, categoria: "A" },
        { id: 3, titulo: "Producto C", descripcion: "descripcion de producto A", precio: 1500, categoria: "B" },
        { id: 4, titulo: "Producto D", descripcion: "descripcion de producto A", precio: 3000, categoria: "B" },
        { id: 5, titulo: "Producto E", descripcion: "descripcion de producto A", precio: 2500, categoria: "C" },
        { id: 6, titulo: "Producto F", descripcion: "descripcion de producto A", precio: 1000, categoria: "C" },
    ]

    const mostrarProductos = new Promise((resolve, reject) => {

        if (productos.length > 0) {
            setTimeout(() => {
                resolve(productos)
            }, 3000)
        } else {
            reject("No se encontraron productos")
        }
    })

    mostrarProductos
        .then((resultado) => {
            console.log(resultado)
        })
        .catch((error) => {
            console.log(error)
        })

    const productoFiltrado = productos.find((producto) => producto.id == id)

    return (
        <div>

            <ItemDetail
                producto={productoFiltrado}
            />

        </div>
    )
}

export default ItemDetailContainer