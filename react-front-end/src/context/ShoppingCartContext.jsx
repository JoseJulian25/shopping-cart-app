import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import { useAuth } from "./AuthContext";
import ShoppingCartService from "../services/ShoppingCartService";
import { useContext } from "react";

const cartContext = createContext();

export const ShoppingCartProvider = ({children}) => {
    const {currentUser} = useAuth();
    const [cart, setCart] = useState(null);
    const [loading, setLoading] = useState(false);

    const refreshCart = async () => { 
            if (currentUser) {
                setLoading(true);
                try {
                    const data = await ShoppingCartService.getCart(currentUser.id);
                    setCart(data);
                } catch (error) {
                    console.error("Error refreshing cart: ", error);
                } finally {
                    setLoading(false);
                }
            }
        };

    useEffect(() =>  {
        if (currentUser) {
            refreshCart();
        }
    }, [currentUser]);

    return (
        <cartContext.Provider value={{cart, setCart ,refreshCart, loading}}>
            {children}
        </cartContext.Provider>
    )
}

export const useCart = () => useContext(cartContext)