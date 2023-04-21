import React, { useContext, useState, useEffect } from 'react';
import { BoxProps } from '@mui/material';
import { HeaderComponentStyle } from './index.style';
import { ButtonComponent } from '../Button';
import { WalletContext } from 'context';

type HeaderComponentProps = BoxProps & {};

export const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
  const { active, getAccount, connect, disconnect } = useContext(WalletContext);

  const handleClick = async () => {
    if (!active) {
      await connect();
    } else {
      disconnect();
    }
  }

  useEffect(() => {
    const connected = sessionStorage.getItem('isConnected');
    if (connected === 'connected') {
      handleClick();
    }
  }, [])

  return <HeaderComponentStyle>
    <ButtonComponent
      onClick={handleClick}
      className='button'
      label={`${active ? getAccount() : 'Connect Wallet'}`}
    >
    </ButtonComponent>
  </HeaderComponentStyle>
};