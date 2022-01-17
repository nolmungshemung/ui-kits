import React from 'react';
import { styled, StitchesProps } from '../../../stitches.config';
import { ForwardRefComponent } from '../../../types/polymorphic';

const DEFAULT_TAG = 'div';

const StyledAppBar = styled(DEFAULT_TAG, {
  boxSizing: 'border-box',
  height: '$height-appbar',
  display: 'flex',
  width: '100%',

  variants: {
    sticky: {
      true: {
        position: 'sticky',
        top: 0,
        background: '#fff',
      },
      false: {
        position: 'static',
      },
    },
  },

  defaultVariants: {
    sticky: false,
  },
});

type AppBarProps = StitchesProps<typeof StyledAppBar> &
  JSX.IntrinsicElements[typeof DEFAULT_TAG];

const AppBar: ForwardRefComponent<typeof DEFAULT_TAG, AppBarProps> =
  React.forwardRef(function styledAppBarComponent({ ...rest }, ref) {
    return <StyledAppBar {...rest} ref={ref} />;
  });

export default AppBar;
