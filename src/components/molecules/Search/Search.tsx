import React from 'react';
import { styled, StitchesProps, keyframes } from '../../../stitches.config';
import { ForwardRefComponent } from '../../../types/polymorphic';
import { Box } from '../../atoms';
import { BiSearch } from 'react-icons/bi';

const DEFAULT_TAG = 'input';

// rgba(153, 153, 153) === #999999
const setGrayOpacity = (opacity: number) => `rgba(153, 153, 153, ${opacity})`;

const scaleUp = keyframes({
  '0%': { borderBottomColor: `${setGrayOpacity(0.1)}` },
  '25%': { borderBottomColor: `${setGrayOpacity(0.3)}` },
  '50%': { borderBottomColor: `${setGrayOpacity(0.5)}` },
  '75%': { borderBottomColor: `${setGrayOpacity(0.7)}` },
  '100%': { borderBottomColor: `${setGrayOpacity(1)}` },
});

const SearchContainer = styled(Box, {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '$width-sm',
  height: '2.25rem',
  borderBottom: '1px solid $gray',
  paddingBottom: '$sp-08',
});

const StyledSearch = styled(DEFAULT_TAG, {
  width: '100%',
  height: '100%',
  border: 'none',
  fontSize: '$ft-15',
  lineHeight: '$base',
  caretColor: '$d_gray',

  '&::placeholder': {
    color: '#999999',
  },

  '&:focus': {
    outline: 'none',
    '&::-webkit-input-placeholder': {
      color: 'transparent',
    },
    '&:-moz-placeholder': {
      color: 'transparent',
    },
    '&::-moz-placeholder': {
      color: 'transparent',
    },
    '&:-ms-input-placeholder': {
      color: 'transparent',
    },
  },
});

const SearchIcon = styled(BiSearch, {
  cursor: 'pointer',
});

interface SearchEvent {
  value?: string;
  onChange?: (event?: React.ChangeEvent<HTMLInputElement>) => void;
  onEnter?: (event?: React.KeyboardEvent<HTMLInputElement>) => void;
  onSearch?: (event?: React.MouseEvent) => void;
}

type SearchProps = StitchesProps<typeof StyledSearch> &
  JSX.IntrinsicElements[typeof DEFAULT_TAG] &
  SearchEvent;

/**
 * @param value(string)
 * @param onChange(input value change event - onChange)
 * @param onEnter(input에 focus되어있을 때 enter를 누르면 동작하는 event - onKeyUp)
 * @param onSearch(우측 돋보기 클릭 시 동작하는 이벤트 - onClick)
 */
const Search: ForwardRefComponent<typeof DEFAULT_TAG, SearchProps> =
  React.forwardRef(function styledSearchComponent(
    { value, onChange, onEnter, onSearch, placeholder, ...rest },
    ref,
  ) {
    const [isFocus, setIsFocus] = React.useState(false);
    const animation = isFocus && { animation: `${scaleUp} 400ms` };

    return (
      <SearchContainer css={{ ...animation }} {...rest}>
        <StyledSearch
          value={value}
          ref={ref}
          placeholder={placeholder}
          onChange={onChange}
          onKeyUp={onEnter}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
        />
        <SearchIcon size={24} strokeWidth={0.5} onClick={onSearch} />
      </SearchContainer>
    );
  });

export default Search;
