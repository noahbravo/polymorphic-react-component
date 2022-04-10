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

type Props<C extends React.ElementType, P> = PolymorphicComponentProps<C, P>

type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref']

type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  P
> = PolymorphicComponentProps<C, P> & { ref?: PolymorphicRef<C> }

type TextComponent = <C extends React.ElementType>(
  props: PolymorphicComponentPropsWithRef<C, {}>
) => React.ReactElement<typeof props> | null

export const Text: TextComponent = React.forwardRef(
  <C extends React.ElementType = 'span'>(
    { as, children, ...restProps }: Props<C, {}>,
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
