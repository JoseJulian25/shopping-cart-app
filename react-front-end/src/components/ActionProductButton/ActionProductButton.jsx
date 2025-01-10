import React, { useEffect, useState } from "react";
import AddToCartButton from "./AddToCartButton";
import RemoveFromCartButton from "./RemoveFromCardButton";
import { useCart } from "../../context/ShoppingCartContext";
import { useRef } from "react";
import { Toast } from "primereact/toast";
import { createPortal } from "react-dom";

const AddDeleteProductCart = ({ product }) => {
    const toast = useRef(null);
    const { cart } = useCart();
    const [isInCart, setIsInCart] = useState(false);

    useEffect(() => {
        setIsInCart(() => {
            return cart?.items?.some((cartItem) => cartItem.product.id === product.id);
        });
    }, [cart, product.id]);
    

    const showMessage = (severity, summary, detail) => {
        toast.current?.show({ severity, summary, detail, life: 2500 });
    };

    return (
        <div>
            {createPortal(
                <Toast ref={toast} />,
                document.body 
            )}
            {isInCart ? (
                <RemoveFromCartButton product={product} showMessage={showMessage}/>
            ) : (
                <AddToCartButton product={product} showMessage={showMessage}/>
            )}
        </div>
    );
};

export default AddDeleteProductCart;
