import React, { useState, useEffect } from 'react';

function CarruselOfertas() {
  const ofertas = [
    "/oferta1.png",
    "/oferta2.png",
    "/oferta3.png",
    "/oferta4.png",
    "/oferta5.png"
  ];

  const [actual, setActual] = useState(0);

  useEffect(() => {
    const intervalo = setInterval(() => {
      setActual((prev) => (prev === ofertas.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(intervalo);
  }, [ofertas.length]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-4">
      
      {/* Título ajustado para simetría con la sección inferior */}
      <div className="mb-8 flex justify-between items-end border-b-2 border-gray-200 pb-4">
        <h2 className="text-3xl font-extrabold text-gray-800 flex items-center gap-2">
          <span className="text-red-600">🔥</span> Ofertas del Mes
        </h2>
      </div>
      
      {/* Contenedor del Carrusel con nuevas alturas simétricas */}
      <div className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-xl bg-white border-2 border-gray-100">
        
        {ofertas.map((img, index) => (
          <img
            key={index}
            src={img}
            alt={`Oferta ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-contain p-4 transition-opacity duration-700 ease-in-out ${
              index === actual ? 'opacity-100 z-10' : 'opacity-0 z-0'
            }`}
          />
        ))}
        
        {/* Puntos indicadores más elegantes y visibles */}
        <div className="absolute bottom-6 left-0 right-0 z-20 flex justify-center gap-3">
          {ofertas.map((_, i) => (
            <button 
              key={i} 
              onClick={() => setActual(i)}
              className={`h-3 rounded-full transition-all duration-300 shadow-md ${i === actual ? 'bg-blue-600 w-8' : 'bg-gray-300 w-3 hover:bg-gray-400'}`}
              aria-label={`Ir a oferta ${i + 1}`}
            />
          ))}
        </div>

      </div>
    </div>
  );
}

export default CarruselOfertas;