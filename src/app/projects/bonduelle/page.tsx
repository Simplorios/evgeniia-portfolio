import React from 'react'

import Image from 'next/image'

import { ProjectHead } from '~/components/project-head'

const BASE_PATH = '/evgeniia-portfolio/bonduelle/'

export default function Bonduelle() {
  return (
    <>
      <ProjectHead
        title={
          <>
            Interactive brochure
            <br />
            for Bonduelle
          </>
        }
        imgSrc={`${BASE_PATH}head.png`}
        imgAlt="Head"
        task="Task: to create a bright, eye-catching, and emotionally engaging brochure in a non-standard format to capture attention and inspire interest in joining the company"
        description="An informational brochure for Bonduelle Russia to be distributed at various events and open days"
      />

      <section className="mt-25 mx-auto container">
        <h2 className="text-[3rem]/[1]">Result:</h2>
        <Image
          src={`${BASE_PATH}result.png`}
          width={1160}
          height={816}
          alt="Result"
          className="mt-10"
        />
      </section>

      <section className="mt-25 mx-auto pb-35 container">
        <h2 className="text-[3rem]/[1]">Layout</h2>
        <Image
          src={`${BASE_PATH}layout-1.png`}
          width={1160}
          height={830}
          alt="Layout 1"
          className="mt-10"
        />

        <Image
          src={`${BASE_PATH}layout-2.png`}
          width={1160}
          height={820.5}
          alt="Layout 2"
          className="mt-8"
        />
      </section>
    </>
  )
}
