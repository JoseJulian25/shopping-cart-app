import React from "react";
import { ShoppingCartHeader } from "../components/ShoppingCartHeader/ShoppingCartHeader";
import { ShoppingCartItems } from "../components/ShoppingCartItems/ShoppingCartItems";
import './ShoppingCartPage.css'

const ShoppingCartPage = () => {
    return (
        <div className="shopping-cart-page">
            <ShoppingCartHeader />
            <ShoppingCartItems />
        </div>
    )
};

export default ShoppingCartPage;