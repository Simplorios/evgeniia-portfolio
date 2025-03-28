import React from 'react'

import Image from 'next/image'
import Link from 'next/link'

import { Button } from '~/components/button'

export const Navbar = () => {
  return (
    <header className="shadow-header">
      <div className="h-[99] container mx-auto flex justify-between items-center">
        <Link href="/">
          <Image
            src="/evgeniia-portfolio/logo.svg"
            width={44}
            height={61}
            alt="Logo"
          />
        </Link>

        <nav className="flex flex-col justify-center">
          <ul className="inline-grid grid-flow-col auto-rows-min gap-17">
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#about">About</Link>
            </li>
            <li>
              <Link href="/#projects">Projects</Link>
            </li>
          </ul>
        </nav>
        <Button asChild={true}>
          <a
            href="https://t.me/janeeremeeva"
            rel="noopener,noreferrer"
            target="_blank"
          >
            Contact
          </a>
        </Button>
      </div>
    </header>
  )
}
