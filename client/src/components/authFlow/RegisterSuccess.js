import React from 'react';

const LoginSuccess = ({ username, login }) => {
  return (
    <div>
      <div className="row">
        <div className="col s10 offset-s1">
          <h4>Success!</h4>
        </div>
      </div>
      <div className="row">
        <div className="col s10 offset-s1">
          <p>
            You are now registered as user <b>{username}</b>.
          </p>
        </div>
      </div>

      <div className="row">
        <div className="col s10 offset-s1">
          <a className="btn right" onClick={login}>
            Continue to Site
          </a>
        </div>
      </div>
    </div>
  );
};
export default LoginSuccess;
