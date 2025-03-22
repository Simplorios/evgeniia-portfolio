import React from 'react'

import Image from 'next/image'

import { Button } from '~/components/button'

export const Navbar = () => {
  return (
    <div className="h-[99] container mx-auto flex justify-between items-center">
      <Image src="/logo.svg" width={44} height={61} alt="Logo" />
      <nav className="flex flex-col justify-center">
        <ul className="inline-grid grid-flow-col auto-rows-min gap-17">
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Projects</a>
          </li>
          <li>
            <a href="#">Process</a>
          </li>
        </ul>
      </nav>
      <Button>Contact</Button>
    </div>
  )
}
