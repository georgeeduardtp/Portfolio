import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    default: 'George Eduard Turcescu | Portfolio',
    template: '%s | George Eduard Turcescu',
  },
  description:
    'Portfolio de George Eduard Turcescu, desarrollador Full Stack orientado a producto y arquitectura. Construyo soluciones digitales escalables con Java, Spring Boot y Next.js, aplicando criterio técnico, experiencia de usuario y foco en software mantenible.',
  applicationName: 'George Eduard Turcescu Portfolio',
  authors: [{ name: 'George Eduard Turcescu' }],
  creator: 'George Eduard Turcescu',
  publisher: 'George Eduard Turcescu',
  keywords: [
    'George Eduard Turcescu',
    'Software Developer',
    'Eduard Turcescu',
    'George Eduard',
    'George Turcescu',
    'georgeeduardtp',
    'portfolio George Eduard Turcescu',
    'desarrollador full stack Madrid',
    'full stack developer Madrid',
    'software developer Madrid',
    'desarrollador Java Madrid',
    'desarrollador Spring Boot Madrid',
    'desarrollador Next.js Madrid',
    'portfolio desarrollador full stack',
    'programador full stack junior',
    'desarrollador software junior',
    'desarrollador web full stack',
    'creador de Pelu Go',
    'creador pelugo'
  ],
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
  },
  manifest: '/site.webmanifest',
  openGraph: {
    type: 'website',
    locale: 'es_ES',
    siteName: 'George Eduard Turcescu Portfolio',
    title: 'George Eduard Turcescu | Portfolio',
    description:
      'Portfolio de George Eduard Turcescu, desarrollador Full Stack orientado a producto y arquitectura. Construyo soluciones digitales escalables con Java, Spring Boot y Next.js, aplicando criterio técnico, experiencia de usuario y foco en software mantenible.',
    images: [
      {
        url: '/profile.jpeg',
        width: 1200,
        height: 630,
        alt: 'George Eduard Turcescu - Software Developer',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'George Eduard Turcescu | Portfolio',
    description:
      'Portfolio de George Eduard Turcescu, desarrollador Full Stack orientado a producto y arquitectura. Construyo soluciones digitales escalables con Java, Spring Boot y Next.js, aplicando criterio técnico, experiencia de usuario y foco en software mantenible.',
    images: ['/profile.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>
        <AppRouterCacheProvider>
          <CssBaseline />
          {children}
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
