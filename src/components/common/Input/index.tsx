import React from 'react';
import { Box, InputBase, InputBaseProps } from '@mui/material';
import { InputComponentStyle } from './index.style';

type InputComponentProps = InputBaseProps & {
  label?: string;
  error?: string;

};

export const InputComponent: React.FC<InputComponentProps> = (props) => {
  const { label, error, ...rest } = props;

  const addSpaces = (label: string) => {
    let [whole, decimal] = label.split('.');

    whole = whole.replace(/\B(?=(\d{3})+(?!\d))/g, ' ');

    if (decimal) {
      decimal = decimal.replace(/(\d{3})/g, '$1 ');
      return `${whole}.${decimal.trim()}`;
    } else {
      return whole;
    }
  }

  return <InputComponentStyle>
    <Box className='text-container'>
      {!!label && <Box className='label'>{addSpaces(label)}</Box>}
      <InputBase
        className='text'
        {...rest}
      />
    </Box>
  </InputComponentStyle>
}