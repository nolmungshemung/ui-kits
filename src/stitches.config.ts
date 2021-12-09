import { createStitches, CSS } from '@stitches/react';

export const { styled, css, getCssText } = createStitches({
  media: {
    mobile_m: '(min-width: 375px)',
    mobile_l: '(min-width: 425px)',
    tablet: '(min-width: 768px)',
    pc: '(min-width: 1024px)',
  },
  theme: {
    colors: {
      black: '#000000',
      white: '#FFFFFF',
      red: '#ff0000',
      yellow: '#ffff00',
      green: '#008000',
      greenYellow: '#ADFF2F',
      mint: '#BDFCC9',
      s_CyanBlue: '#3498db',
      greenCyan: '#2ecc71',
    },
  },
});

export type StitchesProps<
  T extends keyof JSX.IntrinsicElements | React.JSXElementConstructor<any>,
> = CSS & React.ComponentProps<T>;
