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
    yield axios.post('/api/employee',action.payload);
    yield put ({ type : 'EMPLOYEE_CREATION_SUCCESSFULL'})
    yield put({ 
        type: 'FETCH_EMPLOYEES'
        });
  } catch (error) {
    yield put ({ type : 'EMPLOYEE_CREATION_UNSUCCESSFULL'})
    console.log('Error with create employees:', error);
  }
}

function* updateEmployee(action) {
  try {
    yield axios.put(`/api/employee/${action.payload.id}`,action.payload);
    yield put ({ type : 'EMPLOYEE_UPDATE_SUCCESSFULL'})
    yield put({ 
        type: 'FETCH_EMPLOYEES'
        });
  } catch (error) {
    yield put ({ type : 'EMPLOYEE_UPDATE_UNSUCCESSFULL'})
    console.log('Error with create employees:', error);
  }
}

function* deleteEmployee(action) {
  try {
    yield axios.delete(`/api/employee/${action.payload}`);
    yield put ({ type : 'EMPLOYEE_DELETION_SUCCESSFULL'})
    yield put({ 
        type: 'FETCH_EMPLOYEES'
        });
  } catch (error) {
    yield put ({ type : 'EMPLOYEE_DELETION_UNSUCCESSFULL'})
    console.log('Error with delete employees:', error);
  }
}



function* employeeSaga() {
  yield takeLatest('FETCH_EMPLOYEES', getEmployees);
  yield takeLatest('SUBMIT_EMPLOYEE_DATA', createEmployee);
  yield takeLatest('UPDATE_EMPLOYEE_DATA', updateEmployee);
  yield takeLatest('DELETE_EMPLOYEE',deleteEmployee)
}

export default employeeSaga;