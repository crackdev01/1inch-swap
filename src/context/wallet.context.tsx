import React, { createContext } from 'react';
import { useWeb3React } from '@web3-react/core';
import { injectedConnector } from 'connectors';

type IWalletContextProps = {
  account: string;
  active: boolean;
  connect: () => Promise<void>;
  disconnect: () => void;
  getAccount: () => string;
}

export const WalletContext = createContext<IWalletContextProps>({
  account: '',
  active: false,
  connect: () => Promise.resolve(),
  disconnect: () => { },
  getAccount: () => ''
});

type WalletContextProviderProps = {
  children?: React.ReactNode
};

export const WalletContextProvider: React.FC<WalletContextProviderProps> = (props) => {
  const { children } = props;

  const { account, active, activate, deactivate } = useWeb3React();

  const handleConnect = async () => {
    try {
      if (window.ethereum !== undefined) {
        await activate(injectedConnector);
        sessionStorage.setItem('isConnected', 'connected');
      } else {
        alert('Please install Metamask wallet in your browser.');
      }
    } catch (error: unknown) {
      console.error(error);
    }
  }

  const handleDisconnect = () => {
    try {
      if (window.ethereum !== undefined) {
        deactivate();
        sessionStorage.removeItem('isConnected');
      } else {
        alert('Please install Metamask wallet in your browser.');
      }
    } catch (error: unknown) {
      console.error(error);
    }
  }

  const getAccount = () => account ?? '';

  return (
    <WalletContext.Provider value={{
      account: '',
      active: active,
      connect: handleConnect,
      disconnect: handleDisconnect,
      getAccount: getAccount
    }}>
      {children}
    </WalletContext.Provider>
  )
}