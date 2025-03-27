import React from 'react'

import Image from 'next/image'

import { Reels } from '~/app/projects/air-products/reels'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/carousel'
import { ProjectHead } from '~/components/project-head'
import { VideoPlayer } from '~/components/video-player/video-player'

export default function AirProducts() {
  return (
    <>
      <ProjectHead
        title="Air Products social media"
        imgSrc="/evgeniia-portfolio/air-products/head.png"
        imgAlt="Air Products head"
        task="Task: to create social networks style based on the main brand book, and to lead further all visual components of the brand"
        description="Development and management of Instagram, Telegram and LinkedIn for the American multinational gases corporation, as part of work at “Social Animals” agency team"
      />
      <section className="mt-25 pb-20 mx-auto container">
        <h2 className="text-[3rem]/[1]">Instagram feed</h2>
        <Image
          className="mt-10"
          src="/evgeniia-portfolio/air-products/feed.jpg"
          alt="Air Products feed"
          width={1160}
          height={3099}
        />
      </section>
      <section className="bg-primary-grey-background">
        <div className="mx-auto container pt-27.5 pb-29.75">
          <h2 className="text-[3rem]/[1]">Reels</h2>

          <Reels />
        </div>
      </section>
      <section className="mt-14 mx-auto container">
        <h2 className="text-[3rem]/[1]">Reels</h2>
        <div className="mt-10 pb-35 grid grid-cols-4 grid-rows-2 gap-x-2 gap-y-10 justify-between">
          <Image
            src="/evgeniia-portfolio/air-products/post-1.png"
            alt="Air Products post 1"
            width={284}
            height={284}
          />
          <Image
            src="/evgeniia-portfolio/air-products/post-2.png"
            alt="Air Products post 2"
            width={284}
            height={284}
          />
          <Image
            src="/evgeniia-portfolio/air-products/post-3.png"
            alt="Air Products post 3"
            width={284}
            height={284}
          />
          <Image
            src="/evgeniia-portfolio/air-products/post-4.png"
            alt="Air Products post 4"
            width={284}
            height={284}
          />
          <Image
            src="/evgeniia-portfolio/air-products/post-5.png"
            alt="Air Products post 5"
            width={284}
            height={284}
          />
          <Image
            src="/evgeniia-portfolio/air-products/post-6.png"
            alt="Air Products post 6"
            width={284}
            height={284}
          />
          <Image
            src="/evgeniia-portfolio/air-products/post-7.png"
            alt="Air Products post 7"
            width={284}
            height={284}
          />
          <Image
            src="/evgeniia-portfolio/air-products/post-8.png"
            alt="Air Products post 8"
            width={284}
            height={284}
          />
        </div>
      </section>
    </>
  )
}
