import type { Metadata } from 'next'
import localFont from 'next/font/local'
import Head from 'next/head'
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
      <Head>
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Evgeniia Portfolio" />
        <meta
          property="og:description"
          content="Design that amplifies your brand view work"
        />
        <meta
          property="og:url"
          content="https://simplorios.github.io/evgeniia-portfolio/"
        />
        <meta property="og:image" content="/evgeniia-portfolio/logo.svg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Evgeniia Portfolio" />
        <meta
          name="twitter:description"
          content="Design that amplifies your brand view work"
        />
        <meta name="twitter:image" content="/evgeniia-portfolio/logo.svg" />
      </Head>
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
