import React from 'react';
import { Box, BoxProps } from '@mui/material';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { NoteComponentStyle } from './index.style';
import { NoteSvg, PriceSparklingSvg } from 'assets/icons';

type NoteComponentProps = BoxProps & {
  conversionRateLabel: string;
  priceLabel: string;
};

export const NoteComponent: React.FC<NoteComponentProps> = (props) => {
  const { conversionRateLabel, priceLabel, ...rest } = props;

  return <NoteComponentStyle className={rest.className}>
    <Box className='price-panel'>
      <img src={NoteSvg} />
      <Box className='margin-left-8px'>
        {conversionRateLabel}
      </Box>
      <Box className='color-primary20 margin-left-4px'> {`($ ${priceLabel})`} </Box>
    </Box>
    <Box className='price-sparkling-panel'>
      <img src={PriceSparklingSvg} />
      <Box className='margin-left-4px color-primary20'> $0 </Box>
      <KeyboardArrowDownIcon className='color-primary20' />
    </Box>
  </NoteComponentStyle>
};