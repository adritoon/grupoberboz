'use client'; // <-- 1. TIENE QUE SER UN CLIENT COMPONENT

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Typewriter from 'typewriter-effect'; // <-- 2. IMPORTAMOS LA LIBRERÍA

export const Hero = () => {
  return (
    <section className="relative w-full h-[60vh] min-h-[475px] flex items-center justify-center text-center text-white">
      {/* Fondo con Imagen */}
      <Image
        src="/images/hero-background.png"
        alt="Oficina limpia y segura"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="z-0"
      />
      
      {/* Filtro oscuro */}
      <div className="absolute inset-0 bg-black opacity-60 z-10"></div>

      {/* Contenido */}
      <div className="relative z-20 px-6 py-12">
        
        {/* 3. AQUÍ OCURRE EL CAMBIO */}
        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold mb-4 min-h-[80px] md:min-h-[80px]">
          <Typewriter
            options={{
              strings: [
                'Soluciones Integrales',
                'Limpieza y Seguridad',
                'Confianza y Calidad',
                'Ambientes Protegidos'
              ],
              autoStart: true,
              loop: true,
              delay: 60,
              deleteSpeed: 30,
            }}
          />
        </h1>
        {/* (Fin del cambio) */}
        
        <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto text-white/90">
          Garantizamos ambientes limpios, ordenados y protegidos con la calidad y confianza que su empresa merece.
        </p>
        
        <div className="flex flex-col md:flex-row gap-4 items-center justify-center">
          <Link
            href="/contacto"
            className="w-full md:w-auto bg-brand text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-brand-hover transition duration-300"
          >
            Solicitar Cotización
          </Link>
          <Link
            href="/servicios"
            className="w-full md:w-auto bg-transparent border-2 border-white text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-white hover:text-foreground transition duration-300"
          >
            Ver Servicios
          </Link>
        </div>
      </div>
    </section>
  );
};