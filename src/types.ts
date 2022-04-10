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

export type PolymorphicRef<C extends React.ElementType> =
  React.ComponentPropsWithRef<C>['ref']

type PolymorphicComponentPropsWithRef<
  C extends React.ElementType,
  P
> = PolymorphicComponentProps<C, P> & { ref?: PolymorphicRef<C> }

export type PolymorphicComponent<P> = <C extends React.ElementType>(
  props: PolymorphicComponentPropsWithRef<C, P>
) => React.ReactElement<typeof props> | null

export type PolymorphicComponentWithRef<
  C extends React.ElementType,
  P
> = PolymorphicComponentPropsWithRef<C, P>
