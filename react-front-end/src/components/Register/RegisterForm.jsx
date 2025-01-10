import React, { useState } from 'react';
import { InputText } from 'primereact/inputtext';
import { Password } from 'primereact/password';
import { Button } from 'primereact/button';
import { FloatLabel } from 'primereact/floatlabel';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import { useAuth } from '../../context/AuthContext';
import authService from '../../services/AuthService';
import './RegisterForm.css';

const RegisterForm = () => {
    const {setAuthenticated} = useAuth();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            const response = await authService.register({name, email, password});
            setAuthenticated(response.user)
            navigate('/home');

        }catch(err) {
            console.log( "ERROR:", err);
            Swal.fire({
                title: "The Internet?",
                text: err,
                icon: "error"
              });

              setIsSubmitting(false)
        }
    };

    return (
        <>
        <form className='flex flex-column gap-4 ' onSubmit={handleSubmit}>
            <h2 className='text-center'>Register</h2>

            <FloatLabel>
                <InputText
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className='w-full'
                />
                <label htmlFor="name">Nombre</label>
            </FloatLabel>

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
                    className='w-full'
                    inputClassName='w-full'
                />
                <label htmlFor="password">Contraseña</label>
            </FloatLabel>

            <Button
                type="submit"
                label="Registrar"
                disabled={isSubmitting}
            />
        </form>
        <p className='text-primary font-italic'>Ya tienes una cuenta? <Link to='/auth/login'>Inicia Sesion aqui...</Link></p>
        </>
        
    );
};

export default RegisterForm;
