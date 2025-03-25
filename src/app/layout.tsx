import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Link from 'next/link'

import { Button } from '~/components/button'
import { Navbar } from '~/components/navbar'

import './globals.css'

const edNimpkish = localFont({
  src: './fonts/ED-Nimpkish-Regular.otf',
  display: 'swap',
  variable: '--font-nimpkish',
})

export const metadata: Metadata = {
  title: 'Evgeniia Portfolio',
  description: 'Design that amplifies your brand view work',
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
        <footer className="bg-primary h-32.5 flex justify-center items-center">
          <Button size="m" color="graphite">
            <Link href="/">Return to main page</Link>
          </Button>
        </footer>
      </body>
    </html>
  )
}
