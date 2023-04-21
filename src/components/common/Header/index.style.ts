import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from 'styles/type';

type HeaderComponentStyleProps = StyledComponentProps & {
  label?: string;
  error?: boolean;
};

export const HeaderComponentStyle = styled(
  'div'
)<HeaderComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    position: 'fixed',
    width: '100%',
    height: '60px',
    boxSizing: 'border-box',
    padding: '0 2rem',
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
    fontFamily: 'CustomFont',

    '.button': {
      width: '150px',
      height: '40px',
      border: `1px solid ${customTheme.colors.primary20}`,
      borderRadius: '7px',
      fontFamily: 'inherit',
      fontSize: '14px',
      color: customTheme.colors.white,
      backgroundColor: customTheme.colors.primary00,
      // padding: '0 1.5rem',
      boxSizing: 'border-box',

      '&:hover': {
        backgroundColor: customTheme.colors.primary30,
        cursor: 'pointer !important',
      }
    }
  }
});
