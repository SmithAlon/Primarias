import { useState } from 'react';

const RegistroD = ({ onBack }) => {
    const [formData, setFormData] = useState({
        nombre: '',
        email: '',
        celular: '',
        contraseña: '',
        repetirContraseña: ''
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handlePasswordChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'repetirContraseña' && value !== formData.contraseña) {
            setError('Las contraseñas no coinciden');
        } else {
            setError('');
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.contraseña !== formData.repetirContraseña) {
            setError('Las contraseñas no coinciden');
            return;
        }
        if (!formData.nombre || !formData.email || !formData.celular || !formData.contraseña || !formData.repetirContraseña) {
            setError('Todos los campos son obligatorios');
            return;
        }
        // Aquí puedes agregar la lógica para manejar el envío del formulario
        console.log('Formulario enviado', formData);
    };

    return (
        <div className="flex flex-col items-center justify-center w-full">
            <div className="w-full max-w-md bg-gray-200 rounded-md shadow-md p-6">
                <div className="flex items-center justify-between mb-4">
                    <button className="text-xl" onClick={onBack}>&#8592;</button>
                    <h1 className="text-center text-2xl font-semibold flex-1">Formulario de Director</h1>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <input
                            type="text"
                            name="nombre"
                            placeholder="Nombre"
                            value={formData.nombre}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="email"
                            name="email"
                            placeholder="Correo electrónico"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="tel"
                            name="celular"
                            placeholder="Celular"
                            value={formData.celular}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="contraseña"
                            placeholder="Contraseña"
                            value={formData.contraseña}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </div>
                    <div className="mb-4">
                        <input
                            type="password"
                            name="repetirContraseña"
                            placeholder="Repita contraseña"
                            value={formData.repetirContraseña}
                            onChange={handlePasswordChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                        />
                    </div>
                    {error && <p className="text-red-500">{error}</p>}
                    <button type="submit" className="w-full bg-blue-500 text-white font-medium px-4 py-2 rounded-md">
                        Registrar
                    </button>
                </form>
            </div>
        </div>
    );
};

export default RegistroD;