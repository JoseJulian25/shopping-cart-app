import { Navigate, Routes, Route } from "react-router-dom";
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


function Router() {
    return (
        <Routes>
            <Route path="/" element={isLoading({ children: <HomeLayout /> })}>
                <Route path="/" element={isLoading({ children: <CategorySection /> })} />
                <Route path="shopping-cart" element={
                    isLoading({
                        children:
                            <ProtectedRoute>
                                <ShoppingCartPage />
                            </ProtectedRoute>
                    })
                } />
            </Route>
            <Route path="/auth" element={isLoading({
                children: <AuthLayout />
            })} >
                <Route path="register" element={isLoading({
                    children: <RestrictRoute>
                        <RegisterForm />
                    </RestrictRoute>
                })} />
                <Route path="login" element={isLoading({
                    children: <RestrictRoute>
                        <LoginForm />
                    </RestrictRoute>
                })} />
            </Route>

            <Route path="*" element={<Navigate to="/" />} />
        </Routes>
    );
}

// TODO: Estoy hay que convertirlo en un archivo aparte, de momento no se me ocurre nada asi que lo hice aqui para 
// para movelo despues
function isLoading({ children }) {
    return (
        <Suspense fallback={<Loading />}>
            {children}
        </Suspense>
    );
}

export default Router;
