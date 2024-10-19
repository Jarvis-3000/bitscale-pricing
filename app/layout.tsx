import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Bitscale Pricing',
  description:
    'Bitscale Pricing to make your business faster at affordable price',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <link rel='icon' href='/logo.svg' sizes='any' />
      <body>{children}</body>
    </html>
  );
}
