import { AppActions } from "redux/store";
import { call, put, takeEvery } from "redux-saga/effects";
import { makeAPIRequst } from "utils";
import { PayloadAction } from "@reduxjs/toolkit";

import * as AppActionTypes from "../../types";
import { AxiosError } from "axios";

interface ResponseGenerator {
  config?: any;
  data?: any;
  headers?: any;
  request?: any;
  status?: number;
  statusText?: string;
}

function* getTokensRequestSaga(
  action: PayloadAction<AppActionTypes.Token.IGetTokensRequestAction>
) {
  try {
    yield put(AppActions.loading.setLoading());

    const result: ResponseGenerator = yield call(async () => {
      return await makeAPIRequst("tokens", "GET");
    });

    yield put(AppActions.loading.finishLoading());
    yield put(AppActions.token.getTokensSuccess(result.data));

    if (action.payload.next) {
      action.payload.next();
    }
  } catch (error: unknown) {
    yield put(AppActions.loading.finishLoading());

    if (error instanceof AxiosError) {
      const reasonCode: string = error.response?.data.reason;
      if (reasonCode && action.payload.errors) {
        const errorHandler: () => void = action.payload.errors[reasonCode];
        errorHandler();
      }
    }
  }
}

export default (function* () {
  yield takeEvery("token/getTokensRequest", getTokensRequestSaga);
})();
