import React from "react";
import { Link } from "react-router-dom";

import carrito from '../../assets/icons/carrito.png';

const cartWidget = () => {
    return (
        <>
        <Link to='/cart'><li class="nav-listheader__item"><a class="flex" href="pages/carrito.html"><img src={carrito} class="logo-carrito" alt="Carrito" /><p class="p-carrito">CARRITO</p></a></li></Link>
        </>
)};

export default cartWidget;
