import React, { Component } from 'react';
import axios from 'axios';
import VotesChart from './VotesChart';
import PollAnswers from './PollAnswers';
import PollTitle from './PollTitle';

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

  render() {
    return (
      <div>
        <div className="row ">
          <PollTitle
            totalVotes={this.state.totalVotes}
            question={this.state.question}
            username={this.state.username}
            dateCreated={this.state.dateCreated}
          />
        </div>
        <div className="row">
          <div className="col s12 l8 push-l4" style={{ height: '300px' }}>
            <VotesChart
              answers={this.state.answers}
              totalVotes={this.state.totalVotes}
            />
          </div>

          <div className="col s12 l4 pull-l8">
            <PollAnswers
              answers={this.state.answers}
              pollId={this.state.pollId}
              getPollInfo={this.getPollInfo}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Poll;
