import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom"
import { getFirestore, getDocs, collection, query, where } from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner'
import ItemList from "../ItemList/ItemList"


function ItemListContainer() {

    const [items, setItems] = useState([])
    const [loading, setLoading] = useState(true)
    const { categoria } = useParams()

    useEffect(() => {
        if (categoria) {
            const db = getFirestore()
            const queryItemList = collection(db, "productos")
            const queryItemListFilter = query(queryItemList, where("categoria", "==", categoria))
            getDocs(queryItemListFilter)
                .then(res => setItems(res.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        } else {
            const db = getFirestore()
            const queryItemList = collection(db, "productos")
            getDocs(queryItemList)
                .then(res => setItems(res.docs.map(item => ({ id: item.id, ...item.data() }))))
                .catch(err => console.log(err))
                .finally(() => setLoading(false))
        }

    }, [categoria])


    return (loading ?
        <Spinner animation="border" role="status">
            <span className="visually-hidden">Cargando...</span>
        </Spinner> :
        <ItemList items={items}></ItemList>
    )
}

export default ItemListContainer