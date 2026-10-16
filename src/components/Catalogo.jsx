import React from 'react';
import misProductos from '../data/productos.json';
import TarjetaProducto from './TarjetaProducto';

function Catalogo() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h2 className="text-3xl font-extrabold text-center text-gray-900 mb-10">
        Catálogo de Comercial de Reyes
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {misProductos.map((prod) => (
          <TarjetaProducto key={prod.id} producto={prod} />
        ))}
      </div>
    </div>
  );
}

export default Catalogo;