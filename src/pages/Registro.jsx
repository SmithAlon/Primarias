import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Registro = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [mensajeExito, setMensajeExito] = useState('');
    const [mensajeError, setMensajeError] = useState('');
    const navigate = useNavigate();

    const validarCorreo = (correo) => {
        // Lógica de validación de correo
        const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regexCorreo.test(correo);
    };

    const validarPassword = (password) => {
        // Lógica de validación de contraseña
        const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/; // Al menos 8 caracteres, una letra y un número
        return regexPassword.test(password);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validarCorreo(correo) && validarPassword(password)) {
            setMensajeExito('Registro exitoso. Redirigiendo...');
            setMensajeError('');
            setTimeout(() => {
                navigate('/');
            }, 2000); // Redirige después de 2 segundos
        } else {
            setMensajeError('Error en el registro. Por favor, verifica tus datos.');
            setMensajeExito('');
        }
    };

    function volverInicio(){
        navigate('/');
    }

    return (
        <div>
            <div>
                <h1>Registro</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="correo">
                            Correo
                        </label>
                        <input
                            id="correo"
                            type="email"
                            placeholder="Correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                    <div>
                        <label>
                            Crea tu contraseña
                        </label>
                        <input
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {mensajeExito && <p>{mensajeExito}</p>}
                    {mensajeError && <p>{mensajeError}</p>}
                    <div>
                        <button
                            type="submit"
                        >
                            Registrarse
                        </button>
                        <button onClick={volverInicio}>Ir a Inicio</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Registro;