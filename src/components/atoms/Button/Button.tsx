import React from 'react';
import { styled, StitchesProps } from '../../../stitches.config';
import { ForwardRefComponent } from '../../../types/polymorphic';

const DEFAULT_TAG = 'button';

const StyledButton = styled(DEFAULT_TAG, {
  borderRadius: '2px',
  border: 'none',
  lineHeight: '$base',
  fontWeight: 'regular',
  fontFamily: '$noto',
  variants: {
    size: {
      xs: {
        height: '$height-xs',
        paddingLeft: '$sp-04',
        paddingRight: '$sp-04',
        fontSize: '$ft-12',
      },
      sm: {
        height: '$height-sm',
        paddingLeft: '$sp-06',
        paddingRight: '$sp-06',
        fontSize: '$ft-12',
      },
      md: {
        height: '$height-md',
        paddingLeft: '$sp-08',
        paddingRight: '$sp-08',
        fontSize: '$ft-13',
      },
      lg: {
        height: '$height-lg',
        paddingLeft: '$sp-12',
        paddingRight: '$sp-12',
        fontSize: '$ft-14',
        lineHeight: '$lg',
      },
      xl: {
        height: '$height-xl',
        paddingLeft: '$sp-16',
        paddingRight: '$sp-16',
        fontSize: '$ft-16',
        lineHeight: '$lg',
      },
    },
    color: {
      white: {
        backgroundColor: 'white',
        color: 'black',
      },
      primary: {
        backgroundColor: '$primary',
        color: 'white',
      },
    },
    outline: {
      black: {
        outline: 'solid 1px black',
      },
      gray: {
        outline: 'solid 1px $gray',
      },
      none: {
        outline: 'none',
      },
    },
  },
  defaultVariants: {
    size: 'md',
    color: 'white',
    outline: 'none',
  },
});

type Variants = {
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  color?: 'white' | 'primary';
  outlined?: 'black' | 'gray' | 'none';
};

type ButtonProps = StitchesProps<typeof StyledButton> &
  JSX.IntrinsicElements[typeof DEFAULT_TAG] &
  Variants;

const Button: ForwardRefComponent<typeof DEFAULT_TAG, ButtonProps> =
  React.forwardRef(function styledButtonComponent({ children, ...rest }, ref) {
    return (
      <StyledButton {...rest} ref={ref}>
        {children}
      </StyledButton>
    );
  });

export default Button;
