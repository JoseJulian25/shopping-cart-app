import React from "react";
import { Dialog } from "primereact/dialog";
import { Button } from "primereact/button";
import { useNavigate } from "react-router-dom";

const AuthDialog = ({ visible, onHide }) => {
    const navigate = useNavigate();

    return (
        <Dialog 
            header="¡Ups!" 
            visible={visible} 
            onHide={onHide} 
            footer={
                <div>
                    <Button 
                        label="Iniciar Sesión" 
                        icon="pi pi-sign-in" 
                        className="p-button-primary" 
                        onClick={() => {
                            navigate('/auth/login')
                            onHide();
                        }} 
                    />
                    <Button 
                        label="Registrarse" 
                        icon="pi pi-user" 
                        className="p-button-secondary" 
                        onClick={() => {
                            navigate('/auth/register')
                            onHide();
                        }} 
                    />
                </div>
            }
        >
            <p>
            ¡Ups! Necesitas una cuenta para guardar este producto. 
            <br/> 
                <b>Inicia sesión</b> o <b>regístrate</b> y disfruta de todos los beneficios.
            </p>

        </Dialog>
    );
};

export default AuthDialog;
