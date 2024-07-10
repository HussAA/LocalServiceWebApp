
import type { Metadata } from 'next'
import './globals.css'
export const metadata: Metadata = {
  title: 'Local Service Web App',
  description: 'Allows users to effortlessly browse, book, and pay for a wide range of services.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
