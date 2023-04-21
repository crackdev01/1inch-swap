import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from 'styles/type';

type SwapViewStyleProps = StyledComponentProps & {};

export const SwapViewStyle = styled(
  'div'
)<SwapViewStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    minHeight: '100vh',
    width: '100%',
    height: '100%',
    backgroundColor: customTheme.colors.primary00,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '.swap-container': {
      display: 'flex',
      flexDirection: 'column',
      padding: '10px 24px 30px 24px',
      width: '458px',
      height: '550px',
      border: `2px solid ${customTheme.colors.secondary00}`,
      borderRadius: '30px',
      boxSizing: 'border-box',
      background:
        "radial-gradient(circle at center, #564322 0%, #433521 27%, #0A0A0A 100%)",

      '.swap-actions-container': {
        width: '100%',
        height: '62px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'right'
      },

      '.token-container': {
        width: '100%',
        height: '105px',
      },

      '.token-exchange-container': {
        width: '100%',
        padding: '3px 0',
        background: 'transparent',
        boxSizing: 'border-box',
        position: 'relative',

        '.exchange-button': {
          margin: 'auto',
          width: '40px',
          height: '40px',
          borderRadius: '50%',
          backgroundColor: customTheme.colors.primary00,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          cursor: 'pointer',

          '.icon': {
            zIndex: 10,
          },

          '&:hover': {
            backgroundColor: customTheme.colors.primary30
          }
        },

        '.divider': {
          position: 'absolute',
          width: '100%',
          borderColor: customTheme.colors.primary00,
          top: '50%',
        }
      }
    },

    '.actions': {
      '.MuiGrid-item': {
        paddingTop: '0px !important',
      },
    },

    '.margin-top-16px': {
      marginTop: '16px'
    },

    '.rate-button': {
      fontFamily: 'inherit',
      fontSize: '14px',
      width: '100%',
      height: '34px',
      borderStyle: 'solid',
      borderWidth: '1px',
      borderRadius: '7px',
      color: customTheme.colors.primary20,

      '&:hover': {
        backgroundColor: customTheme.colors.primary30,
        borderColor: customTheme.colors.primary20
      }
    },

    '.swap-button': {
      width: '100%',
      height: '84px',
      borderRadius: '14px',
      backgroundColor: customTheme.colors.secondary00,
      color: customTheme.colors.white,
      fontSize: '16px',
      fontWeight: '700',

      '&:hover': {
        opacity: 0.8
      }
    }
  }
});
