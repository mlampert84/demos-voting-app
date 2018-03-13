//I'm not using this at the moment

import { LOG_IN } from '../actions/types';

export default (state = '', action) => {
  switch (action.type) {
    case LOG_IN:
      return action.type;
    default:
      return state;
  }
};
