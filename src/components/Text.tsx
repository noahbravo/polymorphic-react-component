import React from 'react'

export const Text = ({
  as = 'span',
  children
}: {
  as?: any
  children: React.ReactNode
}) => {
  const Component = as

  return <Component>{children}</Component>
}
