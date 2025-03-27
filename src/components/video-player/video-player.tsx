'use client'

import React, { RefObject, useEffect, useImperativeHandle, useRef } from 'react'

import clsx from 'clsx'

export type VideoPlayerRef = {
  video: RefObject<HTMLVideoElement | null>
  player: RefObject<shaka.Player | null>
}
export type VideoPlayerProps = Omit<
  React.ComponentProps<'video'>,
  'ref' | 'src'
> & {
  src: string
  ref?: React.Ref<VideoPlayerRef>
}

export const VideoPlayer: React.FC<VideoPlayerProps> = ({
  ref,
  src,
  className,
  poster,
}) => {
  const videoRef = useRef<HTMLVideoElement | null>(null)
  const playerRef = useRef<shaka.Player | null>(null)

  useImperativeHandle<VideoPlayerRef, VideoPlayerRef>(
    ref,
    () => ({
      video: videoRef,
      player: playerRef,
    }),
    [],
  )

  useEffect(() => {
    const init = async () => {
      //@ts-expect-error Can't resolve types https://github.com/shaka-project/shaka-player/issues/6442
      const shaka = await import('shaka-player/dist/shaka-player.compiled')

      playerRef.current = new shaka.Player(videoRef.current)

      shaka.polyfill.installAll()
      playerRef.current?.load(src).catch(console.error)
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
