import React from 'react'

import { ImageProps } from 'next/dist/shared/lib/get-img-props'
import { getImageProps } from 'next/image'
import Link, { LinkProps } from 'next/link'

import clsx from 'clsx'

import { Tag } from '~/components/tag'

type CardProps = {
  children: React.ReactNode
  imgProps: Omit<ImageProps, 'alt'> & Partial<Pick<ImageProps, 'alt'>>
  linkProps: Pick<LinkProps, 'href'>
}

type CardTagProps = {
  tags: string[]
  position?: 'center'
}

type CardTitleProps = {
  children: React.ReactNode
  color?: 'black' | 'white'
  position?: 'center'
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

const titleVariants = {
  colors: {
    white: 'text-white',
    black: 'text-primary',
  },
  positions: {
    center: 'text-center',
  },
}

export const CardTitle: React.FC<CardTitleProps> = ({
  children,
  position,
  color = 'black',
}) => {
  return (
    <p
      className={clsx(
        'text-[2.625rem]/[0.86]',
        titleVariants.colors[color],
        titleVariants.positions[position],
      )}
    >
      {children}
    </p>
  )
}

const tagsVariants = {
  positions: {
    center: 'justify-center',
  },
}

export const CardTags: React.FC<CardTagProps> = ({ tags, position }) => {
  return (
    <div
      className={clsx(
        'mt-3 grid grid-flow-col auto-cols-max gap-3',
        tagsVariants.positions[position],
      )}
    >
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
