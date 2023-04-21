import { combineReducers, configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

import {
  loadingReducer,
  loadingActions,
  tokenReducer,
  tokenActions
} from './slices';

const reducer = combineReducers({
  loading: loadingReducer,
  token: tokenReducer
});

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  preloadedState: {},
  reducer,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware({ serializableCheck: false, thunk: false }).concat(
      sagaMiddleware
    )
});

export const AppActions = {
  loading: loadingActions,
  token: tokenActions
};

sagaMiddleware.run(rootSaga);

export * as AppActionTypes from './types';

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;