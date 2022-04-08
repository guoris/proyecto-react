import React, {useState} from 'react'
import './style.css'
import ItemCount from '../ItemCount/ItemCount'
import { useProducts } from '../context/useProducts'

function ItemDetail({product}) {
    const {image, title, subtitle, description, price} = product
    const {addProduct} = useProducts()
    const [count, setCount] = useState(1)



    const handleCountClick = (e) => {
        if(e.target.id === 'plus'){
            setCount(count+1)
        }else if(e.target.id === 'minus' && count > 1){
            setCount(count-1)
        }
    }

    return (
        <>
        <div class="itemcard-container">
            <div class="itemcard-detail">
                <div class="img-container">
                    <img class="item-img" src={image} alt={title} />
                </div>
                <div class="item-inf">
                    <p class="item-name">{title}</p>
                    <p class="item-subname">{subtitle}</p>
                    <p id="price-subtitle">ENTREGA INMEDIATA</p>
                    <p class="price">$AR {price}</p>
                    <div class="qty-container">
                        <ItemCount count={count} onClickCount={handleCountClick} />
                        <button class="buy-btn"
                        onClick={(e) => {
                            e.preventDefault()
                            addProduct({product, count})
                        }}>Agregar al Carrito</button>
                    </div>
                </div>
            </div>
        </div>
        <div class="desc-container">
            <div class="desc-container__txt">
                <p class="desc-w">Descripcion</p>
                <p class="desc-item">{description}</p>
            </div>
        </div>
        </>
    )
}

export default ItemDetail