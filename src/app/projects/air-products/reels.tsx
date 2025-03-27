'use client'

import React, { useEffect, useRef } from 'react'

import { EmblaCarouselType } from 'embla-carousel/components/EmblaCarousel'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '~/components/carousel'
import {
  VideoPlayer,
  VideoPlayerRef,
} from '~/components/video-player/video-player'

function isVideoPlaying(videoElement: HTMLVideoElement) {
  return (
    videoElement.currentTime > 0 &&
    !videoElement.paused &&
    !videoElement.ended &&
    videoElement.readyState > 2
  )
}

const reels = [
  '/evgeniia-portfolio/air-products/reels-1.mp4',
  '/evgeniia-portfolio/air-products/reels-2.mp4',
  '/evgeniia-portfolio/air-products/reels-3.mp4',
]

export const Reels = () => {
  const [api, setApi] = React.useState<CarouselApi>()
  const refs = useRef<(VideoPlayerRef | null)[]>([])

  useEffect(() => {
    if (!api) return
    const cb = async (emblaApi: EmblaCarouselType) => {
      const prev = emblaApi.previousScrollSnap()
      const current = emblaApi.selectedScrollSnap()

      const prevVideo = refs.current[prev]?.video.current
      const currentVideo = refs.current[current]?.video.current

      if (prevVideo) {
        if (isVideoPlaying(prevVideo)) prevVideo.pause()
        prevVideo.currentTime = 0
      }

      if (currentVideo) {
        await currentVideo.play()
      }
    }

    api.on('select', cb)
    return () => {
      api.off('select', cb)
    }
  }, [api])

  return (
    <Carousel setApi={setApi} className="mt-10 mx-auto w-full max-w-[358px]">
      <CarouselContent>
        {reels.map((r, index) => {
          return (
            <CarouselItem key={index}>
              <VideoPlayer
                ref={r => {
                  refs.current.push(r)
                }}
                src={r}
              />
            </CarouselItem>
          )
        })}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  )
}
