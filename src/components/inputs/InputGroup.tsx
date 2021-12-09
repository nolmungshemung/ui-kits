import React, { InputHTMLAttributes } from 'react';
import { styled, StitchesProps } from '../../stitches.config';

const StyledInput = styled('input', {
  width: '80%',
  height: '4vh',
  fontSize: '0.7em',
  variants: {},
});

type InputGroupProps = StitchesProps<typeof StyledInput> &
  InputHTMLAttributes<HTMLInputElement>;

function Text(props: InputGroupProps) {
  return <StyledInput {...props} />;
}

function Number(props: InputGroupProps) {
  return <StyledInput {...props} type="number" min="1" />;
}

function Radio(props: InputGroupProps) {
  return <StyledInput {...props} type="radio" />;
}

const InputGroup = {
  Text,
  Number,
  Radio,
};

export default InputGroup;
