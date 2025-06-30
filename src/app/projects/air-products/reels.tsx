'use client'

import React, { useEffect, useRef } from 'react'

import { EmblaCarouselType } from 'embla-carousel'

import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
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
  const [current, setCurrent] = React.useState(0)
  const refs = useRef<(VideoPlayerRef | null)[]>([])

  useEffect(() => {
    if (!api) return
    const cb = async (emblaApi: EmblaCarouselType) => {
      const prev = emblaApi.previousScrollSnap()
      const currentIndex = emblaApi.selectedScrollSnap()
      setCurrent(currentIndex)

      const prevVideo = refs.current[prev]?.video.current
      const currentVideo = refs.current[currentIndex]?.video.current

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

  const scrollTo = (index: number) => {
    api?.scrollTo(index)
  }

  return (
    <div className="relative">
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
      </Carousel>

      {/* Mobile navigation - dots */}
      <div className="flex justify-center mt-4 gap-2 md:hidden">
        {reels.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollTo(index)}
            className={`w-2 h-2 rounded-full transition-colors ${
              index === current ? 'bg-primary' : 'bg-primary-grey'
            }`}
          />
        ))}
      </div>

      {/* Desktop navigation - arrows */}
      <div className="hidden md:flex justify-center mt-4 gap-4">
        <button
          onClick={() => scrollTo(current > 0 ? current - 1 : reels.length - 1)}
          className="w-12 h-12 rounded-full bg-gray-300 hover:bg-primary flex items-center justify-center transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10 12L6 8L10 4"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button
          onClick={() => scrollTo(current < reels.length - 1 ? current + 1 : 0)}
          className="w-12 h-12 rounded-full bg-gray-300 hover:bg-primary flex items-center justify-center transition-colors"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 4L10 8L6 12"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
