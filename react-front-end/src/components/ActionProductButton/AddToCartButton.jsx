import React, { useState, useRef, useEffect } from "react";
import { Button } from "primereact/button";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/ShoppingCartContext";
import ShoppingCartService from "../../services/ShoppingCartService";
import AuthDialog from "../AuthDialog/AuthDialog";

const AddToCartButton = ({ product, showMessage }) => {
    const { currentUser } = useAuth();
    const { refreshCart } = useCart();
    const [loading, setLoading] = useState(false);
    const [authDialogVisible, setAuthDialogVisible] = useState(false);

    const addProduct = async () => {
        if (!currentUser) {
            setAuthDialogVisible(true);
            return;
        }

        try {
            setLoading(true);
            await ShoppingCartService.addItem(currentUser.id, product.id, 1);
            refreshCart();
            showMessage("success", "Producto añadido al carrito", "El producto ha sido agregado correctamente a tu carrito.");
        } catch (err) {
            console.error(err);
            showMessage("error", "Error al agregar producto", "No se pudo añadir el producto. Inténtelo de nuevo más tarde.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <>
            <Button
                label={currentUser ? "Añadir al carrito": ''}
                icon="pi pi-shopping-cart"
                loading={loading}
                onClick={addProduct}
                className="p-button-primary"
                text
                raised
            />
            <AuthDialog visible={authDialogVisible} onHide={() => setAuthDialogVisible(false)} />
        </>
    );
};

export default AddToCartButton;
