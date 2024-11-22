import { useState } from 'react';
import RegistroD from './RegistroD.jsx'; // Asegúrate de que la ruta sea correcta
import RegistroInst from './RegistroInst.jsx';
import Instituciones from './Instituciones.jsx';


const TableroAdmin = () => {
    const [currentStep, setCurrentStep] = useState(0);

    const onRegister = () => {
        setCurrentStep(1); // Inicia con RegistroInst
    };

    const handleNextStep = () => {
        setCurrentStep(2); // Pasa a RegistroD
    };

    const handleBackClick = () => {
        setCurrentStep(0); // Vuelve al estado inicial
    };

    const showInstituciones = () => {
        setCurrentStep(3); // Muestra el componente Instituciones
    };

    function CerrarSesion() {
        window.location.href = '/';
    }

    return (
        <div className="flex flex-col justify-center items-center p-4">
            <div className="flex justify-center p-4">
                <button onClick={showInstituciones} className="bg-[#658cc2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-8">
                    Instituciones
                </button>
                <button onClick={onRegister} className="bg-[#658cc2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                    Registrar
                </button>
                <button onClick={CerrarSesion} className="bg-[#658cc2] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mx-8">
                    Cerrar Sesión
                </button>
            </div>
            {currentStep === 0 && <img className='align-center w-64 h-64 mt-6 rounded-full' src='public\OpenPingu.png' alt="OpenPingu" />} {/* Display image when no other component is rendered */}
            {currentStep === 1 && <RegistroInst onNext={handleNextStep} onBack={handleBackClick} />}
            {currentStep === 2 && <RegistroD onBack={handleBackClick} />}
            {currentStep === 3 && <Instituciones />}
        </div>
    );
};

export default TableroAdmin;