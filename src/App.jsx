import React from 'react';
import Hero from './components/Hero';
import CarruselOfertas from './components/CarruselOfertas';
import CatalogoTerreno from './components/CatalogoTerreno'; // <-- 1. Lo importamos
import Catalogo from './components/Catalogo';

function App() {
  return (
    <div className="bg-gray-50 min-h-screen">
      
      <Hero />
      <CarruselOfertas />
      
      {/* 2. Insertamos el catálogo de revista interactiva */}
      <CatalogoTerreno />

      {/* 3. Tu tienda online (con un pequeño título extra para diferenciarla) */}
      <div id="catalogo" className="pt-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800 border-b-2 border-gray-200 pb-4">
            Tienda <span className="text-blue-600">Online Directa</span>
          </h2>
        </div>
        <Catalogo />
      </div>
      
      <footer className="bg-gray-900 text-gray-400 py-8 text-center mt-12">
        <p>&copy; {new Date().getFullYear()} Comercial de Reyes SpA. Todos los derechos reservados.</p>
        <p className="text-sm mt-2">San Felipe, Región de Valparaíso</p>
      </footer>
    </div>
  );
}

export default App;