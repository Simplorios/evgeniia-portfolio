'use client'

import React, { RefObject, useEffect, useImperativeHandle, useRef } from 'react'

import clsx from 'clsx'

export type VideoPlayerRef = {
  video: RefObject<HTMLVideoElement>
  player: RefObject<shaka.Player>
}
export type VideoPlayerProps = Omit<React.ComponentProps<'video'>, 'ref'> & {
  ref?: React.Ref<VideoPlayerRef>
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  ref,
  src,
  className,
  poster,
}) => {
  const videoRef = useRef<HTMLVideoElement>()
  const playerRef = useRef<shaka.Player>()

  useImperativeHandle<VideoPlayerRef>(
    ref,
    () => ({
      video: videoRef,
      player: playerRef,
    }),
    [],
  )

  useEffect(() => {
    const init = async () => {
      const shaka = await import('shaka-player')
      // @ts-ignore
      playerRef.current = new shaka.Player(videoRef.current)

      // @ts-ignore
      shaka.polyfill.installAll()
      playerRef.current.load(src).catch(console.error)
    }

    init()

    return () => {
      playerRef.current?.destroy()
    }
  }, [src])

  return (
    <video
      ref={videoRef}
      className={clsx('w-full', className)}
      poster={poster}
      controls={true}
    />
  )
}
