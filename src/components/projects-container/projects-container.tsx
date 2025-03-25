import React from 'react'

import clsx from 'clsx'

type ProjectsContainerProps = React.ComponentProps<'section'>

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={clsx('py-5 grid grid-flow-col auto-cols-fr gap-10', className)}
      {...props}
    />
  )
}
