import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from 'styles/type';

type SwapTokenComponentViewStyle = StyledComponentProps & {};

export const SwapTokenComponentStyle = styled(
  'div'
)<SwapTokenComponentViewStyle>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    width: '100%',
    height: '100%',
    padding: '14px 18px',
    backgroundColor: customTheme.colors.primary00,
    borderRadius: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    boxSizing: 'border-box',
    fontFamily: 'CustomFont',

    '.amount-container': {
      width: '55%',
    },

    '.token-type-container': {
      fontFamily: 'inherit',
      width: '40%',
    },
  }
});
