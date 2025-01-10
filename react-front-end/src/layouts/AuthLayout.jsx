import React from "react";
import "./AuthLayout.css"
import { Outlet } from "react-router-dom";
import Footer from '../components/footer/Footer'

const AuthLayout = () => {
    return (
        <div className="auth-layout">
            <main className="auth-content ">
                <Outlet></Outlet>
            </main>
            <Footer/>
        </div>
    )
}

export default AuthLayout;