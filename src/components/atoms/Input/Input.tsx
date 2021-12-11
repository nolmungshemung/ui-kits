import React, { forwardRef } from 'react';
import { styled, StitchesProps } from '../../../stitches.config';
import { ForwardRefComponent } from '../../../types/polymorphic';

const DEFAULT_TAG = 'input';

const StyledInput = styled(DEFAULT_TAG, {
  width: '80%',
  height: '4vh',
  fontSize: '0.7em',
  variants: {},
});

type InputProps = StitchesProps<typeof StyledInput> &
  JSX.IntrinsicElements[typeof DEFAULT_TAG];

const Text: ForwardRefComponent<typeof DEFAULT_TAG, InputProps> = forwardRef(
  function styledInputTextComponent({ className, ...rest }, ref) {
    return <StyledInput {...rest} ref={ref} className={className} />;
  },
);

const Number: ForwardRefComponent<typeof DEFAULT_TAG, InputProps> = forwardRef(
  function styledInputNumberComponent({ className, ...rest }, ref) {
    return (
      <StyledInput
        {...rest}
        ref={ref}
        className={className}
        type="number"
        min="1"
      />
    );
  },
);

const Radio: ForwardRefComponent<typeof DEFAULT_TAG, InputProps> = forwardRef(
  function styledInputRadioComponent({ className, ...rest }, ref) {
    return (
      <StyledInput {...rest} ref={ref} className={className} type="radio" />
    );
  },
);

const Input = {
  Text,
  Number,
  Radio,
};

export default Input;
