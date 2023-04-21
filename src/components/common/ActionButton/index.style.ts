import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from 'styles/type';

type ActionButtonComponentStyleProps = StyledComponentProps & {};

export const ActionButtonComponentStyle = styled(
  'button'
)<ActionButtonComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    width: '35px',
    height: '35px',
    border: 'none',
    background: 'transparent',
    color: customTheme.colors.white,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    borderRadius: '50%',

    '&:hover': {
      backgroundColor: customTheme.colors.primary30
    }
  }
});
