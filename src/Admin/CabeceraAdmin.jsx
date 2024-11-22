import { useEffect, useState } from 'react';
import usuarios from '../Usuarios.json'; // Asegúrate de que la ruta sea correcta

const CabeceraAdmin = () => {
  const [userName, setUserName] = useState('');
  const [userType, setUserType] = useState('');

  useEffect(() => {
    const user = usuarios.usuarios[0]; // Asumiendo que quieres el primer usuario
    setUserName(user.Nombre);
    setUserType(user.Tipo);
  }, []);

  return (
    <header className='flex justify-between items-center bg-sky-500 p-4'>
      <div className='flex flex-col items-center'>
        <img src='https://via.placeholder.com/150' alt='Logo' className='rounded-full h-10 w-10' />
        <p className='font-bold'>{userName}</p>
      </div>
      <h1 className='absolute left-1/2 transform -translate-x-1/2 font-bold text-2xl'>Cuenta de {userType}</h1>
      <h2 className='flex text-md'>EduPortal.com.mx</h2>
    </header>
  );
};

export default CabeceraAdmin;