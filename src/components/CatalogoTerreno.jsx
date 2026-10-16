import React from 'react';

function CatalogoTerreno() {
  // 💡 AQUÍ ES DONDE ACTUALIZARÁS EL LINK EN EL FUTURO
  // Cuando tengas un catálogo nuevo, solo cambias esta dirección:
  const linkHeyzine = "https://heyzine.com/flip-book/3acdc9d74a.html";

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      
      {/* Encabezado explicativo */}
      <div className="mb-8 flex flex-col md:flex-row md:justify-between md:items-end gap-4 border-b-2 border-gray-200 pb-4">
        <div>
          <h2 className="text-3xl font-extrabold text-gray-800">
            Catálogo <span className="text-blue-600">Venta Asistida</span>
          </h2>
          <p className="text-gray-600 mt-2 text-lg">
            Explora nuestro inventario completo. Estos productos se cotizan y gestionan directamente con tu asesor en terreno.
          </p>
        </div>
        <a 
          href="https://wa.me/56912345678" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-xl transition duration-300 shadow-md flex items-center gap-2 whitespace-nowrap"
        >
          <span>Cotizar con Asesor</span>
        </a>
      </div>

      {/* La "Ventana" (Iframe) que muestra el Flipbook */}
      <div className="w-full h-[500px] sm:h-[600px] md:h-[800px] rounded-2xl overflow-hidden shadow-2xl border-4 border-gray-100 bg-gray-50">
        <iframe 
          allowFullScreen={true}
          scrolling="no" 
          className="w-full h-full border-none" 
          src={linkHeyzine}
          title="Catálogo Heyzine Comercial de Reyes"
        ></iframe>
      </div>
      
    </div>
  );
}

export default CatalogoTerreno;