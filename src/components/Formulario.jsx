import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Formulario = () => {
    const [correo, setCorreo] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();

    const correoValido = 'juan@gmail.com';
    const passwordValido = 'password';

    const validacion = () => {
        if(correo === correoValido && password === passwordValido) {
            navigate('/biblioteca');
        } else {
            setError(true);
        }
    }

    const registrar = () => {
        navigate('/registro');
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md">
            <h1 className="flex items-center justify-center text-gray-700 text-2xl font-bold mb-2">¡Bienvenido!</h1>
            <form onSubmit={(e) => { e.preventDefault(); validacion(); }} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                    <div className="mb-4">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="correo">
                            Correo
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                            id="correo"
                            type="email"
                            placeholder="Correo"
                            value={correo}
                            onChange={(e) => setCorreo(e.target.value)}
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                            Contraseña
                        </label>
                        <input
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                            id="password"
                            type="password"
                            placeholder="******************"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>
                    {error && <p className="text-red-500 text-xs italic">Correo o contraseña incorrectos.</p>}
                    <div className="flex items-center justify-between">
                        <button className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" onClick={registrar}>
                                ¿No tienes cuenta? Regístrate
                        </button>
                        <button
                            className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            type="submit"
                        >
                            Iniciar Sesión
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Formulario;