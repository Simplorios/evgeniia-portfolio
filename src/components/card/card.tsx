import React from 'react'

import { ImageProps } from 'next/dist/shared/lib/get-img-props'
import { getImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'

import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'

import { Tag } from '~/components/tag'

type CardProps = {
  children: React.ReactNode
  imgProps: Omit<ImageProps, 'alt'> & Partial<Pick<ImageProps, 'alt'>>
  linkProps: Pick<LinkProps, 'href'>
}

function getBackgroundImage(srcSet = '') {
  const imageSet = srcSet
    .split(', ')
    .map(str => {
      const [url, dpi] = str.split(' ')
      return `url("${url}") ${dpi}`
    })
    .join(', ')
  return `image-set(${imageSet})`
}

const titleVariants = cva('text-[2.625rem]/[0.86]', {
  variants: {
    color: {
      default: 'text-primary',
      white: 'text-white',
    },
    position: {
      center: 'text-center',
    },
  },
  defaultVariants: {
    color: 'default',
  },
})

type CardTitleProps = {
  children: React.ReactNode
} & VariantProps<typeof titleVariants>

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  position,
  color,
}) => {
  return <p className={clsx(titleVariants({ position, color }))}>{children}</p>
}

const tagsVariants = cva('mt-3 grid grid-flow-col auto-cols-max gap-3', {
  variants: {
    position: {
      center: 'justify-center',
    },
  },
})

type CardTagProps = {
  tags: string[]
} & VariantProps<typeof tagsVariants>

export const CardTags: React.FC<CardTagProps> = ({ tags, position }) => {
  return (
    <div className={clsx(tagsVariants({ position }))}>
      {tags.map(tag => (
        <Tag key={tag}>{tag}</Tag>
      ))}
    </div>
  )
}

export const Card: React.FC<CardProps> = ({
  children,
  imgProps,
  linkProps,
}) => {
  const {
    props: { srcSet },
  } = getImageProps({ alt: '', ...imgProps })
  const backgroundImage = getBackgroundImage(srcSet)

  return (
    <Link
      className={`h-131 px-7.5 py-6 rounded-xl bg-no-repeat bg-cover bg-center transition duration-100 ease-in-out hover:scale-102`}
      style={{ backgroundImage }}
      href={linkProps.href}
    >
      {children}
    </Link>
  )
}
