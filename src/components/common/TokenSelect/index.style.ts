import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from 'styles/type';

type TokenSelectComponentStyleProps = StyledComponentProps & {
  label?: string;
  error?: boolean;
};

export const TokenSelectComponentSytle = styled(
  'div'
)<TokenSelectComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    backgroundColor: customTheme.colors.primary00,
    outline: 'none',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'CustomFont',
    width: '100%',
    flex: 1,

    '.label': {
      display: 'flex',
      justifyContent: 'right',
      height: '24px',
      fontFamily: 'inherit',
      fontSize: '13px',
      color: customTheme.colors.primary20
    },

    '.token-select-detail': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      height: '35px',

      '.min-button': {
        width: '37px',
        height: '23px',
        border: `1px solid ${customTheme.colors.secondary00}`,
        borderRadius: '7px',
        fontFamily: 'inherit',
        fontSize: '8px',
        color: customTheme.colors.white,
        backgroundColor: customTheme.colors.primary00,

        '&:hover': {
          backgroundColor: customTheme.colors.primary30,
        }
      },

      '.token-container': {
        width: '104px',
        height: '40px',
      },
    }
  }
});
