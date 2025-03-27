import React from 'react'

import { ImageProps } from 'next/dist/shared/lib/get-img-props'
import Image from 'next/image'

type ProjectHeadProps = {
  title: React.ReactNode
  description: React.ReactNode
  task: React.ReactNode
  imgSrc: ImageProps['src']
  imgAlt: ImageProps['alt']
}

export const ProjectHead: React.FC<ProjectHeadProps> = ({
  title,
  description,
  task,
  imgSrc,
  imgAlt,
}) => {
  return (
    <section className="container mx-auto mt-13.5">
      <h1 className="text-[4.25rem]/[1]">{title}</h1>
      <div className="mt-12.5 grid grid-cols-2 grid-rows-2 gap-x-10">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={559}
          height={524}
          className="rounded-xl row-span-2"
        />
        <p className="text-[1.75rem]/[1]">{description}</p>
        <div className="px-10 py-11 self-end rounded-xl bg-primary">
          <p className="text-[1.75rem]/[1] text-primary-foreground">{task}</p>
        </div>
      </div>
    </section>
  )
}
