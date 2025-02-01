// features/productsSaga.js
import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchProductsStart, fetchProductsSuccess, fetchProductsFailure } from './productsSlice';
import { fetchProducts } from '../api/api';

function* fetchProductsSaga() {
  try {
    const products = yield call(fetchProducts);
    yield put(fetchProductsSuccess(products));
  } catch (error) {
    yield put(fetchProductsFailure(error.message));
  }
}

export function* watchProductsActions() {
  yield takeLatest(fetchProductsStart.type, fetchProductsSaga);
}