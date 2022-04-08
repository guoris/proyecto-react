import { useContext } from 'react'
import { AppContext } from '../context/AppContext'


export function useProducts() {
    const { products, addProduct, removeProduct, clearProducts, getSubtotal } = useContext(AppContext)
    return { products, addProduct, removeProduct, clearProducts, getSubtotal }
}