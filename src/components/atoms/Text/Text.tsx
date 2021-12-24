import React from 'react';
import {
  StitchesProps,
  styled,
  StitchesMediaTokens,
  StitchesColorTokens,
  StitchesFontWeightTokens,
} from '../../../stitches.config';
import { ForwardRefComponent } from '../../../types/polymorphic';

const DEFAULT_TAG = 'span';

const StyledText = styled(DEFAULT_TAG, {
  fontFamily: '$noto',
  fontSize: '$ft-16',
  fontWeight: '$regular',
  fontStyle: 'normal',
  variants: {
    color: {
      gray: { color: '$gray' },
      darkgray: { color: '$d_gray' },
    },
    size: {
      xs: { fontSize: '$ft-12', lineHeight: '$base' },
      sm: { fontSize: '$ft-14', lineHeight: '$base' },
      md: { fontSize: '$ft-16', lineHeight: '$base' },
      lg: { fontSize: '$ft-18', lineHeight: '$lg' },
      xl: { fontSize: '$ft-20', lineHeight: '$lg' },
    },
    weight: {
      thin: { fontWeight: '$thin' },
      regular: { fontWeight: '$regular' },
      medium: { fontWeight: '$medium' },
      bold: { fontWeight: '$bold' },
    },
  },
  defaultVariants: {
    size: 'md',
    weight: 'regular',
  },
});

type TextVariants = {
  color?: StitchesColorTokens;
  size?: StitchesMediaTokens;
  weight?: StitchesFontWeightTokens;
};

type TextProps = StitchesProps<typeof StyledText> &
  JSX.IntrinsicElements[typeof DEFAULT_TAG] &
  TextVariants;

const Text: ForwardRefComponent<typeof DEFAULT_TAG, TextProps> =
  React.forwardRef(function styledTextComponent(props, ref) {
    return <StyledText {...props} ref={ref} />;
  });

export default Text;
