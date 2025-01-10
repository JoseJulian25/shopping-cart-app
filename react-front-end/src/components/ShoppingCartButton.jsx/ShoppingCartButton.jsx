import React from "react";
import {useCart} from '../../context/ShoppingCartContext'
import { useState } from "react";
import { useEffect } from "react";
import { Badge } from 'primereact/badge';
import { Button } from 'primereact/button';
import { useNavigate } from "react-router-dom";
import AuthDialog from "../AuthDialog/AuthDialog";
import { useAuth } from "../../context/AuthContext";

const ShoppingCartButton = () =>  {
    const {currentUser} = useAuth();
    const { cart } = useCart();
    const [totalItems, setTotalItems] = useState(0);
    const navigate = useNavigate();
    const [authDialogVisible, setAuthDialogVisible] = useState(false);

    useEffect(() => {
        if (!cart) {
            setTotalItems(0); 
            return;
        }

        const calculateTotalItems = () => {
            return cart.items?.reduce((total, cartItem) => {
                return total + (cartItem.quantity || 0);
            }, 0);
        };
        

        setTotalItems(calculateTotalItems());
    }, [cart]); 

    const handleClick = () => {
        
       if (!currentUser) {
            setAuthDialogVisible(true)
            return;
       }
        navigate("/shopping-cart"); 
    };

    return (
        <>
        <Button 
            className=" p-button-text"
            onClick={handleClick}
        >
                <i className="pi pi-shopping-bag p-overlay-badge" style={{ fontSize: '2rem' }}>
                {cart && <Badge value={totalItems} severity="info" />}
                
            </i>
           
        </Button>
        <AuthDialog visible={authDialogVisible} onHide={() => setAuthDialogVisible(false)} />
        </>
        
        
    );
}

export default ShoppingCartButton;