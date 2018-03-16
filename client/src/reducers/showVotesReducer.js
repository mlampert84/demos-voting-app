import { SHOW_VOTES } from '../actions/types';

export default function(state = false, action) {
  switch (action.type) {
    case SHOW_VOTES:
      return action.show;
    default:
      return state;
  }
}
