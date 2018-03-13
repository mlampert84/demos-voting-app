import { combineReducers } from 'redux';
import authReducer from './authReducer';
import pollsReducer from './pollsReducer';
import gatewayReducer from './gatewayReducer';

export default combineReducers({
  auth: authReducer,
  polls: pollsReducer,
  gateway: gatewayReducer
});
