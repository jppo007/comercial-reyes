import React from 'react';

function TarjetaProducto({ producto }) {
  return (
    <div className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300 flex flex-col h-full">
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        className="w-full h-48 object-contain p-4 bg-gray-50"
      />
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-bold text-gray-800 mb-2">{producto.nombre}</h3>
        
        {/* Aquí agregamos la descripción que viene de tu JSON */}
        <p className="text-gray-600 text-sm mb-4 flex-grow">
          {producto.descripcion}
        </p>
        
        <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-100">
          <span className="text-2xl font-black text-blue-600">
            ${producto.precio.toLocaleString('es-CL')}
          </span>
          <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-6 rounded-lg transition-colors duration-300">
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
}

export default TarjetaProducto;