'use client'; 

import React, { useState, MutableRefObject } from 'react';
import { useKeenSlider, KeenSliderPlugin, KeenSliderInstance } from 'keen-slider/react';
import 'keen-slider/keen-slider.min.css';
import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

// --- ESTA ES LA VERSIÓN CORREGIDA DEL PLUGIN ---
// Esta es una "función creadora" que *devuelve* el plugin
function AutoplayPlugin(delay: number = 5000): KeenSliderPlugin {
  // El plugin real es esta función que recibe 's' (el slider)
  return (s: KeenSliderInstance) => {
    let timeout: ReturnType<typeof setTimeout>;
    let mouseOver = false;

    function clearNextTimeout() {
      clearTimeout(timeout);
    }
    function nextTimeout() {
      clearTimeout(timeout);
      if (mouseOver) return;
      timeout = setTimeout(() => {
        s.next();
      }, delay);
    }
    s.on('created', () => {
      s.container.addEventListener('mouseover', () => {
        mouseOver = true;
        clearNextTimeout();
      });
      s.container.addEventListener('mouseout', () => {
        mouseOver = false;
        nextTimeout();
      });
      nextTimeout();
    });
    s.on('dragStarted', clearNextTimeout);
    s.on('animationEnded', nextTimeout);
    s.on('updated', nextTimeout);
  };
}
// --- FIN DEL PLUGIN CORREGIDO ---

// --- Definimos las props que el componente aceptará ---
type Props = {
  images: {
    src: string;
    alt: string;
  }[];
};

// --- EL COMPONENTE DEL SLIDER ---
export const ServiceSlider = ({ images }: Props) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);

  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>(
    {
      initial: 0,
      loop: true,
      slideChanged(slider) {
        setCurrentSlide(slider.track.details.rel); 
      },
      created() {
        setLoaded(true); 
      },
    },
    [
      // --- 2. ASÍ SE USA CORRECTAMENTE ---
      // Simplemente llamamos a la función creadora
      AutoplayPlugin(5000), 
    ]
  );

  return (
    <div className="relative w-full overflow-hidden">
      {/* El Slider */}
      <div ref={sliderRef} className="keen-slider h-64 md:h-96 rounded-lg overflow-hidden">
        {images.map((image, idx) => (
          <div className="keen-slider__slide" key={idx}>
            <Image
              src={image.src}
              alt={image.alt}
              layout="fill"
              objectFit="cover"
              className="transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>

      {/* Flechas de Navegación (Izquierda) */}
      {loaded && instanceRef.current && (
        <button
          aria-label="Slide Anterior"
          onClick={(e: any) => e.stopPropagation() || instanceRef.current?.prev()}
          className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 text-foreground hover:bg-background/80 backdrop-blur-sm transition z-10"
        >
          <ArrowLeft size={24} />
        </button>
      )}

      {/* Flechas de Navegación (Derecha) */}
      {loaded && instanceRef.current && (
        <button
          aria-label="Siguiente Slide"
          onClick={(e: any) => e.stopPropagation() || instanceRef.current?.next()}
          className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/50 text-foreground hover:bg-background/80 backdrop-blur-sm transition z-10"
        >
          <ArrowRight size={24} />
        </button>
      )}

      {/* Puntos de Navegación */}
      {loaded && instanceRef.current && (
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {[...Array(instanceRef.current.track.details.slides.length).keys()].map(
            (idx) => (
              <button
                aria-label={`Ir al slide ${idx + 1}`}
                key={idx}
                onClick={() => instanceRef.current?.moveToIdx(idx)}
                className={`w-3 h-3 rounded-full backdrop-blur-sm transition ${
                  currentSlide === idx
                    ? 'bg-brand' 
                    : 'bg-background/50'
                }`}
              ></button>
            )
          )}
        </div>
      )}
    </div>
  );
};