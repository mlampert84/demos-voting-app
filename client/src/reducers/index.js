import { combineReducers } from 'redux';
import authReducer from './authReducer';
import gatewayReducer from './gatewayReducer';

export default combineReducers({
  auth: authReducer,
  gateway: gatewayReducer
});
