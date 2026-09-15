import type { Metadata } from 'next';
import './globals.css';
export const metadata: Metadata = { title: 'Premium Real Estate', description: 'Saudi Arabia premium property platform' };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en"><body>{children}</body></html>; }
