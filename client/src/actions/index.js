import axios from 'axios';
import { FETCH_USER, FETCH_POLLS } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPolls = () => async dispatch => {
  const res = await axios.get('/api/all_polls');
  dispatch({ type: FETCH_POLLS, payload: res.data });
};

// export const logIn = () => ({
//   type: LOG_IN
// });
