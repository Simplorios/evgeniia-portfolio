import React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, VariantProps } from 'class-variance-authority'
import clsx from 'clsx'

const buttonVariants = cva(
  "text-primary-foreground shadow-xs inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[40] transition-[color,box-shadow] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      size: {
        sm: 'h-10 px-6 font-bold',
        m: 'h-16 px-15 text-2xl font-bold rounded-lg',
        l: 'h-25 px-15 text-2xl rounded-lg',
      },
      color: {
        default: 'bg-primary hover:bg-primary/90',
        graphite: 'bg-graphite hover:bg-graphite/90',
      },
    },
    defaultVariants: {
      size: 'sm',
      color: 'default',
    },
  },
)

type ButtonProps = React.ComponentProps<'button'> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
  }

export const Button: React.FC<ButtonProps> = ({
  children,
  className,
  size,
  color,
  asChild,
  ...other
}) => {
  const Comp = asChild ? Slot : 'button'

  return (
    <Comp
      data-slot="button"
      className={clsx(buttonVariants({ size, color, className }))}
      {...other}
    >
      {children}
    </Comp>
  )
}
