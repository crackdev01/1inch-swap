import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { SwapTokenComponentStyle } from './index.style';
import { InputComponent } from '../Input';
import { TokenSelectComponent } from '../TokenSelect';
import { IToken } from 'models';

type SwapTokenComponentProps = BoxProps & {
  inputRef: React.MutableRefObject<HTMLInputElement | undefined>;
  changeTokenAmount: () => void;
  usdPrice: number;
  isBuy: boolean;
  openSelectModal: () => void;
  tokenType: number;
  currentToken: IToken;
  setCurrentToken: (token: IToken) => void;
  setTokenType: (type: number) => void;
};

export const SwapTokenComponent: React.FC<SwapTokenComponentProps> = (props) => {
  const { inputRef, changeTokenAmount, usdPrice, isBuy, openSelectModal, tokenType, currentToken, setCurrentToken, setTokenType } = props;

  return <SwapTokenComponentStyle>
    <Box className='amount-container'>
      <InputComponent
        type='number'
        inputRef={inputRef}
        onChange={changeTokenAmount}
        label={`~$${usdPrice.toFixed(2).toString()}`}
      />
    </Box>
    <Box className='token-type-container'>
      <TokenSelectComponent
        openSelectModal={openSelectModal}
        tokenType={tokenType}
        currentToken={currentToken}
        setCurrentToken={setCurrentToken}
        setTokenType={setTokenType}
        label={`You ${isBuy ? 'buy' : 'sell'}`}
        isBuy={isBuy}
      />
    </Box>
  </SwapTokenComponentStyle>
}