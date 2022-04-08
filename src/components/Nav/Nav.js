import React from "react";
import './style.css'
import CartWidget from '../CartWidget/CartWidget';
// import carrito from '../assets/icons/carrito.png';
import persona from '../../assets/icons/persona.png';
import logo from '../../assets/img/logo.png';
import lupa from '../../assets/icons/lupa.png';

import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <header>
            <div class="nav-listcontainer">
                <Link to='/'><a href="../index.html"><img src={logo} class="logo logo-pos" alt="Logo e-commerce" /></a></Link>
                <div class="search-container">
                    <input type="search" name="search" class="form-control" placeholder="Search" />
                    <img src={lupa} class="lupa" alt="lupa" />
                </div>
                <div>
                    <ul class="nav-listheader">
                        <li class="nav-listheader__item disabled"><a href="pages/user/login.html"><img src={persona} class="logo-login" alt="Usuario" /><p class="p-user">USER</p></a></li>
                        <div id="cart-pos">
                        <CartWidget />
                        </div>
                    </ul>
                </div>
            </div>
            <nav class="index-nav">
                <ul class="nav-list nav-pos" id="centrar">
                    <li class="nav-list__item"><Link to='/'>Inicio</Link></li>
                    <li class="nav-list__item"><Link to='/Products'>Productos</Link></li>
                    <li class="nav-list__item disabled"><a>Proximamente</a></li>
                </ul>
            </nav>
        </header>
    )};

export default Nav;