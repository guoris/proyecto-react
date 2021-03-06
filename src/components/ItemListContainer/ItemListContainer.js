import React, { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { collection, query, getDocs, where } from "firebase/firestore";
import {getFirestoreDb} from '../lib/firebaseConfig'
import {useParams, useHistory} from 'react-router-dom'
import Loading from '../Loading/loading'
import './style.css'

const ItemListContainer = () => {
    const db = getFirestoreDb()
    const history = useHistory()
    const [products, setProducts] = useState([])
    const {categoryId} = useParams()

    useEffect(() => {
        const getProductsFirestore = async () => {
            const queryCollection = categoryId ? query(collection(db, 'products'), where('category', '==', `${categoryId}`)) : query(collection(db, 'products'))
            const querySnapshot = await getDocs(queryCollection)
            const aux = []
            querySnapshot.forEach(doc => {
                aux.push(doc.data())
            })
            aux.length < 1 && history.push('/404')
            return aux
        }
        getProductsFirestore().then(productsDb => {
            // categoryId ? setProducts(productsDb.filter(product => productsDb.category === categoryId)) : 
            setProducts(productsDb)
        })
    }, [categoryId, db]);

    return (
        <>
        <div className="prod-txt">
            <p className="txt-games">JUEGOS</p>
        </div>
        <div className='container'>
            {products.length > 0 ? <ItemList products={products}/> : <Loading /> }
        </div>
        </>
    )
}

export default ItemListContainer