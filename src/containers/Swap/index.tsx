import React, { useState, useEffect, useRef } from 'react';
import { SwapView } from 'components/view';
import { IToken } from 'models';
import { SUPPORTED_TOKENS } from 'consts';
import { TOKEN_TYPE } from 'consts';

type ConversionDataForm = {
  fromTokenAddress: string;
  toTokenAddress: string;
  amount: string;
};

export const SwapContainer = () => {

  const [tokens, setTokens] = useState<IToken[]>(SUPPORTED_TOKENS);

  const [buyToken, setBuyToken] = useState<IToken>(SUPPORTED_TOKENS[0]);
  const [sellToken, setSellToken] = useState<IToken>(SUPPORTED_TOKENS[0]);
  const [rate, setRate] = useState<number>(0);

  const buyTokenRef = useRef<HTMLInputElement>();
  const sellTokenRef = useRef<HTMLInputElement>();

  const [conversionData, setConversionData] = useState<ConversionDataForm>({
    fromTokenAddress: sellToken.symbol,
    toTokenAddress: buyToken.symbol,
    amount: '1'
  });

  const [conversionRate, setConversionRate] = useState<number>(1);
  const [usdPriceRate, setUSDPriceRate] = useState<number>(1);

  const [usdPrice, setUSDPrice] = useState<number>(1);

  const handleBuyTokenChange = (currentBuyToken: IToken) => {
    setBuyToken(currentBuyToken);
  }

  const handleSellTokenChange = (currentSellToken: IToken) => {
    setSellToken(currentSellToken);
  }

  const handleRateChange = (currentRate: number) => {
    setRate(currentRate);
  }

  const handleExchange = () => {
    setConversionData({
      fromTokenAddress: buyToken.address,
      toTokenAddress: sellToken.address,
      amount: (10 ** buyToken.decimal).toString()
    });
    const currentBuyToken = buyToken;
    setBuyToken(sellToken);
    setSellToken(currentBuyToken);
  }

  const handleChangeConversionData = (tokenType: number, tokenAddress: string) => {
    if (tokenType === TOKEN_TYPE.BUY_TOKEN) {
      const decimal = SUPPORTED_TOKENS.find(token => token.address === conversionData.fromTokenAddress)?.decimal ?? 18;
      setConversionData({
        ...conversionData,
        toTokenAddress: tokenAddress,
        amount: (10 ** decimal).toString()
      });
    } else if (tokenType === TOKEN_TYPE.SELL_TOKEN) {
      const decimal = SUPPORTED_TOKENS.find(token => token.address === tokenAddress)?.decimal ?? 18;
      setConversionData({
        ...conversionData,
        fromTokenAddress: tokenAddress,
        amount: (10 ** decimal).toString()
      });
    }
  }

  const handleSwap = () => {
    if (buyTokenRef.current && sellTokenRef.current) {
    }
  }

  useEffect(() => {
    fetch(`${process.env.REACT_APP_1INCH_API}/1/quote?fromTokenAddress=${conversionData.fromTokenAddress}&toTokenAddress=${conversionData.toTokenAddress}&amount=${conversionData.amount}`)
      .then(result => result.json())
      .then((data: any) => {
        const toTokenAmount = parseFloat((parseInt(data.toTokenAmount) / (10 ** data.toToken.decimals)).toFixed(5));
        setConversionRate(toTokenAmount);
      });

    fetch(`${process.env.REACT_APP_1INCH_API}/1/quote?fromTokenAddress=${conversionData.fromTokenAddress}&toTokenAddress=0xdac17f958d2ee523a2206206994597c13d831ec7&amount=${conversionData.amount}`)
      .then(result => result.json())
      .then((data: any) => {
        const toTokenAmount = parseFloat((parseInt(data.toTokenAmount) / (10 ** data.toToken.decimals)).toFixed(5));
        setUSDPriceRate(toTokenAmount);
      });
  }, [conversionData])

  useEffect(() => {
    if (sellTokenRef.current) {
      setUSDPrice(usdPriceRate * parseFloat(sellTokenRef.current.value));
    }
  }, [sellTokenRef.current?.value])

  return <SwapView
    buyTokenRef={buyTokenRef}
    sellTokenRef={sellTokenRef}
    buyToken={buyToken}
    sellToken={sellToken}
    rate={rate}
    conversionRate={conversionRate}
    changeBuyToken={handleBuyTokenChange}
    changeSellToken={handleSellTokenChange}
    changeRate={handleRateChange}
    usdPriceRate={usdPriceRate}
    exchangeTokenType={handleExchange}
    supportedTokens={tokens}
    setConversionData={handleChangeConversionData}
    swapToken={handleSwap}
  />
};