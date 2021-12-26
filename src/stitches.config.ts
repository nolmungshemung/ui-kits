import { createStitches, CSS } from '@stitches/react';

export const { styled, css, getCssText } = createStitches({
  media: {
    xs: '(min-width: 320px)',
    sm: '(min-width: 540px)',
    md: '(min-width: 720px)',
    lg: '(min-width: 960px)',
    xl: '(min-width: 1140px)',
    xxl: '(min-width: 1280px)',
  },
  theme: {
    colors: {},
  },
});

export type StitchesProps<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = CSS & React.ComponentProps<T>;
