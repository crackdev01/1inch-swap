import React from "react";
import { Provider } from 'react-redux';
import ReactDOM from "react-dom/client";
import "styles/global.css";
import App from "./App";
import { ThemeProvider } from "@mui/material";
import { WalletContextProvider } from "context";
import { Web3ReactProvider } from "@web3-react/core";
import { darkTheme } from "./styles";
import Web3 from 'web3';
import { HeaderComponent } from "components/common";
import { store } from "redux/store";

function getLibrary(provider: any) {
  return new Web3(provider)
}

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <Provider store={store}>
    <Web3ReactProvider getLibrary={getLibrary}>
      <ThemeProvider theme={darkTheme}>
        <WalletContextProvider>
          <HeaderComponent />
          <App />
        </WalletContextProvider>
      </ThemeProvider>
    </Web3ReactProvider>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
