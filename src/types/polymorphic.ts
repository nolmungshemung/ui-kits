/* eslint-disable @typescript-eslint/no-shadow */
type Merge<T, K> = Omit<T, keyof K> & K;

type OwnProps<E> = E extends ForwardRefComponent<any, infer P>
  ? P
  : Record<string, any>;

type IntrinsicElement<E> = E extends ForwardRefComponent<infer I, any>
  ? I
  : never;

type ForwardRefExoticComponent<E, OwnProps> = React.ForwardRefExoticComponent<
  Merge<
    E extends React.ElementType ? React.ComponentPropsWithRef<E> : never,
    OwnProps & { as?: E }
  >
>;

interface ForwardRefComponent<
  IntrinsicElementString,
  OwnProps = Record<string, any>,
> extends ForwardRefExoticComponent<IntrinsicElementString, OwnProps> {
  <As = IntrinsicElementString>(
    props: As extends ''
      ? { as: keyof JSX.IntrinsicElements }
      : As extends React.ComponentType<infer P>
      ? Merge<P, OwnProps & { as: As }>
      : As extends keyof JSX.IntrinsicElements
      ? Merge<JSX.IntrinsicElements[As], OwnProps & { as: As }>
      : never,
  ): React.ReactElement | null;
}

export type { ForwardRefComponent, OwnProps, IntrinsicElement, Merge };
