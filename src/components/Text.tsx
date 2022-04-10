import React from 'react'
import {
  PolymorphicComponent,
  PolymorphicComponentWithRef,
  PolymorphicRef
} from '../types'

type TextProps = {}

export const Text: PolymorphicComponent<TextProps> = React.forwardRef(
  <C extends React.ElementType = 'span'>(
    { as, children, ...restProps }: PolymorphicComponentWithRef<C, TextProps>,
    ref?: PolymorphicRef<C>
  ) => {
    const Component = as || 'span'

    return (
      <Component ref={ref} {...restProps}>
        {children}
      </Component>
    )
  }
)
