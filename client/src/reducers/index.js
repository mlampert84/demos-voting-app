import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form';
import authReducer from './authReducer';
import pollsReducer from './pollsReducer';
import gatewayReducer from './gatewayReducer';
import showVotesReducer from './showVotesReducer';
export default combineReducers({
  auth: authReducer,
  polls: pollsReducer,
  gateway: gatewayReducer,
  form: reduxForm,
  showVoteOptions: showVotesReducer
});
