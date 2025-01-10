import React from 'react';
import { DataView } from 'primereact/dataview';
import ShoppingCartItem from './ShoppingCartItem';
import { useCart } from '../../context/ShoppingCartContext'; 
import ShoppingCartService from '../../services/ShoppingCartService';
import { useEffect } from 'react';
import { useState } from 'react';

export const ShoppingCartItems = () => {
    const { cart, setCart } = useCart();
    const [items, setItems] = useState([]);

    useEffect(() => {
        if(!cart) {
            return;
        }

        setItems(cart.items); 
    }, [cart]);

    const updateQuantity = async (cartItemId, quantity) => {
        await ShoppingCartService.updateItemQuantity(cartItemId, quantity);

        setCart((prevCart) => {
            const updatedItems = prevCart.items.map((item) =>
                item.id === cartItemId
                    ? { ...item, quantity } 
                    : item 
            );

            return { ...prevCart, items: updatedItems }; 
        });
        
    }

    const itemTemplate = (item) => {
        return (
            <ShoppingCartItem
                key={item.id}
                item={item}
                updateQuantity={updateQuantity}
            />
        );
    };

    return (
        <div className="shopping-cart-items surface-100 border-round shadow-3 p-4">
    <div className="flex justify-content-between align-items-center mb-4">
        <span className="text-lg font-semibold">Total:</span>
        <span className="text-2xl font-bold text-success">
            ${items.reduce((total, item) => total + item.product.price * item.quantity, 0).toFixed(2)}
        </span>
    </div>
    <DataView value={items} itemTemplate={itemTemplate} layout="list" />
</div>
    );
};
