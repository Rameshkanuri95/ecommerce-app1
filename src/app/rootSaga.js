// app/rootSaga.js
import { all } from 'redux-saga/effects';
import { watchAuthActions } from '../features/authSaga';
import { watchProductsActions } from '../features/productsSaga';

export default function* rootSaga() {
  yield all([watchAuthActions(), watchProductsActions()]);
}