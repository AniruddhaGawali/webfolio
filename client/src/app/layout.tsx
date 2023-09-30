import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'The Dev Daily Bugle',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
