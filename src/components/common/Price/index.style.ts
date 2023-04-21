import { StyledComponentProps, styled } from '@mui/material';
import { CustomTheme } from 'styles/type';

type NoteComponentStyleProps = StyledComponentProps & {};

export const NoteComponentStyle = styled(
  'div'
)<NoteComponentStyleProps>(({ theme }) => {
  const customTheme = theme as CustomTheme;

  return {
    backgroundColor: customTheme.colors.primary00,
    borderRadius: '13px',
    height: '72px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '4px 18px',
    boxSizing: 'border-box',
    color: customTheme.colors.white,
    fontFamily: 'CustomFont',
    fontSize: '14px',

    '.price-panel': {
      display: 'flex',
      alignItems: 'center'
    },

    '.price-sparkling-panel': {
      display: 'flex',
      alignItems: 'center',
      fontSize: '14px'
    },

    '.margin-left-8px': {
      marginLeft: '8px'
    },

    '.margin-left-4px': {
      marginLeft: '4px'
    },

    '.color-primary20': {
      color: customTheme.colors.primary20
    }
  }
});
