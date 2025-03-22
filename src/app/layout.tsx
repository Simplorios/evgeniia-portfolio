import type { Metadata } from 'next'
import localFont from 'next/font/local'

import { Navbar } from '~/components/navbar'

import './globals.css'

const edNimpkish = localFont({
  src: './fonts/ED-Nimpkish-Regular.otf',
  display: 'swap',
  variable: '--font-nimpkish',
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${edNimpkish.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  )
}
