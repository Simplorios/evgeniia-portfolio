import React from 'react'

import Image from 'next/image'

import { ProjectHead } from '~/components/project-head'
import { VideoPlayer } from '~/components/video-player/video-player'

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
        imgSrc="/evgeniia-portfolio/say-what/head.png"
        imgAlt="Say What head"
        task="Task: to create an Instagram page based on the main brand book, while expressing the authenticity and spirit of the city of Tbilisi"
        description="Development of Instagram feed for launching Uber Black in Tbilisi, as part of work at “Social Animals” agency team"
      />
      <section className="mt-25 pb-35 mx-auto container">
        <h2 className="text-[3rem]/[1]">Result:</h2>

        <VideoPlayer
          src="/evgeniia-portfolio/say-what/video.mp4"
          className="mt-10"
        />

        <Image
          src="/evgeniia-portfolio/say-what/result-1.png"
          alt="Say What result 1"
          width={1160}
          height={653}
          className="mt-10"
        />
        <Image
          src="/evgeniia-portfolio/say-what/result-2.png"
          alt="Say What result 2"
          width={1160}
          height={947}
        />
        <Image
          src="/evgeniia-portfolio/say-what/result-3.png"
          alt="Say What result 3"
          width={1160}
          height={653}
        />
        <Image
          src="/evgeniia-portfolio/say-what/result-4.png"
          alt="Say What result 4"
          width={1160}
          height={519}
        />
        <Image
          src="/evgeniia-portfolio/say-what/result-5.png"
          alt="Say What result 5"
          width={1160}
          height={988}
        />
      </section>
    </>
  )
}
