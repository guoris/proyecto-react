import React from "react";
import './style.css'
import minus from '../../assets/icons/minus.png'
import plus from '../../assets/icons/plus.png'

const ItemCount = ({count, onClickCount}) => {
    
    return (

        <div class="qty-count">
            <img src={minus} class="selec-btn" alt="minus" onClick={(e) => onClickCount(e)} id='minus' />
            <p class="num-count">{count}</p>
            <img src={plus} class="selec-btn" onClick={(e) => onClickCount(e)} alt="plus"id='plus' />
        </div>

    )};

export default ItemCount;