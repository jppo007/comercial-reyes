import React from 'react';

function Hero() {
  return (
    <div className="relative min-h-screen bg-gray-900 overflow-hidden font-sans">
      
      {/* 1. Fondo de Pantalla Completa con Gradiente */}
      <div className="absolute inset-0">
        <img
          src="/fondo.jpeg" // Reemplaza esto por una foto amplia de tu negocio o producto principal
          alt="Fondo Comercial de Reyes"
          className="w-full h-full object-cover object-right"
        />
        {/* Gradiente oscuro que va de izquierda (sólido) a derecha (transparente) */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-900/80 to-transparent"></div>
      </div>

      {/* 2. Menú de Navegación (Top Navbar) */}
      <nav className="relative z-20 flex items-center justify-between px-6 py-5 max-w-7xl mx-auto w-full">
        {/* Izquierda: Logo y Nombre */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Logo Comercial de Reyes" className="h-10 w-auto" />
          <span className="text-white font-bold text-lg tracking-wide hidden sm:block">
            COMERCIAL DE REYES
          </span>
        </div>

        {/* Centro: Enlaces del Menú */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-300">
          <a href="#" className="text-white transition">Inicio</a>
          <a href="#catalogo" className="hover:text-white transition">Catálogo</a>
          <a href="#" className="hover:text-white transition">Servicios</a>
          <a href="#" className="hover:text-white transition">Clientes</a>
          <a href="#" className="hover:text-white transition">Nosotros</a>
        </div>

        {/* Derecha: Botón WhatsApp y Carrito de Compras */}
        <div className="flex items-center gap-5">
          <a href="https://wa.me/56912345678" target="_blank" rel="noopener noreferrer" className="hidden sm:flex items-center gap-2 border border-gray-400 rounded-full px-5 py-2 text-white text-sm hover:bg-white/10 transition">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564.289.13.332.202c.045.072.045.419-.099.824z"/></svg>
            <span>WhatsApp</span>
          </a>
          <button className="text-white hover:text-blue-400 transition">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>
          </button>
        </div>
      </nav>

      {/* 3. Contenido Principal (Alineado a la izquierda) */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 h-[calc(100vh-90px)] flex flex-col justify-center">
        <div className="max-w-2xl">
          
          {/* Título pequeño superior */}
          <p className="text-gray-300 text-xs sm:text-sm font-bold tracking-widest uppercase mb-4">
            Insumos y herramientas · Desde 2012
          </p>
          
          {/* Titular Principal */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
            Soluciones integrales para tu negocio en Chile
          </h1>
          
          {/* Párrafo descriptivo */}
          <p className="text-lg sm:text-xl text-gray-300 mb-10 leading-relaxed max-w-xl">
            Proveemos calidad y confianza en cada entrega. Equipando a pequeñas y medianas empresas con los mejores materiales del mercado.
          </p>
          
          {/* Botones (Sólido y con Borde) */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#catalogo" className="bg-white text-gray-900 hover:bg-gray-200 font-bold py-3 px-8 rounded-full text-center transition duration-300">
              Ver Catálogo &rarr;
            </a>
            <a href="https://wa.me/56952045261" target="_blank" rel="noopener noreferrer" className="border border-white text-white hover:bg-white/10 font-bold py-3 px-8 rounded-full text-center transition duration-300 flex items-center justify-center gap-2">
              Cotizar por WhatsApp
            </a>
          </div>

        </div>
      </div>
      
    </div>
  );
}

export default Hero;