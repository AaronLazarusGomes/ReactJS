import React from 'react'
import { useStateValue } from './StateProvider'
import "./Checkout.css"
import CheckoutProduct from "./CheckoutProduct"
import Subtotal from "./Subtotal"


function Checkout() {
    const [{ basket }, dispatch] = useStateValue()
    return (
        <div className="checkout">
            <div className = "checkout__left">
            <img className="checkout__ad" src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg" alt="" />
            {
                basket?.length === 0 ? (
                    <div>
                        <h2>Your basket is empty.</h2>
                        <p>You don't have anything in your basket. Please click on the "Add" option near the item!</p>
                    </div>
                ) : (
                    <div>
                        <h2 className="checkout__title">Your Shopping basket.</h2>
                        {/* the list of items */}
                        {
                            basket?.map((item) => (
                                <CheckoutProduct
                                    id = {item.id}
                                    title = {item.title}
                                    image = {item.image}
                                    price = {item.price}
                                    rating = {item.rating}
                                />
                            ))
                        }
                    </div>
                )
            }
            </div>
            {basket?.length > 0 && (
                <div className="checkout__right">
                    <h1>subtotal</h1>
                    <Subtotal />
                </div>
            )}
        </div>
    )
}

export default Checkout
