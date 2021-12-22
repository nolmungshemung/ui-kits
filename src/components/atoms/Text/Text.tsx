import React from 'react';
import { StitchesProps, styled } from '../../../stitches.config';

const DEFAULT_TAG = 'div';

const StyledText = styled(DEFAULT_TAG, {
  color: '$black',
  fontFamily: 'Noto Sans KR, sans-serif',
});

type TextProps = StitchesProps<typeof StyledText> &
  JSX.IntrinsicElements[typeof DEFAULT_TAG];

const Text = (props: TextProps) => {
  const { children } = props;
  return <StyledText>{children}</StyledText>;
};

export default Text;
