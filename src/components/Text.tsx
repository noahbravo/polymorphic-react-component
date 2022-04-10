import React from 'react'

type AsProp<C extends React.ElementType> = {
  as?: C
}

type PropsToOmit<C extends React.ElementType, P> = keyof (AsProp<C> & P)

type PolymorphicComponentProps<
  C extends React.ElementType,
  Props = {}
> = React.PropsWithChildren<
  AsProp<C> & Omit<React.ComponentPropsWithoutRef<C>, PropsToOmit<C, Props>>
>

export const Text = <C extends React.ElementType = 'span'>({
  as,
  children,
  ...restProps
}: PolymorphicComponentProps<C>) => {
  const Component = as || 'span'

  return <Component {...restProps}>{children}</Component>
}
