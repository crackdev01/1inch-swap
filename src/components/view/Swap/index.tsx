import React, { useState, useEffect, useContext } from 'react';
import { Grid, Box, Divider, BoxProps } from '@mui/material';
import RefreshIcon from '@mui/icons-material/Refresh';
import SettingsIcon from '@mui/icons-material/Settings';
import { SwapViewStyle } from './index.style';
import { SwapTokenComponent, ActionButtonComponent, ButtonComponent, NoteComponent, SelectTokenModal } from 'components/common';
import { ExchangeSvg } from 'assets/icons';
import { IToken } from 'models';
import { useModal } from 'hooks';
import { TOKEN_TYPE, RATE } from 'consts';
import { WalletContext } from 'context';

type SwapViewProps = BoxProps & {
  buyTokenRef: React.MutableRefObject<HTMLInputElement | undefined>;
  sellTokenRef: React.MutableRefObject<HTMLInputElement | undefined>;
  buyToken: IToken;
  sellToken: IToken;
  rate: number;
  conversionRate: number;
  usdPriceRate: number;
  changeBuyToken: (token: IToken) => void;
  changeSellToken: (token: IToken) => void;
  changeRate: (rate: number) => void;
  exchangeTokenType: () => void;
  supportedTokens: IToken[];
  setConversionData: (tokenType: number, tokenAddress: string) => void;
  swapToken: () => void;
};

export const SwapView: React.FC<SwapViewProps> = (props) => {
  const { buyTokenRef, sellTokenRef, buyToken, sellToken, rate, conversionRate, usdPriceRate, changeBuyToken, changeSellToken, changeRate, exchangeTokenType, supportedTokens, setConversionData, swapToken } = props;

  const [tokenType, setTokenType] = useState<number>(0);
  const [exchangeUSDPrice, setUSDPrice] = useState<number>(0);

  const { connect, active } = useContext(WalletContext);

  const {
    isShowing: tokenSelectModalShowing,
    close: tokenSelectModalClose,
    show: tokenSelectModalShow
  } = useModal();

  const handleRefresh = () => {

  }

  const handleSetting = () => {

  }

  const handleBuyTokenAmountChange = () => {
    if (buyTokenRef.current && sellTokenRef.current) {
      const currentBuyTokenAmount = parseFloat(buyTokenRef.current.value !== '' ? buyTokenRef.current.value : '0');
      sellTokenRef.current.value = (currentBuyTokenAmount * (1 / conversionRate)).toFixed(4);
      setUSDPrice((currentBuyTokenAmount * (1 / conversionRate)) * usdPriceRate);
    }
  }

  const handleSellTokenAmountChange = () => {
    if (buyTokenRef.current && sellTokenRef.current) {
      const currentSellTokenAmount = parseFloat(sellTokenRef.current.value !== '' ? sellTokenRef.current.value : '0');
      buyTokenRef.current.value = (currentSellTokenAmount * conversionRate).toFixed(4);
      setUSDPrice((currentSellTokenAmount * (1 / conversionRate)) * usdPriceRate);
    }
  }

  const handleSelectToken = (token: IToken) => {
    if (tokenType === TOKEN_TYPE.BUY_TOKEN) {
      changeBuyToken(token);
      setConversionData(tokenType, token.address);
    } else if (tokenType === TOKEN_TYPE.SELL_TOKEN) {
      changeSellToken(token);
      setConversionData(tokenType, token.address);
    }
  }

  const handleSwap = async () => {
    if (!active) {
      await connect();
    }
    swapToken()
  }

  return <SwapViewStyle>
    <Box className='swap-container'>
      <Box>
        <Box className='swap-actions-container'>
          <ActionButtonComponent
            actionIcon={<RefreshIcon />}
            clickAction={handleRefresh}
          />
          <ActionButtonComponent
            actionIcon={<SettingsIcon />}
            clickAction={handleSetting}
          />
        </Box>
        <Box className='token-container'>
          <SwapTokenComponent
            inputRef={buyTokenRef}
            changeTokenAmount={handleBuyTokenAmountChange}
            tokenType={TOKEN_TYPE.BUY_TOKEN}
            currentToken={buyToken}
            setCurrentToken={changeBuyToken}
            setTokenType={setTokenType}
            openSelectModal={tokenSelectModalShow}
            usdPrice={exchangeUSDPrice}
            isBuy={true}
          />
        </Box>

        <Box className='token-exchange-container'>
          <Divider className='divider' />
          <Box onClick={exchangeTokenType} className='exchange-button'>
            <img className='icon' src={ExchangeSvg} />
          </Box>
        </Box>

        <Box className='token-container'>
          <SwapTokenComponent
            inputRef={sellTokenRef}
            changeTokenAmount={handleSellTokenAmountChange}
            tokenType={TOKEN_TYPE.SELL_TOKEN}
            currentToken={sellToken}
            setCurrentToken={changeSellToken}
            setTokenType={setTokenType}
            openSelectModal={tokenSelectModalShow}
            usdPrice={exchangeUSDPrice}
            isBuy={false}
          />
        </Box>

        <Grid className='actions margin-top-16px' container spacing={3}>
          {
            RATE.map((each, index) => (
              <Grid item lg={3} sm={3} xs={3} key={index}>
                <ButtonComponent
                  onClick={() => changeRate(each)}
                  className='rate-button'
                  label={each + '%'}
                  activated={rate === each}
                />
              </Grid>
            ))
          }
        </Grid>
      </Box>

      <NoteComponent
        className='margin-top-16px'
        conversionRateLabel={`1 ${sellToken.symbol} = ${sellToken.symbol === buyToken.symbol ? 1 : conversionRate} ${buyToken.symbol}`}
        priceLabel={`${usdPriceRate}`}
      />

      <ButtonComponent
        onClick={handleSwap}
        className='swap-button margin-top-16px'
        label='Swap'
      />

      {
        tokenSelectModalShowing && (
          <SelectTokenModal
            tokens={supportedTokens}
            currentToken={tokenType === TOKEN_TYPE.BUY_TOKEN ? buyToken : sellToken}
            selectToken={handleSelectToken}
            closeModal={tokenSelectModalClose}
          />
        )
      }

    </Box>
  </SwapViewStyle>
}
