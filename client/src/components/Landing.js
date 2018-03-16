import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPolls, showVotes, deletePoll } from '../actions';

class Landing extends Component {
  state = { personalView: this.props.match.path === '/my_polls' };

  componentDidMount() {
    this.props.fetchPolls(this.state.personalView);
  }

  renderDelete(pollId) {
    if (this.state.personalView)
      return (
        <div
          className="float right btn"
          style={{ marginLeft: '15px' }}
          onClick={() => deletePoll(pollId)}
        >
          Delete
        </div>
      );
  }

  renderPolls() {
    if (this.state.personalView && this.props.polls.length === 0)
      return (
        <div className="center-align">
          <h5 style={{ margin: '60px 0px 30px 0px' }}>
            You have not created any pools.
          </h5>
          <h6>
            Click on 'Create New Poll' in the overhead menu to get started.
          </h6>
        </div>
      );
    return this.props.polls.reverse().map(poll => {
      return (
        <div className="card blue-grey darken-1" key={poll._id}>
          <div className="card-content white-text">
            <div className="row">
              <div className="col s6 card-title">{poll.question}</div>
              <div className="col s6">
                <Link
                  to={'/poll/' + poll._id}
                  className="float right btn"
                  style={{
                    marginBottom: '15px',
                    marginLeft: '15px'
                  }}
                >
                  View
                </Link>
                <Link
                  to={'/poll/' + poll._id}
                  onClick={() => this.props.showVotes(true)}
                  className="right btn"
                  style={{ marginLeft: '15px', marginBottom: '15px' }}
                >
                  Vote
                </Link>
                {this.renderDelete(poll._id)}
              </div>
            </div>
            <div className="row">
              <div className="col s8">
                {this.state.personalView
                  ? 'You created this poll '
                  : "Created by user '" + poll.username + "'"}{' '}
                on {new Date(poll.dateCreated).toLocaleDateString()}.
              </div>
              <div className="col s4">
                <div className="right">
                  Total Votes:{' '}
                  {poll.answers.reduce(
                    (ans1, ans2) => ans1 + ans2.voteCount,
                    0
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div>
        <h2 className="center-align">
          {this.state.personalView ? 'My ' : ''}Recent Polls
        </h2>
        {this.renderPolls()}
      </div>
    );
  }
}

function mapStateToProps({ polls }) {
  return { polls };
}

export default connect(mapStateToProps, { fetchPolls, showVotes })(Landing);
