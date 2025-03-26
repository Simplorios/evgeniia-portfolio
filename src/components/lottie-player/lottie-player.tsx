'use client'

import React, { useEffect, useState } from 'react'

import { AnimationConfigWithPath, RendererType } from 'lottie-web'

export type LottiePlayerProps<T extends RendererType = 'svg'> = Omit<
  React.ComponentProps<'div'>,
  'ref'
> &
  Omit<AnimationConfigWithPath<T>, 'container'>

export const LottiePlayer: React.FC<LottiePlayerProps> = ({
  path,
  part,
  loop,
  name,
  autoplay,
  initialSegment,
  assetsPath,
  rendererSettings,
  renderer,
  ...props
}) => {
  const [containerRef, setContainerRef] = useState<HTMLDivElement>()

  useEffect(() => {
    if (!containerRef) return

    const render = async () => {
      const lottie = await import('lottie-web').then(mod => mod.default)

      lottie.loadAnimation({
        container: containerRef,
        path,
        name,
        autoplay,
        initialSegment,
        assetsPath,
        rendererSettings,
        loop,
        renderer,
      })
    }

    render()
  }, [
    containerRef,
    path,
    name,
    autoplay,
    initialSegment,
    assetsPath,
    rendererSettings,
    loop,
    renderer,
  ])
  return <div ref={r => setContainerRef(r)} {...props} />
}
