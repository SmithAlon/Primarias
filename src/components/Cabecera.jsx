import { useRef, useState } from 'react';

const Cabecera = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header >
      <div >
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/23/23358.png" alt="logo" />
        </div>
        <h1 >Biblioteca Web</h1>
        <div ref={menuRef}>
          <button onClick={toggleMenu} >
            Menú
          </button>
          {isOpen && (
            <div>
              <ul >
                <li >Usuario</li>
                <li >Libros</li>
                <hr />
                <li ><a href="/">Cerrar Sesión</a></li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Cabecera;