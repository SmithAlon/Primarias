const CabeceraAdmin = () => {

    return (
        <div className="">
            <header className='flex justify-between items-center p-4 bg-blue-400 z-10'>    
            <div className='fixed top-0 left-0 h-full bg-gray-600 text-white w-64 p-4 transition-transform duration-500'>
                <section className='flex items-center'>
                    <img className='mr-2' src="src/assets/menu(1).png" alt="Menu Icon" />
                    <h1 className='text-2xl font-bold'>Opciones</h1>
                </section>
                <nav className='w-64 p-4'>
                    <ul>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer hover:border hover:border-black">Instituciones</li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer hover:border hover:border-black">Consultas</li>
                        <li className="py-2 px-4 hover:bg-gray-700 cursor-pointer hover:border hover:border-black"><a href="/">Cerrar Sesión</a></li>
                    </ul>
                </nav>
            </div>
                <div className="flex justify-center items-center w-full ml-64">
                    <h1 className='text-2xl font-bold'>Inicio</h1>
                </div>
            </header>
        </div>
    );
};

export default CabeceraAdmin;