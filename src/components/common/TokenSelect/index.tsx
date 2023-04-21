import React from 'react';
import { Box, BoxProps } from '@mui/material';
import { TokenSelectComponentSytle } from './index.style';
import { ButtonComponent } from '../Button';
import { SelectTokenButtonComponent } from '../SelectTokenButton';
import { IToken } from 'models';
import { current } from '@reduxjs/toolkit';

type TokenSelectComponentProps = BoxProps & {
  label?: string;
  isBuy: boolean;
  openSelectModal: () => void;
  tokenType: number;
  currentToken: IToken;
  setCurrentToken: (token: IToken) => void;
  setTokenType: (type: number) => void;
};

export const TokenSelectComponent: React.FC<TokenSelectComponentProps> = (props) => {
  const { label, isBuy, openSelectModal, tokenType, currentToken, setCurrentToken, setTokenType } = props;

  const handleClick = () => {
    setTokenType(tokenType);
    setCurrentToken(currentToken);
    openSelectModal();
  }

  return <TokenSelectComponentSytle>
    {!!label && <Box className='label'>{label}</Box>}
    <Box className='token-select-detail'>
      {
        isBuy
          ? <ButtonComponent className='min-button' label='MIN' />
          : <Box></Box>
      }
      <SelectTokenButtonComponent
        currentToken={currentToken}
        onClick={handleClick}
        className='token-container'
      />
    </Box>
  </TokenSelectComponentSytle>
}