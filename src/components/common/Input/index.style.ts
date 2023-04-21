import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from 'styles/type';

type InputComponentStyleProps = StyledComponentProps & {
  label?: string;
  error?: boolean;
};

export const InputComponentStyle = styled(
  'div'
)<InputComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    backgroundColor: customTheme.colors.primary00,
    outline: 'none',

    '.text-container': {
      display: 'flex',
      flexDirection: 'column',
      fontFamily: 'CustomFont',
      width: '100%',
      flex: 1,

      '.label': {
        height: '24px',
        fontFamily: 'inherit',
        fontSize: '13px',
        color: customTheme.colors.primary20
      },

      '.text': {
        fontFamily: 'inherit',
        fontSize: '24px',
        color: customTheme.colors.white,

        '.MuiInputBase-input': {
          height: '38px',
          color: 'inherit',
          padding: '0px',
          fontFamily: 'inherit',
          fontWeight: '500',
          appearance: 'none',

          '&::-webkit-inner-spin-button': {
            '-webkit-appearance': 'none',
            margin: 0
          }
        },
      }
    }
  }
});
