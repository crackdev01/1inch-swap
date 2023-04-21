import React from 'react';
import { ButtonProps } from '@mui/material';
import { ActionButtonComponentStyle } from './index.style';

type ActionButtonProps = ButtonProps & {
  actionIcon: React.ReactElement;
  clickAction: () => void;
};

export const ActionButtonComponent: React.FC<ActionButtonProps> = (props) => {
  const { actionIcon, clickAction } = props;

  return <ActionButtonComponentStyle>
    {actionIcon}
  </ActionButtonComponentStyle>
}