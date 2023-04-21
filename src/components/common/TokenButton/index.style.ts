import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from 'styles/type';

type TokenButtonComponentStyleProps = StyledComponentProps & {
  activated?: boolean
};

export const TokenButtonComponentStyle = styled(
  'div'
)<TokenButtonComponentStyleProps>(({ theme, activated }) => {
  const customTheme = theme as CustomTheme;

  return {
    fontFamily: 'CustomFont',
    height: '40px',
    borderRadius: '20px',
    backgroundColor: activated
      ? customTheme.colors.primary30
      : customTheme.colors.primary10,
    padding: '4px 16px 4px 4px',
    boxSizing: 'border-box',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: customTheme.colors.primary30,
    },

    '.icon-container': {
      width: '32px',
      height: '32px',
      borderRadius: '50%',
      border: `1px solid ${customTheme.colors.primary20}`,
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      img: {
        width: '23px',
        height: '23px'
      }
    },

    '.symbol': {
      marginLeft: '8px',
      fontFamily: 'inherit',
      color: customTheme.colors.white,
    }
  }
});
