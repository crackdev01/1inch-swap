import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from 'styles/type';

type SelectTokenModalStyleProps = StyledComponentProps & {};

export const SelectTokenModalStyle = styled(
  'div'
)<SelectTokenModalStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.5)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'CustomFont',
    zIndex: 100,

    '.modal-root': {
      width: '100%',
      maxWidth: '458px',
      borderRadius: '30px',
      backgroundColor: customTheme.colors.primary00,
      border: `2px solid ${customTheme.colors.primary30}`,
      boxSizing: 'border-box',
      fontFamily: 'inherit',

      '.modal-header': {
        fontFamily: 'inherit',
        padding: '1rem 1.5rem',
        color: customTheme.colors.white,
        fontSize: '18px',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      },

      '.modal-content': {
        padding: '1rem 0.5rem 2rem 1.5rem',

        '.search-container': {
          padding: '0 1rem 1rem 0',

          '.input': {
            fontSize: '16px !important',
            fontFamily: 'CustomFont',
            border: `1px solid ${customTheme.colors.primary30}`,
            borderRadius: '10px',
            padding: '0.3rem 1rem'
          },

          '.button': {
            width: '100%',
            height: '100%',
            minHeight: '40px',
            fontSize: '16px !important',
            color: customTheme.colors.white,
            border: `1px solid ${customTheme.colors.primary30}`,
            borderRadius: '10px',

            '&:hover': {
              backgroundColor: customTheme.colors.primary10
            }
          }
        },

        '.tokens-container': {
          display: 'flex',
          flexWrap: 'wrap',
          maxHeight: '600px',
          overflowY: 'auto',

          '&::-webkit-scrollbar': {
            width: '0.5rem',
          },
          '&::-webkit-scrollbar-track': {
            '-webkit-box-shadow': `inset 0 0 6px ${customTheme.colors.primary00}`
          },
          '&::-webkit-scrollbar-thumb': {
            backgroundColor: customTheme.colors.primary20,
            borderRadius: '10px'
          }
        }
      },

      '.margin-top-16px': {
        marginTop: '16px'
      },

      '.margin-right-16px': {
        marginRight: '8px'
      }
    }
  }
});
