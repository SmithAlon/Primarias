import { useRef, useState } from 'react';

const Cabecera = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-green-600 z-50">
      <div className="flex items-center justify-between p-4">
        <div>
          <img className='max-h-10' src="https://cdn-icons-png.flaticon.com/512/23/23358.png" alt="logo" />
        </div>
        <h1 className="text-white text-2xl font-bold">Biblioteca Web</h1>
        <div className="dropdown relative" ref={menuRef}>
          <button onClick={toggleMenu} className="text-black focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:bg-neutral-200 dark:hover:bg-neutral-300 dark:focus:bg-neutral-500">
            Menú
          </button>
          {isOpen && (
            <div className="absolute left-1/2 transform -translate-x-1/2 mt-2 bg-slate-100 shadow-lg rounded border border-black">
              <ul className="dropdown-menu w-auto">
                <li className="dropdown-item p-2 hover:bg-gray-200">Usuario</li>
                <li className="dropdown-item p-2 hover:bg-gray-200">Libros</li>
                <hr className="my-2 border-gray-300" />
                <li className="dropdown-cerrarSesion block px-4 py-2 hover:bg-gray-200 text-blue-800"><a href="/">Cerrar Sesión</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Cabecera;