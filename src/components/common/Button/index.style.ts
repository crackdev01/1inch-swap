import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from 'styles/type';

type ButtonComponentStyleProps = StyledComponentProps & {
  label?: string;
  error?: boolean;
  activated?: boolean;
};

export const ButtonComponentStyle = styled(
  'button'
)<ButtonComponentStyleProps>(({ theme, activated }) => {
  const customTheme = theme as CustomTheme;

  return {
    fontFamily: 'CustomFont',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxSizing: 'border-box',
    cursor: 'pointer',
    backgroundColor: activated
      ? customTheme.colors.primary30
      : customTheme.colors.primary00,
    borderColor: activated
      ? customTheme.colors.primary20
      : customTheme.colors.primary30,

    '.comment': {
      maxWidth: '150px',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }
});
