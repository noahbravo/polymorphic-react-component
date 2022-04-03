import React from 'react'

type TextProps<C extends React.ElementType> = {
  as?: C | 'span'
  children: React.ReactNode
} & React.ComponentPropsWithoutRef<C>

export const Text = <C extends React.ElementType>({
  as = 'span',
  children,
  ...restProps
}: TextProps<C>) => {
  const Component = as

  return <Component {...restProps}>{children}</Component>
}
