import React from 'react';

const PollAnswers = props => {
  return props.answers.map((answer, index) => {
    return (
      <div key={answer._id} style={{ height: '4rem' }}>
        <div className="answerOptions">
          <input
            className="with-gap noHandPointer"
            type="radio"
            id={answer._id}
            onChange={props.handleAnswerSelect}
            checked={props.selectedAnswer === answer._id}
          />
          <label htmlFor={answer._id} className={props.pointer}>
            {answer.answer}
          </label>
        </div>
      </div>
    );
  });
};

export default PollAnswers;
