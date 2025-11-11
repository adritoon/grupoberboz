'use client'; 

import React, { useState, useEffect } from 'react'; // <-- 1. IMPORTAMOS useEffect
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false); // <-- 2. NUEVO ESTADO PARA SCROLL

  // 3. EFECTO PARA DETECTAR EL SCROLL
  useEffect(() => {
    const handleScroll = () => {
      // Se activa si el scroll es mayor a 10px
      setIsScrolled(window.scrollY > 10);
    };

    // Añade el listener
    window.addEventListener('scroll', handleScroll);

    // Limpia el listener cuando el componente se desmonta (buena práctica)
    return () => window.removeEventListener('scroll', handleScroll);
  }, []); // El array vacío significa que esto solo se ejecuta una vez (al montar)

  return (
    // 4. CLASES MODIFICADAS
    // Hacemos el header 'sticky' y cambiamos su estilo basado en 'isScrolled'
    <header 
      className={`sticky top-0 z-50 transition-all duration-300 
        ${isScrolled 
          ? 'bg-background/80 shadow-lg backdrop-blur-lg' // <-- Estilo con scroll (efecto glass)
          : 'bg-background shadow-md' // <-- Estilo en el top (sin blur)
        }`}
    >
      {/* El resto del código del Navbar no cambia... */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        
        {/* Logo */}
        <div>
          <Link href="/" className="text-xl font-bold text-foreground">
            Grupo Berboz
          </Link>
        </div>

        {/* Links de Navegación (Escritorio) */}
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-foreground/80 hover:text-foreground transition-colors">
            Inicio
          </Link>
          <Link href="/quienes-somos" className="text-foreground/80 hover:text-foreground transition-colors">
            Quiénes Somos
          </Link>
          <Link href="/servicios" className="text-foreground/80 hover:text-foreground transition-colors">
            Servicios
          </Link>
          <Link href="/contacto" className="text-foreground/80 hover:text-foreground transition-colors">
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

        {/* Botón Hamburguesa (Móvil) */}
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-foreground"
            aria-label="Abrir menú"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </nav>

      {/* Menú Móvil */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-background shadow-lg transition-transform duration-300 ease-in-out ${
          isMenuOpen ? 'transform translate-y-0' : 'transform -translate-y-[150%]'
        }`}
      >
        <div className="flex flex-col items-center space-y-4 py-6">
          <Link href="/" className="text-foreground text-lg hover:text-brand" onClick={() => setIsMenuOpen(false)}>
            Inicio
          </Link>
          <Link href="/quienes-somos" className="text-foreground text-lg hover:text-brand" onClick={() => setIsMenuOpen(false)}>
            Quiénes Somos
          </Link>
          <Link href="/servicios" className="text-foreground text-lg hover:text-brand" onClick={() => setIsMenuOpen(false)}>
            Servicios
          </Link>
          <Link href="/contacto" className="text-foreground text-lg hover:text-brand" onClick={() => setIsMenuOpen(false)}>
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