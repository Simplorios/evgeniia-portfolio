import React from 'react'

import Image from 'next/image'

import { ProjectHead } from '~/components/project-head'

const BASE_PATH = '/evgeniia-portfolio/uber/'

export default function Uber() {
  return (
    <>
      <ProjectHead
        title={
          <>
            Uber Georgia
            <br />
            Instagram
          </>
        }
        description="Development of Instagram feed for launching Uber Black in Tbilisi, as part of
                work at Social Animals agency team"
        task="Task: to create an Instagram page based on the main brand book, while expressing the authenticity
                    and spirit of the city of Tbilisi"
        imgSrc={`${BASE_PATH}head.png`}
        imgAlt="Uber"
      />

      <section className="mt-25">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl/[1] md:text-5xl/[1]">Instagram feed</h2>
        </div>
        <div className="mt-10 md:container md:mx-auto md:px-0">
          <Image
            className="w-full"
            src={`${BASE_PATH}feed.png`}
            alt="Uber Feed"
            width={1160}
            height={4204.74}
          />
        </div>
      </section>

      <section className="pt-16 pb-20 md:pt-27.5 md:pb-31.5 bg-primary-grey-background">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-3xl/[1] md:text-5xl/[1]">3D forms</h2>
          <div className="mt-7.5 grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5">
            <Image
              src={`${BASE_PATH}3d-forms-1.png`}
              alt="3d froms 1"
              width={374}
              height={374}
              className="w-full h-auto"
            />
            <Image
              src={`${BASE_PATH}3d-forms-2.png`}
              alt="3d froms 2"
              width={374}
              height={374}
              className="w-full h-auto"
            />
            <Image
              src={`${BASE_PATH}3d-forms-3.png`}
              alt="3d froms 3"
              width={374}
              height={374}
              className="w-full h-auto"
            />
            <Image
              src={`${BASE_PATH}3d-forms-4.png`}
              alt="3d froms 4"
              width={374}
              height={374}
              className="w-full h-auto"
            />
          </div>
        </div>
      </section>
    </>
  )
}
