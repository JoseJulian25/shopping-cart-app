import React, { useState, useRef } from "react";
import { Button } from "primereact/button";
import { Toast } from "primereact/toast";
import { useAuth } from "../../context/AuthContext";
import { useCart } from "../../context/ShoppingCartContext";
import ShoppingCartService from "../../services/ShoppingCartService";

const RemoveFromCartButton = ({ product, showMessage, label }) => {
    const { currentUser } = useAuth();
    const { refreshCart } = useCart();
    const [loading, setLoading] = useState(false);

    const deleteProduct = async () => {
        try {
            setLoading(true);
            await ShoppingCartService.removeItem(currentUser.id, product.id);
            refreshCart();
            showMessage("success", "Producto eliminado del carrito", "El producto se ha eliminado correctamente de tu carrito.");   
        } catch (err) {
            console.error(err);
            showMessage("error", "Error al eliminar el producto", "Hubo un problema al eliminar el producto del carrito.");

        } finally {
            setLoading(false);
        }
    };

    return (
            <Button
                label={  label || 'Eliminar del carrito' }
                icon="pi pi-trash"
                loading={loading}
                onClick={deleteProduct}
                className="p-button-danger"
                text
                raised
            />
    );
};

export default RemoveFromCartButton;
