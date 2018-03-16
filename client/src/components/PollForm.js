import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { withRouter } from 'react-router-dom';

const pollFields = [
  { label: 'Poll Question', name: 'question' },
  { label: 'Poll Responses', name: 'answers' }
];

const PollField = ({ input, label, meta: { error, touched } }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: '5px' }} />
      <div className="red-text" style={{ marginBottom: '20px' }}>
        {touched && error}
      </div>
    </div>
  );
};

const renderFields = () => {
  return pollFields.map(({ label, name }) => {
    return (
      <Field
        key={name}
        component={PollField}
        type="text"
        label={label}
        name={name}
      />
    );
  });
};

const PollForm = ({ history, handleSubmit, onPollSubmit }) => {
  return (
    <div>
      <h1>New Poll</h1>
      <p>
        Please enter your poll question and poll responses.<br />Use commas to
        separate the possible responses (for example: "Yes, No, Maybe").
      </p>
      <form onSubmit={handleSubmit(onPollSubmit)}>
        {renderFields()}
        <div
          onClick={history.goBack}
          className="pink lighten-1 btn-flat white-text"
        >
          Cancel
        </div>
        <button
          type="submit"
          className="blue darken-1 btn-flat right white-text"
        >
          Next
          <i className="material-icons right">done</i>
        </button>
      </form>
    </div>
  );
};

function validate(values) {
  const errors = {};

  pollFields.forEach(({ name }) => {
    if (!values[name]) {
      errors[name] = 'You must provide a value';
    }
  });
  // console.log(errors);
  return errors;
}

export default reduxForm({
  validate,
  form: 'pollForm',
  destroyOnUnmount: false
})(withRouter(PollForm));
