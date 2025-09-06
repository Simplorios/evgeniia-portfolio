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
  openGraph: {
    type: 'website',
    url: 'https://simplorios.github.io/evgeniia-portfolio/',
    title: 'Evgeniia Portfolio',
    description: 'Design that amplifies your brand view work',
    images: {
      url: '/evgeniia-portfolio/logo.svg',
      width: 1200,
      height: 630,
    },
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Evgeniia Portfolio',
    description: 'Design that amplifies your brand view work',
    images: {
      url: '/evgeniia-portfolio/logo.svg',
      width: 1200,
      height: 630,
    },
  },
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
        <main className="overflow-x-hidden">{children}</main>
        <footer className="bg-primary h-32.5 flex justify-center items-center px-4 md:px-0">
          <Button size="m" color="graphite">
            <Link href="/">Return to main page</Link>
          </Button>
        </footer>
      </body>
    </html>
  )
}
