import ItemList from './ItemList'
import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { collection, getDocs, getFirestore } from 'firebase/firestore'

const ItemListContainer = () => {

    const [items, setItems] = useState([]);
    const { categoriaId } = useParams()

    useEffect(() => {
        const fetchData = async () => {
            const db = getFirestore();

            const itemsCollection = collection(db, "zapatillas")
            try {
                const snapshot = await getDocs(itemsCollection);
                const docs = snapshot.docs.map((doc) => ({
                    ...doc.data(),
                    id: doc.id,
                }))
                setItems(docs)
            } catch (error) {
                console.log("Error obteniendo información:", error)
            }
        }
        fetchData()
    }, [])

    const filter = items.filter((item) => item.categoria === categoriaId);
        return (
            <div>
                {categoriaId ? <ItemList items={filter} /> : <ItemList items={items} />}
            </div>
        )
    }


export default ItemListContainer;

