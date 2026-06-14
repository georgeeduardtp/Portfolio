import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import CssBaseline from '@mui/material/CssBaseline';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'George Eduard Turcescu | Software Developer',
  description:
    'Portfolio de George Eduard Turcescu, desarrollador Full Stack especializado en Java, Spring, Next.js y productos SaaS B2B2C.',
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
