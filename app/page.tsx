import { Hero } from '@/components/Hero';
// 1. IMPORTA EL NUEVO CARRUSEL
import { ClientCarousel } from '@/components/ClientCarousel';
import { ServicesSummary } from '@/components/ServicesSummary';
import { FadeIn } from '@/components/FadeIn';

export default function Home() {
  return (
    <>
      <Hero />
      
      {/* 2. REEMPLAZA SocialProof POR ClientCarousel */}
      <FadeIn>
        <ClientCarousel />
      </FadeIn>
      
      <FadeIn delay={0.2}>
        <ServicesSummary />
      </FadeIn>
    </>
  );
}