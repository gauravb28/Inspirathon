import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { register, login } from '../../actions/auth';
import './Login.css';

const Login = ({ isAuthenticated, login, register }) => {
  const [isSigningUp, setIsSigningUp] = useState(false);

  const [signUpInfo, setSignUpInfo] = useState({
    name: '',
    email: '',
    password: '',
  });

  const [signInInfo, setSignInInfo] = useState({
    email: '',
    password: '',
  });

  const handleSignIn = (e) => {
    setSignInInfo({ ...signInInfo, [e.target.name]: e.target.value });
  };

  const handleSignUp = (e) => {
    setSignUpInfo({ ...signUpInfo, [e.target.name]: e.target.value });
  };

  const submitHandle = (e) => {
    e.preventDefault();
    const a = signUpInfo.name,
      b = signUpInfo.email,
      c = signUpInfo.password,
      d = signInInfo.email,
      f = signInInfo.password;
    isSigningUp
      ? register({ name: a, email: b, password: c })
      : login({ email: d, password: f });
    setSignInInfo({
      email: '',
      password: '',
    });
    setSignUpInfo({
      name: '',
      email: '',
      password: '',
    });
  };

  useEffect(() => {
    document.querySelector('.img__btn').addEventListener('click', function () {
      document.querySelector('.cont').classList.toggle('s--signup');
      setIsSigningUp(!isSigningUp);
    });
  }, []);

  if (isAuthenticated) {
    return <Redirect to="/products" />;
  }

  return (
    <div className="container">
      <div className="cont">
        <div className="form sign-in">
          <h2>Welcome back,</h2>
          <label htmlFor="email">
            <span>Email</span>
            <input
              id="email"
              name="email"
              type="email"
              value={signInInfo.email}
              onChange={(e) => handleSignIn(e)}
            />
          </label>
          <label htmlFor="password">
            <span>Password</span>
            <input
              id="password"
              name="password"
              type="password"
              value={signInInfo.password}
              onChange={(e) => handleSignIn(e)}
            />
          </label>
          <button
            type="button"
            className="submit"
            onClick={(e) => submitHandle(e)}
          >
            Sign In
          </button>
        </div>
        <div className="sub-cont">
          <div className="img">
            <div className="img__text m--up">
              <h2>New here?</h2>
              <p>Sign up and discover great amount of new opportunities!</p>
            </div>
            <div className="img__text m--in">
              <h2>One of us?</h2>
              <p>
                If you already has an account, just sign in. We've missed you!
              </p>
            </div>
            <div className="img__btn">
              <span className="m--up">Sign Up</span>
              <span className="m--in">Sign In</span>
            </div>
          </div>
          <div className="form sign-up">
            <h2>Time to feel like home,</h2>
            <label htmlFor="name">
              <span>Name</span>
              <input
                id="name"
                name="name"
                type="text"
                value={signUpInfo.name}
                onChange={(e) => handleSignUp(e)}
              />
            </label>
            <label htmlFor="email">
              <span>Email</span>
              <input
                id="email"
                name="email"
                type="email"
                value={signUpInfo.email}
                onChange={(e) => handleSignUp(e)}
              />
            </label>
            <label htmlFor="password">
              <span>Password</span>
              <input
                id="password"
                name="password"
                type="password"
                value={signUpInfo.password}
                onChange={(e) => handleSignUp(e)}
              />
            </label>
            <button
              type="button"
              className="submit"
              onClick={(e) => submitHandle(e)}
            >
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

login.propTypes = {
  isAuthenticated: PropTypes.bool,
  login: PropTypes.func.isRequired,
  register: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, { login, register })(Login);
