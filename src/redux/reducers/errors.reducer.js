import { combineReducers } from 'redux';

const loginMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_LOGIN_ERROR':
      return '';
    case 'LOGIN_INPUT_ERROR':
      return 'Enter your username and password!';
    case 'LOGIN_FAILED':
      return "Oops! The username and password didn't match. Try again!";
    case 'LOGIN_FAILED_NO_CODE':
      return 'Oops! Something went wrong! Is the server running?';
    default:
      return state;
  }
};

const registrationMessage = (state = '', action) => {
  switch (action.type) {
    case 'CLEAR_REGISTRATION_ERROR':
      return '';
    case 'REGISTRATION_INPUT_ERROR':
      return 'Choose a username and password!';
    case 'REGISTRATION_FAILED':
      return "Oops! That didn't work. The username might already be taken. Try again!";
    default:
      return state;
  }
};

const employeeCreationMessage = (state = '', action) => {
  switch (action.type) {
    case 'EMPLOYEE_CREATION_SUCCESSFULL':
      return 'Created';
    case 'EMPLOYEE_CREATION_UNSUCCESSFULL':
      return 'Could not be created';
    case 'EMPLOYEE_UPDATE_SUCCESSFULL':
      return 'Updated';
    case 'EMPLOYEE_UPDATE_UNSUCCESSFULL':
      return 'Could not be Updated';
    case 'CLEAR_EMPLOYEE_CREATION_MESSAGE':
      return '';
    default:
      return state;
  }
};


const employeeDeletionMessage = (state = '', action) => {
  switch (action.type) {
    case 'EMPLOYEE_DELETION_SUCCESSFULL':
      return 'Deleted';
    case 'EMPLOYEE_DELETION_UNSUCCESSFULL':
      return 'Not Deleted';
    case 'EMPLOYEE_IMAGE_UPDATE_SUCCESSFULL':
        return 'image updated';
    case 'EMPLOYEE_IMAGE_UPDATE_UNSUCCESSFULL':
        return 'image not updated';
    case 'CLEAR_EMPLOYEE_DELETION_MESSAGE':
      return '';
    default:
      return state;
  }
};


export default combineReducers({
  loginMessage,
  registrationMessage,
  employeeCreationMessage,
  employeeDeletionMessage
});
