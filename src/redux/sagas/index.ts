import { all } from "redux-saga/effects";
import tokenSagas from './token';

function* rootSaga() {
  yield all([
    ...tokenSagas
  ]);
}

export default rootSaga;