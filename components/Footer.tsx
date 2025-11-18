import React from 'react';
import Link from 'next/link';
// 1. IMPORTA LOS ICONOS
import { FaFacebook, FaInstagram } from 'react-icons/fa';

export const Footer = () => {
  return (
    // Usa 'bg-card' para que coincida con el tema oscuro forzado
    <footer className="bg-card text-muted mt-16">
      <div className="container mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between">
          
          {/* Columna 1: Logo y Descripción */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h3 className="text-2xl font-bold text-foreground mb-2">Grupo Berboz</h3>
            <p className="text-sm text-muted">
              Soluciones integrales en limpieza y seguridad privada.
            </p>
          </div>

          {/* Columna 2: Links Rápidos (actualizado a colores del tema) */}
          <div className="md:w-1/3 mb-6 md:mb-0">
            <h4 className="text-lg font-semibold text-foreground mb-3">Navegación</h4>
            <ul className="space-y-2 list-none">
              <li><Link href="/" className="text-muted hover:text-foreground">Inicio</Link></li>
              <li><Link href="/quienes-somos" className="text-muted hover:text-foreground">Quiénes Somos</Link></li>
              <li><Link href="/servicios" className="text-muted hover:text-foreground">Servicios</Link></li>
              <li><Link href="/contacto" className="text-muted hover:text-foreground">Contacto</Link></li>
            </ul>
          </div>

          {/* Columna 3: Contacto (LA PARTE MODIFICADA) */}
          <div className="md:w-1/3">
            <h4 className="text-lg font-semibold text-foreground mb-3">Comunícate</h4>
            <ul className="space-y-2 list-none text-muted">
              <li className="text-sm">Correo: grupointegradoberbozeirl@gmail.com</li>
              <li className="text-sm">Tel: (51) 934339277</li>
              <li className="text-sm">Tel: (51) 993718535</li>
              
              {/* --- 2. AQUÍ ESTÁ EL CAMBIO --- */}
              <li className="mt-4">
                <h4 className="text-lg font-semibold text-foreground mb-2">Redes Sociales</h4>
                <div className="flex space-x-4">
                  <Link
                    href="https://www.facebook.com/profile.php?id=61583219349449" // <-- ¡URL REAL AQUÍ!
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-brand transition-colors"
                    aria-label="Facebook de Grupo Berboz"
                  >
                    <FaFacebook size={24} />
                  </Link>
                  <Link
                    href="https://www.instagram.com/grupointegradoberbozeirl/" // <-- ¡URL REAL AQUÍ!
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted hover:text-brand transition-colors"
                    aria-label="Instagram de Grupo Berboz"
                  >
                    <FaInstagram size={24} />
                  </Link>
                  {/* Puedes añadir más aquí, como LinkedIn (FaLinkedin) */}
                </div>
              </li>
              {/* --- FIN DEL CAMBIO --- */}
            </ul>
          </div>

        </div>

        {/* Línea divisoria y Copyright (actualizado a colores del tema) */}
        <hr className="border-foreground/10 my-6" />
        <div className="text-center text-sm text-muted">
          © {new Date().getFullYear()} Grupo Integrado Berboz E.I.R.L. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};