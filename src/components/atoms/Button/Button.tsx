import React from 'react';
import { styled, StitchesProps } from '../../../stitches.config';
import { ForwardRefComponent } from '../../../types/polymorphic';

const DEFAULT_TAG = 'button';

const StyledButton = styled(DEFAULT_TAG, {
  backgroundColor: '$s_CyanBlue',
});

type ButtonProps = StitchesProps<typeof StyledButton> &
  JSX.IntrinsicElements[typeof DEFAULT_TAG];

const Button: ForwardRefComponent<typeof DEFAULT_TAG, ButtonProps> =
  React.forwardRef(function styledButtonComponent({ className, ...rest }, ref) {
    return <StyledButton {...rest} ref={ref} className={className} />;
  });

export default Button;
