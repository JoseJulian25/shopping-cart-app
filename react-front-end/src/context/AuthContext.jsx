import React, { createContext } from "react";
import { useContext } from "react";
import { useState } from "react";
import apiClient from '../config/axios';
import { useEffect } from "react";

const AuthStatus = {
    checking: 'checking',
    authenticated: 'authenticated',
    unauthenticated: 'unauthenticated',
}

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [authStatus, setAuthStatus] = useState(AuthStatus.checking);

    const setAuthenticated = (user) => {
        setCurrentUser(user);
        setAuthStatus(AuthStatus.authenticated);
    };

    const logout = () => {
        setCurrentUser(null);
        setAuthStatus(AuthStatus.unauthenticated);
        localStorage.removeItem('token');
        window.location.reload();
    }
    
    async function checkTokenStatus() {
        const token = localStorage.getItem('token');

        if(!token) {
            setAuthStatus(AuthStatus.unauthenticated);
            return false;
        }

        try {
            const {data} = await apiClient.get('/auth/check-token');
            setAuthenticated(data);

            return true;
        } catch(err) {
            setAuthStatus(AuthStatus.unauthenticated);
            logout();
        }

        return false;
    }

    useEffect(() => {
        checkTokenStatus();
    }, [])

    return (
        <AuthContext.Provider value={{currentUser, authStatus, setAuthenticated, logout}}>
            {children}
        </AuthContext.Provider>
    )
};

export const useAuth = () => useContext(AuthContext);