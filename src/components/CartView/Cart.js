import React from 'react'
// import { Link, useHistory } from 'react-router-dom'
// import {useProducts} from '../context/useProducts'
// import ItemCount from '../ItemCount/ItemCount'
// import { addDoc } from 'firebase/firestore'
// import { getCollection, getFirestoreDb } from '../lib/firebaseConfig'
import rapipago from '../../assets/icons/rapipago.png'
import visa from '../../assets/icons/visa.png'
import paypal from '../../assets/icons/paypal.png'
import pagofacil from '../../assets/icons/pagofacil.png'
import mercadopago from '../../assets/icons/mercadopago.png'
import mastercard from '../../assets/icons/mastercard.png'
import email from '../../assets/icons/email.png'
import exclamacion from '../../assets/icons/exclamacion.png'
import './style.css'

function Cart() {
    // const {products, getSubtotal, addOne, removeOne, removeProduct, clearProducts} = useProducts()
    // const history = useHistory()
    // const [showFormBuyer, setShowFormBuyer] = useState(false)


    // const handleCountClick = (e, productId) => {
    //     if(e.target.id === 'plus'){
    //         addOne(productId)
    //     }else if(e.target.id === 'minus' && products.find(ele => ele.product.id === productId).count > 1){
    //         removeOne(productId)
    //     }
    // }

    // const buyProduct = async (buyer) => {
    //     try {
    //         const db = getFirestoreDb()
    //         const collection = getCollection(db, 'orders')
    //         await addDoc(collection, {
    //             buyer,
    //             items: products?.map(product => product),
    //             total: Number.parseInt(getSubtotal().replace(',',''))
    //         })
    //         clearProducts()
    //     } catch (error) {
    //         console.log(error)
    //     }
    // } 

    return (
        <>
        <div className="cart-title">
            <h1>CARRITO</h1>
        </div>
        <section className="product-group">
            <div className="product-body">
                <div className="games-txt">
                    <h2 className="games-txt2">JUEGOS</h2>
                </div>
                <div id="cards-cart">
                    
                </div>
                <div className="total-container">
                    <img src={exclamacion} className="total-img" alt="Advertencia Compra" />
                    <p className="total-terms">Al comprar en DSC - Games acepta su <span className="terms-txt">Terminos y Condiciones</span></p>
                    <p className="total-total">Total: <span className="total-value">$</span> </p>
                </div>
            </div>
                <div className="payment-group">
                    <div className="payment-body">
                        <img src={email} alt="Email" className="email-icon" />
                        <input type="email" name="email" className="confirmation-email" placeholder="Email de confirmacion" />
                        <div className="payment-checkoff">
                            <input type="checkbox" name="checkbox" />
                            <label for="checkbox" className="checkoff">Enviarme ofertas de DSC - Games</label>
                        </div>
                        <button className="checkout-btn">Comprar</button>
                        <div className="checkout-container">
                            <div className="subtotal">
                                <div className="checkout-sub">
                                    <p className="sub">Subtotal:</p>
                                    <p className="sub-2">$</p>
                                    <p className="sub-3">0</p>
                                    <p className="sub-4">ARS</p>
                                </div>
                            </div>
                            <div className="total">
                                <p className="ptotal">Precio Total:</p>
                                <p className="ptotal-2">$</p>
                                <p className="ptotal-3">0</p>
                                <p className="ptotal-4">ARS</p>
                            </div>
                        </div>
                        <div className="payment-methods">
                            <img src={mastercard} alt="Mastercard" className="mastercard" />
                            <img src={mercadopago} alt="MercadoPago" className="mercadopago" />
                            <img src={paypal} alt="PayPal" className="paypal" />
                            <img src={visa} alt="Visa" className="visa" />
                            <img src={pagofacil} alt="PagoFacil" className="pagofacil" />
                            <img src={rapipago} alt="RapiPago" className="rapipago" />

                        </div> 
                        <div className="payment-terms">
                            <p className="p-terms">Al hacer click en "Comprar" reconozco que he leído y acepto los Terminos y Condiciones</p>
                        </div>
                    </div>
                </div>
        </section>
        </>
    )
}

export default Cart
