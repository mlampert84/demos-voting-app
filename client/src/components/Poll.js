import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import VotesChart from './VotesChart';
import PollSubmitAnswer from './PollSubmitAnswer';
import { showVotes, deletePoll } from '../actions';

class Poll extends Component {
  state = {
    pollId: this.props.match.params.pollId,
    username: '',
    dateCreated: '',
    question: '',
    answers: [],
    totalVotes: 0
  };

  componentDidMount() {
    this.getPollInfo(this.state.pollId);
  }

  componentWillUnmount() {
    this.props.showVotes(false);
  }

  getPollInfo = async pollId => {
    const res = await axios.get('/api/poll/' + pollId);
    this.setState({
      dateCreated: new Date(res.data.dateCreated).toLocaleDateString(),
      username: res.data.username,
      question: res.data.question,
      answers: res.data.answers,
      totalVotes: res.data.answers.reduce(
        (ans1, ans2) => ans1 + ans2.voteCount,
        0
      )
    });
  };
  renderPollOptions() {
    return (
      <div>
        <h4 className="center-align" style={{ marginBottom: '0px' }}>
          Options
        </h4>
        <div className="divider" />
        <ul>
          <li className="blockBtns btn ">
            <a
              className="white-text"
              target="_blank"
              rel="noopener noreferrer"
              href={
                'http://twitter.com/share?text=Vote in this poll on Demos: &url=' +
                window.location.href +
                '&hashtags=DemosVoting'
              }
            >
              Share &nbsp;&nbsp;&nbsp;<i className="fab fa-twitter" />
            </a>
          </li>
          {this.props.auth &&
          this.props.auth.username === this.state.username ? (
            <li
              className="blockBtns btn"
              onClick={() => deletePoll(this.state.pollId)}
            >
              Delete
            </li>
          ) : null}
          {this.props.showVoteOptions ? (
            <PollSubmitAnswer
              answers={this.state.answers}
              pollId={this.state.pollId}
              getPollInfo={this.getPollInfo}
              auth={this.props.auth}
              clearAnswers={() => {
                this.props.showVotes(false);
              }}
            />
          ) : (
            <li className="blockBtns btn" onClick={this.props.showVotes}>
              Vote
            </li>
          )}
        </ul>
      </div>
    );
  }
  render() {
    return (
      <div>
        <div className="row ">
          <div className="col s12">
            <h2 className="center-align" style={{ paddingBottom: '20px' }}>
              {this.state.question}
            </h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col s12 l8 "
            style={{ height: '400px', backgroundColor: '' }}
          >
            <div className="row">
              <div className="col s12" style={{ height: '50px' }} />
              <div className="col s7 offset-s2">
                Created by user <i>{this.state.username}</i> on{' '}
                {this.state.dateCreated}.
              </div>
              <div className="col s3">Total Votes: {this.state.totalVotes}</div>
            </div>
            <div className="col s12" style={{ height: '300px' }}>
              <VotesChart
                answers={this.state.answers}
                totalVotes={this.state.totalVotes}
              />
            </div>
          </div>

          <div className="col s12 l3 offset-l1" style={{ backgroundColor: '' }}>
            {this.renderPollOptions()}
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps({ auth, showVoteOptions }) {
  return { auth, showVoteOptions };
}

export default connect(mapStateToProps, { showVotes })(Poll);
