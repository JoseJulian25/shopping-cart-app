import React from 'react';
import { Menubar } from 'primereact/menubar'; 
import AvatarAccount from './avatarAccount';

import ShoppingCartButton from '../ShoppingCartButton.jsx/ShoppingCartButton';
import { useNavigate } from 'react-router-dom';

export default function NavBar() {
    const navigate = useNavigate();

    const items = [
        {
            label: 'Home',
            icon: 'pi pi-home',
            command: () => { navigate('/home')}
        },
    ];

    const start = <img alt="logo" src="https://primefaces.org/cdn/primereact/images/logo.png" height="40" className="mr-2"></img>;
    const end = (
        <div className="card flex  gap-3 align-items-center">
            <ShoppingCartButton/>
            <AvatarAccount/>
        </div>
    );

    return (
        <div className="card">
            <Menubar model={items} start={start} end={end} />
        </div>
    )
}
        