'use client'

import React, { ReactEventHandler, useEffect, useRef } from 'react'

import clsx from 'clsx'

export const VideoLoop: React.FC<React.ComponentProps<'video'>> = ({
  className,
  ...props
}) => {
  const ref = useRef<HTMLVideoElement>(null)

  const handleEnded: ReactEventHandler<HTMLVideoElement> = event => {
    event.currentTarget.currentTime = 0.01
    event.currentTarget.play()
  }

  useEffect(() => {
    const video = ref.current
    if (!video) return

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            video.play().catch(e => {
              console.log('Autoplay prevented:', e)
            })
          } else {
            video.pause()
          }
        })
      },
      {
        threshold: 0.2,
      },
    )

    observer.observe(video)

    return () => {
      observer.disconnect()
      video.pause()
    }
  }, [])

  return (
    <video
      {...props}
      ref={ref}
      className={clsx('object-cover', className)}
      muted={true}
      playsInline={true}
      onEnded={handleEnded}
    />
  )
}
