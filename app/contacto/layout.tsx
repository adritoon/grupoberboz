import type { Metadata } from 'next';
import React from 'react';

// 1. MOVIMOS LA METADATA AQUÍ
export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Envíanos un mensaje o llámanos. Estamos listos para ayudarte con tus necesidades de limpieza y seguridad.',
};

// 2. Este layout simplemente "envuelve" la página
export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; // No añade HTML extra, solo pasa el hijo
}