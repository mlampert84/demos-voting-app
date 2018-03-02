import axios from 'axios';
import { FETCH_USER, LOG_IN } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const logIn = () => ({
  type: LOG_IN
});
