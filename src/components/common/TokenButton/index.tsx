import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { TokenButtonComponentStyle } from './index.style';

type TokenButtonComponentProps = BoxProps & {
  icon: string;
  symbol: string;
  activated?: boolean;
};

export const TokenButtonComponent: React.FC<TokenButtonComponentProps> = (props) => {
  const { icon, symbol, activated, ...rest } = props;

  return <TokenButtonComponentStyle className={rest.className} activated={activated ?? false} onClick={rest.onClick}>
    <Box className='icon-container'>
      <img src={icon} />
    </Box>
    <Box className='symbol'> {symbol} </Box>
  </TokenButtonComponentStyle>
}