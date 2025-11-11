import { MetadataRoute } from 'next';

// Asume que esta es la URL de tu sitio
const URL_BASE = 'https://grupoberboz.vercel.app/'; 

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${URL_BASE}/`,
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: `${URL_BASE}/quienes-somos`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL_BASE}/servicios`,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${URL_BASE}/contacto`,
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
  ];
}