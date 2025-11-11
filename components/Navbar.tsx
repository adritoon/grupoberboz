'use client'; // <-- VITAL para que funcione el hook

import React, { useState } from 'react'; // <-- 1. AÑADIMOS useState
import Link from 'next/link';
import { Menu, X } from 'lucide-react'; // <-- 2. AÑADIMOS LOS ICONOS

export const Navbar = () => {
  // 3. AÑADIMOS EL ESTADO PARA SABER SI EL MENÚ ESTÁ ABIERTO
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md relative z-50">
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div>
          <Link href="/" className="text-xl font-bold text-gray-800">
            Grupo Berboz
          </Link>
        </div>

        {/* Links de Navegación (Escritorio) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-gray-600 hover:text-brand">
            Inicio
          </Link>
          <Link href="/quienes-somos" className="text-gray-600 hover:text-brand">
            Quiénes Somos
          </Link>
          <Link href="/servicios" className="text-gray-600 hover:text-brand">
            Servicios
          </Link>
          <Link href="/contacto" className="text-gray-600 hover:text-brand">
            Contacto
          </Link>
        </div>

        {/* Botón CTA (Escritorio) */}
        <div className="hidden md:block">
          <Link
            href="/contacto"
            className="bg-brand text-white px-4 py-2 rounded-full hover:bg-brand-hover transition duration-300"
          >
            Solicitar Cotización
          </Link>
        </div>

        {/* 4. BOTÓN HAMBURGUESA (Solo visible en móvil) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} // <-- Cambia el estado al hacer clic
            className="text-gray-800"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* 5. EL MENÚ MÓVIL (Se muestra u oculta según el estado) */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          <Link href="/" className="text-gray-800 text-lg hover:text-brand" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </Link>
          <Link href="/quienes-somos" className="text-gray-800 text-lg hover:text-brand" onClick={() => setIsMenuOpen(false)}>
            Quiénes Somos
          </Link>
          <Link href="/servicios" className="text-gray-800 text-lg hover:text-brand" onClick={() => setIsMenuOpen(false)}>
            Servicios
          </Link>
          <Link href="/contacto" className="text-gray-800 text-lg hover:text-brand" onClick={() => setIsMenuOpen(false)}>
            Contacto
          </Link>
          <Link
            href="/contacto"
            className="bg-brand text-white px-6 py-2 rounded-full w-auto"
            onClick={() => setIsMenuOpen(false)}
          >
            Solicitar Cotización
          </Link>
        </div>
      </div>
    </header>
  );
};