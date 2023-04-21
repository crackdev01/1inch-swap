import React from 'react';
import { Grid, Box, Divider } from '@mui/material';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { SelectTokenModalStyle } from './index.style';
import { IToken } from 'models';
import { TokenButtonComponent } from '../TokenButton';
import { InputComponent } from '../Input';
import { ButtonComponent } from '../Button';

type SelectTokenModalProps = {
  tokens: IToken[];
  currentToken: IToken;
  selectToken: (token: IToken) => void;
  closeModal: () => void;
};

export const SelectTokenModal: React.FC<SelectTokenModalProps> = (props) => {
  const { tokens, currentToken, selectToken, closeModal } = props;

  return <SelectTokenModalStyle>
    <Box className='modal-root'>
      <Box className='modal-header'>
        Select a token
        <HighlightOffIcon onClick={closeModal} sx={{ cursor: 'pointer' }} />
      </Box>
      <Divider />
      <Box className='modal-content'>
        <Box className='tokens-container'>
          {
            tokens.map((token, index) => (
              <TokenButtonComponent
                onClick={() => { selectToken(token); closeModal(); }}
                key={index}
                className='margin-top-16px margin-right-16px'
                icon={token.logoURI}
                symbol={token.symbol}
                activated={currentToken.symbol === token.symbol}
              />
            ))
          }
        </Box>
      </Box>
    </Box>
  </SelectTokenModalStyle>
};