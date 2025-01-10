import React, { useRef } from 'react';
import { Avatar } from 'primereact/avatar';
import { OverlayPanel } from 'primereact/overlaypanel';
import { Button } from 'primereact/button';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useState } from 'react';
                      

const AvatarAccount = () => {
    const op = useRef(null);
    const navigate = useNavigate();
    const {currentUser, logout} = useAuth();

    const toggleOptions = (event) => {
        op.current.toggle(event );
    };

    const handleLogout = () => {
        logout();
    }

    const handleLogin = () => {
        navigate('/auth/login')
    }

    const letraAvatar = currentUser?.name?.at(0)?.toUpperCase() || '';

    return (
        <div>
            <Avatar 
                label={letraAvatar}
                icon="pi pi-user" 
                size="large" 
                shape="circle" 
                onClick={toggleOptions} 
                style={{ cursor: 'pointer' }} 
            />
            <OverlayPanel ref={op}>
                <div>
                    {currentUser ? (
                        <Button label="Cerrar Sesion"  outlined onClick={handleLogout} />
                    ): (
                        <Button label="Iniciar Sesion" outlined onClick={handleLogin} />
                    )}
                </div>
            </OverlayPanel>
        </div>
    );
};

export default AvatarAccount;
