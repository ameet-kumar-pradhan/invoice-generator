import React, { useState } from 'react';
import { GoogleLogin } from 'react-google-login';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';

import { googleOAuth2, logIn } from '../../redux/ActionCreators';

import style from './login.scss';
import Dashboard from '../dashboard';

const clientId =
  '464243512631-adibo1r63uaiccfnkh7ksdi9o468e1g0.apps.googleusercontent.com';

const Login = props => {
  const {
    googleOAuth2,
    logIn,
    LoginReducer: { accessToken },
  } = props;
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const handleLogIn = () => {
    logIn(email);
    setEmail('');
    setPassword('');
  };
  if (!accessToken) {
    return (
      <div className={style.main}>
        <h3>Invoice generator</h3>
        <div className={style.auth}>
          <div className="header">
            <h2>Log Into My Account</h2>
          </div>
          <div className={style.googleAuth}>
            <GoogleLogin
              clientId={clientId}
              buttonText="Sign In with Google"
              onSuccess={googleOAuth2}
              onFailure={googleOAuth2}
              cookiePolicy="single_host_origin"
              className={style.googleAuthBtn}
            />
          </div>
          <div className={style.orLine}>
            <span>or</span>
          </div>
          <form action="submit" method="get">
            <div className={style.field}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email address"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
              />
            </div>
            <div className={style.field}>
              <input
                type="password"
                name="password"
                id="password"
                placeholder="Password"
                required
                value={password}
                onChange={e => setPassword(e.target.value)}
              />
            </div>
            <div className="actions">
              <div className={style.submit}>
                {email && password ? (
                  <button
                    type="submit"
                    className={style.submitBtn}
                    onClick={handleLogIn}
                  >
                    <span>Log In</span>
                  </button>
                ) : (
                  <button
                    type="submit"
                    className={style.submitBtn}
                    onClick={handleLogIn}
                    disabled
                  >
                    <span>Log In</span>
                  </button>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
  return <Dashboard />;
};

function mapStateToProps(state) {
  return {
    ...state,
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ googleOAuth2, logIn }, dispatch);
}

Login.propTypes = {
  googleOAuth2: PropTypes.func,
  LoginReducer: PropTypes.object,
  logIn: PropTypes.func,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
