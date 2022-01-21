import { put, takeLatest } from 'redux-saga/effects';
import axios from 'axios';

function* getEmployees() {
  try {
    const response = yield axios.get('/api/employee');
    yield put({ 
        type: 'SET_EMPLOYEES',
        payload : response.data
        });
  } catch (error) {
    console.log('Error with get employees:', error);
  }
}

function* employeeSaga() {
  yield takeLatest('FETCH_EMPLOYEES', getEmployees);
}

export default employeeSaga;