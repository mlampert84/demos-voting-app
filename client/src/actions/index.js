import axios from 'axios';
import { FETCH_USER, FETCH_POLLS, SHOW_VOTES } from './types';

export const fetchUser = () => async dispatch => {
  const res = await axios.get('/api/current_user');
  dispatch({ type: FETCH_USER, payload: res.data });
};

export const fetchPolls = myPolls => async dispatch => {
  const path = myPolls ? '/my_polls' : '/all_polls';
  const res = await axios.get('/api' + path);

  dispatch({ type: FETCH_POLLS, payload: res.data });

  return Promise.resolve();
};

export const showVotes = show => ({
  type: SHOW_VOTES,
  show
});

// export const updateState = () =>

//Note: this action is not a redux action
export const deletePoll = async pollId => {
  if (window.confirm('Your poll will be deleted.')) {
    await axios.delete('/api/poll/' + pollId);
    window.alert('Your poll has been deleted.');
    window.location.href = '/my_polls';
  }
};
