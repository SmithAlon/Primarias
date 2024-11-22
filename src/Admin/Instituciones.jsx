import institucionesData from '../Instituciones.json'; // Asegúrate de que la ruta sea correcta

const Instituciones = () => {
    // Verifica que institucionesData e institucionesData.Instituciones existan
    if (!institucionesData || !institucionesData.Instituciones) {
        return <div>No se encontraron instituciones.</div>;
    }

    return (
        <div className="flex flex-col justify-center p-4">
            <h1 className="text-2xl font-bold mb-4">Instituciones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {institucionesData.Instituciones.map((institucion) => (
                    <div key={institucion.id} className="bg-white p-4 rounded-md shadow-md">
                        <img src={institucion.logo} alt={`${institucion.nombre} logo`} className="w-full h-32 object-cover mb-4 rounded-md" />
                        <h2 className="text-xl font-semibold mb-2">{institucion.nombre}</h2>
                        <p className="mb-1"><strong>Siglas:</strong> {institucion.siglas}</p>
                        <p className="mb-1"><strong>Dirección:</strong> {institucion.direccion}</p>
                        <p className="mb-1"><strong>Teléfono:</strong> {institucion.telefono}</p>
                        <p className="mb-1"><strong>Correo:</strong> {institucion.correo}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Instituciones;