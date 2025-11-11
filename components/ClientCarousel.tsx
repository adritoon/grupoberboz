'use client'; 

import React from 'react';
import Image from 'next/image';
import { useKeenSlider } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';

// 1. ESTA ES TU LISTA ORIGINAL (pon los que quieras)
const originalClients = [
  { name: 'Lays', path: '/clientes/lays.png' },
  { name: 'Muni de Lima', path: '/clientes/munilima.jpg' },
  { name: 'Cliente Siguiente', path: '/logos/cliente-3.png' },
  // ...puedes tener 3, 4, 5... los que sean
];

// 2. DUPLICAMOS LA LISTA (x3) para asegurar un loop infinito y suave
const clients = [...originalClients, ...originalClients, ...originalClients];

export const ClientCarousel = () => {
  const [sliderRef] = useKeenSlider<HTMLDivElement>(
    {
      loop: true,
      mode: 'free',
      slides: { perView: 'auto', spacing: 48 },
      // 3. AHORA EL '5' ES SEGURO (y la animación es más lenta)
      created(s) {
        s.moveToIdx(5, true, { duration: 10000, easing: (t) => t });
      },
      updated(s) {
        s.moveToIdx(s.track.details.abs + 5, true, {
          duration: 10000,
          easing: (t) => t,
        });
      },
      animationEnded(s) {
        s.moveToIdx(s.track.details.abs + 5, true, {
          duration: 10000,
          easing: (t) => t,
        });
      },
    },
    []
  );

  return (
    <section className="bg-background py-16 md:py-20">
      <div className="container mx-auto px-6 text-center">
        <h3 className="text-lg font-semibold text-muted mb-12">
          Empresas que confían en nosotros
        </h3>

        <div ref={sliderRef} className="keen-slider">
          {clients.map((client, index) => ( // <-- 'index' es importante
            <div
              className="keen-slider__slide flex items-center justify-center"
              // 4. KEY ÚNICO (porque duplicamos la lista)
              key={`${client.name}-${index}`} 
              style={{ minWidth: '150px', maxWidth: '150px' }}
            >
              <Image
                src={client.path}
                alt={`Logo de ${client.name}`}
                width={120}
                height={60}
                className="object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};