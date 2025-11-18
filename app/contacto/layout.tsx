import type { Metadata } from 'next';
import React from 'react';

export const metadata: Metadata = {
  title: 'Contacto',
  description: 'Envíanos un mensaje o llámanos. Estamos listos para ayudarte con tus necesidades de limpieza y seguridad.',
};

export default function ContactoLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>; 
}