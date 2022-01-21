import { combineReducers } from 'redux';
import errors from './errors.reducer';
import user from './user.reducer';
import employee from './employee.reducer';

const rootReducer = combineReducers({
  errors,
  user,
  employee
});

export default rootReducer;
