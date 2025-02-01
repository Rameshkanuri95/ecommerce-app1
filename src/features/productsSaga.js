// features/productsSaga.js
import { takeLatest, put, call } from 'redux-saga/effects';
import { fetchProductsStart, 
  fetchProductsSuccess, 
  fetchProductsFailure,
  fetchProductSuccess,
  fetchProductFailure, 
  fetchProductStart} from './productsSlice';
import { fetchProducts,fetchProduct  } from '../api/api';

function* fetchProductSaga(action) {
  try {
    const product = yield call(fetchProduct, action.payload);
    yield put(fetchProductSuccess(product));
  } catch (error) {
    yield put(fetchProductFailure(error.message));
  }
}

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
  yield takeLatest(fetchProductStart.type, fetchProductSaga);
}