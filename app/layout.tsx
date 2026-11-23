import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Patsakorn Mongkonporn | Portfolio',
  description: 'Resume and portfolio of Patsakorn Mongkonporn, aspiring software developer.',
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
