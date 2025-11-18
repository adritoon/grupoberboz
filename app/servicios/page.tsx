import React from 'react'; 
import { FadeIn } from '@/components/FadeIn';
import type { Metadata } from 'next';
// 1. IMPORTA EL NUEVO SLIDER
import { ServiceSlider } from '@/components/ServiceSlider';

export const metadata: Metadata = {
  title: 'Nuestros Servicios',
  description: 'Conoce nuestros servicios detallados de limpieza integral, especializada, y seguridad y vigilancia privada.',
};

// --- 2. DEFINE TUS "ÁLBUMES" DE FOTOS AQUÍ ---
const limpiezaIntegralImages = [
  { src: '/images/servicio-limpieza.jpg', alt: 'Limpieza de oficinas' },
  { src: '/images/condominios.jpg', alt: 'Limpieza de condominios' },
  // ... añade más fotos de limpieza aquí
];

const limpiezaEspecializadaImages = [
  { src: '/images/vidrioaltura.jpg', alt: 'Limpieza de vidrios en altura' },
  { src: '/images/lavadoalfombra.jpg', alt: 'Lavado de alfombras' },
  // ... añade más fotos especializadas aquí
];

const seguridadImages = [
  { src: '/images/seguridadagente.jpg', alt: 'Agente de seguridad' },
  { src: '/images/vigilanciaprivada.webp', alt: 'Control de acceso' },
  // ... añade más fotos de seguridad aquí
];
// --- FIN DE LOS ÁLBUMES ---

export default function ServiciosPage() {
  return (
    <div className="text-foreground bg-background">
      
      {/* --- Sección 1: Título de la Página --- */}
      <FadeIn>
        <section className="bg-card py-16 text-center"> {/* <-- 1. El fondo ocupa el 100% */}
          <div className="container mx-auto px-6">      {/* <-- 2. El container está DENTRO */}
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Nuestros Servicios
            </h1>
            <p className="text-lg md:text-xl text-muted max-w-3xl mx-auto">
              Comprometidos con la calidad, la eficiencia y la
              satisfacción de nuestros clientes en cada tarea que realizamos.
            </p>
          </div>
        </section>
      </FadeIn>

      {/* --- 3. SECCIÓN RE-DISEÑADA CON EL SLIDER --- */}
      <FadeIn delay={0.1}>
        <section id="limpieza" className="bg-card py-16 md:py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Columna de Texto */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Limpieza Integral
              </h2>
              <p className="text-lg text-muted mb-4">
                Mantenimiento de oficinas, instituciones, edificios,
                condominios, locales comerciales e industriales. Nos
                encargamos de que tu espacio de trabajo o vivienda
                esté siempre impecable.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted">
                <li>Mantenimiento de oficinas e instituciones.</li>
                <li>Limpieza de condominios y edificios.</li>
                <li>Manejo de locales comerciales e industriales.</li>
              </ul>
            </div>
            {/* Columna de SLIDER */}
            <div className="overflow-hidden rounded-lg">
              <ServiceSlider images={limpiezaIntegralImages} />
            </div>
          </div>
        </section>
      </FadeIn>

      {/* --- 4. SECCIÓN RE-DISEÑADA CON EL SLIDER (Alternando) --- */}
      <FadeIn delay={0.2}>
        <section id="especializada" className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Columna de SLIDER (va primero en escritorio) */}
            <div className="md:order-first overflow-hidden rounded-lg">
              <ServiceSlider images={limpiezaEspecializadaImages} />
            </div>
            {/* Columna de Texto */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Limpieza Especializada
              </h2>
              <p className="text-lg text-muted mb-4">
                Para trabajos que requieren un extra de profesionalismo y
                equipo especializado. Dejamos tus alfombras como nuevas
                y tus ventanas relucientes, sin importar la altura.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted">
                <li>Lavado de alfombras y tapicería.</li>
                <li>Limpieza de vidrios en altura.</li>
                <li>Desinfección de ambientes y tratamiento de pisos.</li>
              </ul>
            </div>
          </div>
        </section>
      </FadeIn>
      
      {/* --- 5. SECCIÓN RE-DISEÑADA CON EL SLIDER --- */}
      <FadeIn delay={0.3}>
        <section id="seguridad" className="bg-card py-16 md:py-24">
          <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
            {/* Columna de Texto */}
            <div>
              <h2 className="text-3xl font-bold mb-6">
                Seguridad y Vigilancia Privada
              </h2>
              <p className="text-lg text-muted mb-4">
                Tu tranquilidad es nuestra prioridad. Contamos con
                personal calificado, uniformado y supervisado
                constantemente para garantizar un servicio confiable
                de protección de bienes y personas.
              </p>
              <ul className="list-disc list-inside space-y-2 text-muted">
                <li>Vigilancia privada y control de accesos.</li>
                <li>Resguardo de instalaciones 24/7.</li>
                <li>Personal capacitado y supervisado (SUCAMEC).</li>
              </ul>
            </div>
            {/* Columna de SLIDER */}
            <div className="overflow-hidden rounded-lg">
              <ServiceSlider images={seguridadImages} />
            </div>
          </div>
        </section>
      </FadeIn>
    </div>
  );
}