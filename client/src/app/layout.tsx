import './globals.css';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';
import { Toaster } from 'react-hot-toast';
import { Providers } from './providers';

const roboto = Roboto({ weight: ['400', '500', '700'], subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Trx',
  description: 'Trx test',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <Toaster
          position="top-right"
          toastOptions={{
            duration: 3000,
          }}
        />

        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
