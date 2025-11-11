'use client'; // <-- Tiene que ser un Client Component

import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation'; // <-- Importante para detectar cambios de ruta
import React from 'react';

export const PageTransitionWrapper = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const pathname = usePathname(); // Detecta la URL actual

  return (
    <AnimatePresence mode="wait">
      {/* Usamos la 'pathname' como 'key'.
        Cuando la 'key' cambia (cambias de página), 
        AnimatePresence activa la animación de salida del div viejo 
        y la de entrada del div nuevo.
      */}
      <motion.div
        key={pathname}
        initial={{ opacity: 0, y: 15 }} // Empieza invisible y 15px abajo
        animate={{ opacity: 1, y: 0 }} // Aparece en su posición
        exit={{ opacity: 0, y: 15 }} // Se va invisible y 15px abajo
        transition={{ duration: 0.3, ease: 'easeInOut' }}
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
};