import React from 'react';
import { Box, ButtonProps } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { SelectTokenButtonComponentStyle } from './index.style';
import { IToken } from 'models';

type SelectTokenButtonComponentProps = ButtonProps & {
  currentToken: IToken;
};

export const SelectTokenButtonComponent: React.FC<SelectTokenButtonComponentProps> = (props) => {
  const { currentToken, ...rest } = props;

  return <SelectTokenButtonComponentStyle {...rest}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      {
        currentToken.logoURI && <Box className='token-icon'> <img src={currentToken.logoURI} /> </Box>
      }
      <Box className='token-symbol margin-left-8px'> {currentToken.symbol} </Box>
    </Box>
    <KeyboardArrowDownIcon className='drop-icon' />
  </SelectTokenButtonComponentStyle>
};