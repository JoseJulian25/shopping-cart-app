import { createBrowserRouter, Navigate } from "react-router-dom";
import React, { Suspense } from 'react';
import ProtectedRoute from "./ProtectedRoute.jsx";
import Loading from "../components/Loading/Loading.jsx";

const AuthLayout = React.lazy(() => import('../layouts/AuthLayout'));
const RegisterForm = React.lazy(() => import('../components/Register/RegisterForm'));
const LoginForm = React.lazy(() => import('../pages/LoginForm'));
const RestrictRoute = React.lazy(() => import('./RestrictRoute'));
const HomeLayout = React.lazy(() => import('../layouts/HomeLayout'));
const ShoppingCartPage = React.lazy(() => import('../pages/ShoppingCartPage'));
const CategorySection = React.lazy(() => import('../components/CategorySection/CategorySection'));

const router = createBrowserRouter([
    {
        path: "/auth",
        element: (
            <Suspense fallback={<Loading />}>
                <AuthLayout />
            </Suspense>
        ),
        children: [
            {
                path: "register",
                element: (
                    <Suspense fallback={<Loading />}>
                        <RestrictRoute>
                            <RegisterForm />
                        </RestrictRoute>
                    </Suspense>
                )
            },
            {
                path: "login",
                element: (
                    <Suspense fallback={<Loading />}>
                        <RestrictRoute>
                            <LoginForm />
                        </RestrictRoute>
                    </Suspense>
                )
            }
        ]
    },
    {
        path: "/home",
        element: (
            <Suspense fallback={<Loading />}>
                <HomeLayout />
            </Suspense>
        ),
        children: [
            {
                path: "",
                element: (
                    <Suspense fallback={<Loading />}>
                        <CategorySection />
                    </Suspense>
                )
            },
            {
                path: "shopping-cart",
                element: (
                    <Suspense fallback={<Loading />}>
                        <ProtectedRoute>
                            <ShoppingCartPage />
                        </ProtectedRoute>
                    </Suspense>
                )
            }
        ]
    },
    {
        path: "*",
        element: <Navigate to="/home" />
    }
]);

export default router;

