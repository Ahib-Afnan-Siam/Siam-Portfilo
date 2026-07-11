import type { MetadataRoute } from 'next'
import { SITE } from '@/lib/site'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Ahib Afnan Siam — AI Software Engineer',
    short_name: 'Ahib Siam',
    description: SITE.description,
    start_url: '/',
    display: 'standalone',
    background_color: '#050510',
    theme_color: '#06b6d4',
    icons: [
      { src: '/icon', sizes: '64x64', type: 'image/png' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  }
}