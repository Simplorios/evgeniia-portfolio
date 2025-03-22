import React from 'react'

type TagProps = {
  children: React.ReactNode
}

export const Tag: React.FC<TagProps> = ({ children }) => {
  return (
    <span className="px-3 py-2.5 text-lg/[0.83] text-primary-tag bg-primary rounded-lg">
      {children}
    </span>
  )
}
