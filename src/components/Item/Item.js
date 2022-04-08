import React from 'react'
import './style.css'
import { Link } from 'react-router-dom'

const Item = ({product}) => {
    const {title, subtitle, price, image, id} = product
    return (
        <>
        <Link to={`../item/${id}`}>
            <div class="cards-container">
                <img src={image} class="img-card" alt="cardimage" />
                <div class="card-body">
                    <h2 id="body-title">{title}</h2>
                    <p id="body-subtitle">{subtitle}</p>
                    <div class="price-info">
                        <div class="price-info2">
                            <p class="price-ar">AR$</p>
                            <h2 id="price-title">{price}</h2>
                        </div>
                        <p id="price-subtitle">ENTREGA INMEDIATA</p>
                    </div>
                    <div class="card-btn">
                        <a class="buy-btn2">Detalles</a>
                    </div>
                </div>
            </div>
        </Link>
        </>
    )
}

export default Item