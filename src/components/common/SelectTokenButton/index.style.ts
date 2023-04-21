import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from 'styles/type';

type SelectTokenButtonComponentStyleProps = StyledComponentProps & {};

export const SelectTokenButtonComponentStyle = styled(
  'button'
)<SelectTokenButtonComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    width: '100%',
    height: '100%',
    borderRadius: '24px 6px 6px 24px',
    backgroundColor: customTheme.colors.primary10,
    border: 'none',
    padding: '4px 4px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    color: customTheme.colors.white,
    cursor: 'pointer',

    '&:hover': {
      backgroundColor: customTheme.colors.primary30
    },

    '.token-icon': {
      width: '32px',
      height: '32px',
      border: `1px solid ${customTheme.colors.primary20}`,
      borderRadius: '50%',
      boxSizing: 'border-box',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',

      img: {
        width: '25px',
        height: '25px',
      }
    },

    '.token-symbol': {
      fontFamily: 'inherit',
      fontSize: '12px',
      fontWeight: '700',
      color: customTheme.colors.white
    },

    '.drop-icon': {
      [customTheme.breakpoints.down('xs')]: {
        display: 'none'
      }
    },

    '.margin-left-8px': {
      marginLeft: '8px'
    }
  }
});
