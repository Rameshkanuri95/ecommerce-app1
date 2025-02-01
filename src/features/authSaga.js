// features/authSaga.js
import { takeLatest, put, call } from 'redux-saga/effects';
import { loginStart, loginSuccess, loginFailure, registerStart,registerSuccess,registerFailure } from './authSlice';
import { loginUser,registerUser } from '../api/api';


function* registerSaga(action) {
  try {
    const { email, password, username } = action.payload;
    const response = yield call(registerUser, email, password, username);
    yield put(registerSuccess(response.data));
  } catch (error) {
    yield put(registerFailure(error.message));
  }
}

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
  yield takeLatest(registerStart.type, registerSaga);
}