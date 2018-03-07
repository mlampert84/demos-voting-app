import React from 'react';

const AuthFailure = ({ goBack, loginFailure }) => {
  return (
    <div>
      <div className="row" />
      <div className="row">
        <div className="col s10 offset-s1">
          <p>
            {loginFailure
              ? 'Username or Password are Invalid.'
              : 'Username is taken.'}
          </p>
          <p>
            {loginFailure
              ? 'Please try again.'
              : 'Please chose a different username.'}
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col s10 offset-s1">
          <a className="btn left" onClick={goBack}>
            Okay
          </a>
        </div>
      </div>
    </div>
  );
};
export default AuthFailure;
