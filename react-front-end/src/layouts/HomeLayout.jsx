import React from "react";
import NavBar from "../components/NavBar/navBar";
import './homeLayout.css';
import { ShoppingCartProvider, useCart } from "../context/ShoppingCartContext";
import Footer from "../components/footer/Footer";
import { Outlet } from "react-router-dom";
import { LoadingProvider } from "../context/LoadingContext";

const HomeLayout = () => {

    return (
        <>
        <ShoppingCartProvider>
            <LoadingProvider>
                <NavBar/>
                    <main className="container-home">
                            <Outlet />
                    </main>
                <Footer/>
            </LoadingProvider>
            </ShoppingCartProvider>  
        </>
    )
}

export default HomeLayout;