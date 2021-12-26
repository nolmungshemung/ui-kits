import React from 'react';
import { styled, StitchesProps } from '../../../stitches.config';
import { ForwardRefComponent } from '../../../types/polymorphic';

const DEFAULT_TAG = 'div';

const StyledBox = styled(DEFAULT_TAG, {
  boxSizing: 'border-box',
});

type BoxProps = StitchesProps<typeof StyledBox> &
  JSX.IntrinsicElements[typeof DEFAULT_TAG];

const Box: ForwardRefComponent<typeof DEFAULT_TAG, BoxProps> = React.forwardRef(
  function styledBoxComponent({ ...rest }, ref) {
    return <StyledBox {...rest} ref={ref} />;
  },
);

export default Box;
