import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script';

const inter = Montserrat({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Luda Trading App',
  description: 'The actual best app Ever',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">

      <body className={inter.className}>{children}</body>
    </html>
  )
}
