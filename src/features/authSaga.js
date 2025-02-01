// features/authSaga.js
import { takeLatest, put, call } from 'redux-saga/effects';
import { loginStart, loginSuccess, loginFailure } from './authSlice';
import { loginUser } from '../api/api';

function* loginSaga(action) {
  try {
    const { email, password } = action.payload;
    const response = yield call(loginUser, email, password);
    yield put(loginSuccess(response.data));
  } catch (error) {
    yield put(loginFailure(error.message));
  }
}

export function* watchAuthActions() {
  yield takeLatest(loginStart.type, loginSaga);
}