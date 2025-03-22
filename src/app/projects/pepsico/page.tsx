import React from 'react'

import Image from 'next/image'

import { ProjectHead } from '~/components/project-head'

export default function PepsiCo() {
  return (
    <>
      <ProjectHead
        title="Web Game for PepsiCo Internship Recruitment"
        imgSrc="/pepsico/head.png"
        imgAlt="Pepsi head"
        task="To design a web game in line with PepsiCo’s visual identity, develop illustrations, and create animations for further implementation"
        description="Creation a web game for PepsiCo Kazakhstan to attract students to the company's internship program, as part of work at “makelove” agency team"
      />
      <section className="mt-25 mx-auto container">
        <h2 className="text-[3rem]/[1]">Result:</h2>
        <Image
          className="mt-10 mx-auto"
          src="/pepsico/result.png"
          alt="Pepsico result"
          width={1160}
          height={653}
        />
      </section>

      <section className="mt-10 pt-10 pb-35 bg-primary-grey-background">
        <div className="container mx-auto grid grid-flow-rows gap-y-10 justify-center">
          <Image
            src="/pepsico/task-1.png"
            alt="Pepsico task 1"
            width={1160}
            height={653}
          />
          <Image
            src="/pepsico/task-2.png"
            alt="Pepsico task 2"
            width={1160}
            height={653}
          />
          <Image
            src="/pepsico/task-3.png"
            alt="Pepsico task 3"
            width={1160}
            height={653}
          />
          <Image
            src="/pepsico/task-4.png"
            alt="Pepsico task 4"
            width={1160}
            height={653}
          />
          <Image
            src="/pepsico/task-5.png"
            alt="Pepsico task 5"
            width={1160}
            height={653}
          />
          <Image
            src="/pepsico/task-6.png"
            alt="Pepsico task 6"
            width={1160}
            height={653}
          />
        </div>
      </section>
    </>
  )
}
