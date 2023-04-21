import React from 'react';
import { ButtonProps } from '@mui/material';
import { ButtonComponentStyle } from './index.style';

type ButtonComponentProps = ButtonProps & {
  label?: string;
  activated?: boolean;
};

export const ButtonComponent: React.FC<ButtonComponentProps> = (props) => {
  const { label, ...rest } = props;

  return <ButtonComponentStyle {...rest}>
    <div className='comment'> {label} </div>
  </ButtonComponentStyle>
}