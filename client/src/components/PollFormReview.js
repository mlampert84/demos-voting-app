import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import PollAnswers from './PollAnswers';
import axios from 'axios';

const PollFormReview = ({ history, onCancel, formValues }) => {
  const parsedAnswers = formValues.answers
    .split(',')
    .map(answer => answer.trim())
    .map((answer, index) => ({ _id: index, answer }));

  // console.log(parsedAnswers);
  // console.log({
  //   question: formValues.question,
  //   answers: parsedAnswers.map(answer => {
  //     return {
  //       answer: answer.answer
  //     };
  //   })
  // });
  const submitPoll = async () => {
    await axios.post('/api/poll/new', {
      question: formValues.question,
      answers: parsedAnswers.map(answer => {
        return {
          answer: answer.answer
        };
      })
    });

    history.push('/my_polls');
  };

  return (
    <div>
      <h4 className="center-align">Please confirm your entries</h4>
      <span>Question:</span>
      <h5 style={{ marginBottom: '50px', marginTop: '30px' }}>
        {formValues.question}
      </h5>
      <span>Answers:</span>

      <PollAnswers
        answers={parsedAnswers}
        selectedAnswer={null}
        checked={false}
        pointer={'noHandPointer'}
      />
      <div className="row" />
      <div className="row" />
      <div className="row" />

      <button
        className="
    pink lighten-1 white-text btn-flat"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        onClick={submitPoll}
        className="blue darken-1 white-text btn-flat right"
      >
        Create Poll<i className="material-icons right">create</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.pollForm.values
  };
}
export default connect(mapStateToProps)(withRouter(PollFormReview));
