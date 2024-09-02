import { Inter } from "next/font/google";

import type { Metadata } from 'next'
import './globals.css'
import '@radix-ui/themes/styles.css';


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: 'Local Service Web App',
  description: 'Allows users to effortlessly browse, book, and pay for a wide range of services.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
