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

      <section className="container mx-auto mt-25">
        <h2 className="text-5xl/[1]">Instagram feed</h2>
        <Image
          className="mt-10"
          src={`${BASE_PATH}feed.png`}
          alt="Uber Feed"
          width={1160}
          height={4204.74}
        />
      </section>

      <section className="pt-27.5 pb-31.5 bg-primary-grey-background">
        <div className="container mx-auto">
          <h2 className="text-5xl/[1]">3D forms</h2>
          <div className="mt-7.5 grid grid-cols-3 grid-rows-2 gap-5">
            <Image
              className="col-1 row-1"
              src={`${BASE_PATH}3d-forms-1.png`}
              alt="3d froms 1"
              width={374}
              height={374}
            />
            <Image
              className="col-1 row-2"
              src={`${BASE_PATH}3d-forms-2.png`}
              alt="3d froms 2"
              width={374}
              height={374}
            />
            <Image
              className="col-2 row-2"
              src={`${BASE_PATH}3d-forms-3.png`}
              alt="3d froms 3"
              width={374}
              height={374}
            />
            <Image
              className="col-3 row-2"
              src={`${BASE_PATH}3d-forms-4.png`}
              alt="3d froms 4"
              width={374}
              height={374}
            />
          </div>
        </div>
      </section>
    </>
  )
}
