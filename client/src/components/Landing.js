import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchPolls } from '../actions';

class Landing extends Component {
  componentDidMount() {
    this.props.fetchPolls();
  }

  renderPolls() {
    return this.props.polls.map(poll => {
      return (
        <div className="card blue-grey darken-1" key={poll._id}>
          <div className="card-content white-text">
            <div className="row">
              <div className="col s8 card-title">{poll.question}</div>
              <div className="col s4">
                <Link to={'/poll/' + poll._id} className="right btn">
                  Vote
                </Link>
              </div>
            </div>
            <div className="row">
              <div className="col s8">
                Created by user <i>{poll.username}</i> on{' '}
                {new Date(poll.dateCreated).toLocaleDateString()}.
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
    // console.log(this.props.polls);
    return (
      <div>
        <h2>Recent Polls</h2>
        {this.renderPolls()}
      </div>
    );
  }
}

function mapStateToProps({ polls }) {
  return { polls };
}

export default connect(mapStateToProps, { fetchPolls })(Landing);
