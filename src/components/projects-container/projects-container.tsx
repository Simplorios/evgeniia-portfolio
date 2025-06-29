import React from 'react'

import clsx from 'clsx'

type ProjectsContainerProps = React.ComponentProps<'section'>

export const ProjectsContainer: React.FC<ProjectsContainerProps> = ({
  className,
  ...props
}) => {
  return (
    <section
      className={clsx(
        'py-5 grid grid-cols-1 md:grid-flow-col md:auto-cols-fr gap-10',
        className,
      )}
      {...props}
    />
  )
}
