import React from 'react';

export default props => {
  return (
    <div>
      <div className="col s12">
        <h2 className="center-align">{props.question}</h2>
      </div>

      <div className="col s8">
        Created by user <i>{props.username}</i> on {props.dateCreated}.
      </div>
      <div className="col s4">Total Votes: {props.totalVotes}</div>
    </div>
  );
};
