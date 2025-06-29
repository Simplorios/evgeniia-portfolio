import React from 'react'

import Image from 'next/image'

import { ProjectHead } from '~/components/project-head'
import { VideoPlayer } from '~/components/video-player'

const BASE_PATH = '/evgeniia-portfolio/pepsico/'

export default function PepsiCo() {
  return (
    <>
      <ProjectHead
        title={
          <>
            Web Game for PepsiCo
            <br />
            Internship Recruitment
          </>
        }
        imgSrc={`${BASE_PATH}head.png`}
        imgAlt="Pepsi head"
        task="To design a web game in line with PepsiCo’s visual identity, develop illustrations, and create animations for further implementation"
        description="Creation a web game for PepsiCo Kazakhstan to attract students to the company's internship program, as part of work at “makelove” agency team"
      />
      <section className="mt-25">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-[3rem]/[1]">Result:</h2>
        </div>
        <div className="mt-10 md:container md:mx-auto md:px-0">
          <VideoPlayer
            src={`${BASE_PATH}video.mp4`}
            poster={`${BASE_PATH}video.jpg`}
            className="w-full"
          />
        </div>
      </section>

      <section className="mt-10 pt-10 pb-35 bg-primary-grey-background">
        <div className="md:container md:mx-auto md:px-0 grid grid-flow-rows gap-y-10 justify-center">
          <Image
            src={`${BASE_PATH}task-1.png`}
            alt="Pepsico task 1"
            width={1160}
            height={653}
            className="w-full"
          />
          <Image
            src={`${BASE_PATH}task-2.png`}
            alt="Pepsico task 2"
            width={1160}
            height={653}
            className="w-full"
          />
          <Image
            src={`${BASE_PATH}task-3.png`}
            alt="Pepsico task 3"
            width={1160}
            height={653}
            className="w-full"
          />
          <Image
            src={`${BASE_PATH}task-4.png`}
            alt="Pepsico task 4"
            width={1160}
            height={653}
            className="w-full"
          />
          <Image
            src={`${BASE_PATH}task-5.png`}
            alt="Pepsico task 5"
            width={1160}
            height={653}
            className="w-full"
          />
          <Image
            src={`${BASE_PATH}task-6.png`}
            alt="Pepsico task 6"
            width={1160}
            height={653}
            className="w-full"
          />
        </div>
      </section>
    </>
  )
}
