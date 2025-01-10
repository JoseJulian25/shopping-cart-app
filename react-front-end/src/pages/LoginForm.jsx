import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import {useAuth } from '../context/AuthContext'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import authService from '../services/AuthService';
import './Register/RegisterForm'

const LoginForm = () => {
    const { setAuthenticated } = useAuth();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
            e.preventDefault();
            setIsSubmitting(true);
    
            try {
                const response = await authService.login(email, password);
                setAuthenticated(response.user);
    
                navigate('/home')
            }catch(err) {
                console.log(err)
                Swal.fire({
                    title: "Ha ocurrido un error.",
                    text: err.response?.data?.error,
                    icon: "error"
                  });
    
                  setIsSubmitting(false)
            }
            setIsSubmitting(false)
        };

    return (
        <>
        <form className='flex flex-column gap-4' onSubmit={handleSubmit}>
                <h2 className='text-center'>Login</h2>
    
                <FloatLabel>
                    <InputText
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className='w-full'
                    />
                    <label htmlFor="email">Email</label>
                </FloatLabel>
    
                <FloatLabel>
                    <Password
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        toggleMask
                        feedback={false}
                        className='w-full'
                        inputClassName='w-full'
                    />
                    <label htmlFor="password">Contraseña</label>
                </FloatLabel>
    
                <Button
                    type="submit"
                    label="Iniciar Sesion"
                    disabled={isSubmitting}
                />
            </form>
            <p className='text-primary font-italic'>No tienes una cuenta? <Link to='/auth/register'>Registrate aqui...</Link></p>
        </>     
        );
}

export default LoginForm;