import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IToken } from "models";

import * as AppActionTypes from '../types';

type TokenState = {
  tokens: IToken[];
};

const initialState: TokenState = {
  tokens: []
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    // Get Tokens
    getTokensRequest(
      _state: TokenState,
      _action: PayloadAction<AppActionTypes.Token.IGetTokensRequestAction>
    ) { },
    getTokensSuccess(
      state: TokenState,
      action: PayloadAction<AppActionTypes.Token.IGetTokensSuccessAction>
    ) {
      console.log("action: ", action.payload.tokens);
      state.tokens = Object.values(action.payload.tokens);
    },
    getTokensFailure(_state: TokenState) { }
  }
});

export const reducer = tokenSlice.reducer;
export const actions = tokenSlice.actions;