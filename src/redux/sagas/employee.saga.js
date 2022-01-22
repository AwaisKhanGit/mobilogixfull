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

function* createEmployee(action) {
  try {
    const response = yield axios.post('/api/employee',action.payload);
    yield put ({ type : 'EMPLOYEE_CREATION_SUCCESSFULL'})
    yield put({ 
        type: 'FETCH_EMPLOYEES',
        payload : response.data
        });
  } catch (error) {
    yield put ({ type : 'EMPLOYEE_CREATION_UNSUCCESSFULL'})
    console.log('Error with create employees:', error);
  }
}

function* employeeSaga() {
  yield takeLatest('FETCH_EMPLOYEES', getEmployees);
  yield takeLatest('SUBMIT_EMPLOYEE_DATA', createEmployee);
}

export default employeeSaga;