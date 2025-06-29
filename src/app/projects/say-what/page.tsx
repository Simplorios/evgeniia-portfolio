import React from 'react'

import Image from 'next/image'

import { ProjectHead } from '~/components/project-head'
import { VideoLoop } from '~/components/video-loop'
import { VideoPlayer } from '~/components/video-player/video-player'

const BASE_PATH = '/evgeniia-portfolio/say-what/'

export default function Page() {
  return (
    <>
      <ProjectHead
        title={
          <>
            Branding
            <br />
            for sports store
          </>
        }
        imgSrc={`${BASE_PATH}head.png`}
        imgAlt="Say What head"
        task="Task: to create an Instagram page based on the main brand book, while expressing the authenticity and spirit of the city of Tbilisi"
        description="Development of Instagram feed for launching Uber Black in Tbilisi, as part of work at “Social Animals” agency team"
      />
      <section className="mt-25 pb-35">
        <div className="container mx-auto px-4 md:px-0">
          <h2 className="text-[3rem]/[1]">Result:</h2>
        </div>

        <div className="mt-10 md:container md:mx-auto md:px-0 space-y-0">
          <VideoPlayer
            src={`${BASE_PATH}video-1.mp4`}
            poster={`${BASE_PATH}video-1.jpg`}
            className="w-full"
          />

          <Image
            src={`${BASE_PATH}result-1.png`}
            alt="Say What result 1"
            width={1160}
            height={653}
            className="w-full"
          />
          <Image
            src={`${BASE_PATH}result-2.png`}
            alt="Say What result 2"
            width={1160}
            height={947}
            className="w-full"
          />
          <VideoLoop src={`${BASE_PATH}video-2.mp4`} className="w-full" />
          <Image
            src={`${BASE_PATH}result-4.png`}
            alt="Say What result 4"
            width={1160}
            height={519}
            className="w-full"
          />
          <Image
            src={`${BASE_PATH}result-5.png`}
            alt="Say What result 5"
            width={1160}
            height={988}
            className="w-full"
          />
        </div>
      </section>
    </>
  )
}
