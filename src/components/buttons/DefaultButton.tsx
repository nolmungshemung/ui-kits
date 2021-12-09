import React, { ButtonHTMLAttributes } from 'react';
import { styled, StitchesProps } from '../../stitches.config';

const StyledDefaultButton = styled('button', {
  backgroundColor: '$s_CyanBlue',
});

type DefaultButtonProps = StitchesProps<typeof StyledDefaultButton> &
  ButtonHTMLAttributes<HTMLButtonElement>;

function DefaultButton(props: DefaultButtonProps) {
  return <StyledDefaultButton {...props} />;
}

export default DefaultButton;
