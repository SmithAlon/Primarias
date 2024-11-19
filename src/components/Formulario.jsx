import { useState } from "react";
import { useNavigate } from "react-router-dom";
import usuarios from "../Usuarios.json";
import { useAuth } from "../AuthContext.jsx";

const Formulario = () => {
    const [matricula, setMatricula] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const navigate = useNavigate();
    const { login } = useAuth();

    const validacion = (e) => {
        e.preventDefault();
        const usuarioValido = usuarios.usuarios.find(usuario => usuario.Matricula === matricula && usuario.Contraseña === password);
        if (usuarioValido) {
            login();
            flujo(usuarioValido.Tipo);
        } else {
            setError(true);
        }
    }

    function flujo(tipoUsuario) {
        const dir = {
            'Administrador': '/admin',
            'Director': '/director',
            'Secretario': '/secretario',
            'Maestro': '/maestro'
        };
        navigate(dir[tipoUsuario]);
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form onSubmit={validacion} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
                <h1 className="text-2xl font-bold mb-4">Formulario de Inicio de Sesión</h1>
                <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="matricula">
                        Matrícula
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="matricula"
                        type="text"
                        placeholder="Matrícula"
                        value={matricula}
                        onChange={(e) => setMatricula(e.target.value)}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Contraseña
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        id="password"
                        type="password"
                        placeholder="Contraseña"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p className="text-red-500 text-xs italic">Matrícula o Contraseña incorrectos</p>}
                <div className="flex items-center justify-between">
                    <button type="submit" className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Iniciar Sesión
                    </button>
                </div>
            </form>
        </div>
    );
};

export default Formulario;