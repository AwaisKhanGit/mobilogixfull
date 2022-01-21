import { all } from 'redux-saga/effects';
import loginSaga from './login.saga';
import registrationSaga from './registration.saga';


export default function* rootSaga() {
  yield all([
    loginSaga(),
    registrationSaga()
  ]);
}
