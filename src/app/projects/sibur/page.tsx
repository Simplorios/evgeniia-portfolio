import React from 'react'

import Image from 'next/image'

import { Button } from '~/components/button'
import { ProjectHead } from '~/components/project-head'

export default function Sibur() {
  return (
    <>
      <ProjectHead
        title={
          <>
            Promo materials for Sibur
            <br />
            employer brand
          </>
        }
        imgSrc="/evgeniia-portfolio/sibur/head.png"
        imgAlt="Sibur head"
        task="Task: to create an identity for Sibur strong employer brand and make it recognizable with catchy promo materials"
        description="This project is part of the work in the “makelove” agency team to develop a employer brand for the leading petrochemical company"
      />
      <section className="mt-25 mx-auto container">
        <h2 className="text-[3rem]/[1]">Result:</h2>
        <div className="mt-10 pb-35 grid grid-flow-row gap-y-10">
          <Image
            src="/evgeniia-portfolio/sibur/result-1.png"
            alt="Sibur result 1"
            width={1160}
            height={652.5}
          />
          <Image
            src="/evgeniia-portfolio/sibur/result-2.png"
            alt="Sibur result 2"
            width={1160}
            height={652.5}
          />
          <Image
            src="/evgeniia-portfolio/sibur/result-3.png"
            alt="Sibur result 3"
            width={1160}
            height={652.5}
          />
          <Button size="l" asChild={true}>
            <a
              href="https://makeloveagency.com/ru/cases/sibur_mendeleev"
              rel="noopener,noreferrer"
              target="_blank"
            >
              See result
            </a>
          </Button>
        </div>
      </section>
    </>
  )
}
