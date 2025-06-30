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
    <section className="container mx-auto mt-13.5 px-4 md:px-0">
      <h1 className="text-[2.5rem]/[1] md:text-[4.25rem]/[1]">{title}</h1>
      <div className="mt-12.5 grid grid-cols-1 md:grid-cols-2 md:grid-rows-2 gap-6 md:gap-x-10">
        <Image
          src={imgSrc}
          alt={imgAlt}
          width={559}
          height={524}
          className="rounded-xl md:row-span-2 w-full"
        />
        <p className="text-[1.25rem]/[2rem] md:text-[1.75rem]/[2rem]">
          {description}
        </p>
        <div className="px-6 py-8 md:px-10 md:py-11 md:self-end rounded-xl bg-primary">
          <p className="text-[1.25rem]/[2rem] md:text-[1.75rem]/[2rem] text-primary-foreground">
            {task}
          </p>
        </div>
      </div>
    </section>
  )
}
