import React from 'react';
import { bindActionCreators } from 'redux';
import * as UserActions from '../actions';
import { reduxForm } from 'redux-form';
import SignupForm from '../components/SignupForm';

function SignupView(props) {
  return (
    <div className="signup">
      <h1>Sign Up</h1>
      <SignupForm {...props} />
    </div>
  );
}

function mapStateToProps(state) {
  return {
    user: state.user
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(UserActions, dispatch);
}

function validate(formProps) {
  const errors = {};

  if (!formProps.username) {
    errors.username = 'Please enter a username.';
  } else if (!formProps.username.match(/^.{1,20}$/)) {
    errors.username = 'Username must be less than 20 characters.';
  } else if (!formProps.username.match(/^[a-zA-Z0-9._-]{1,20}$/)) {
    errors.username = 'Username must only consist of numbers, letters, periods, dashes, and underscores.';
  }

  if (!formProps.email) {
    errors.email = 'Please enter an email.';
  } else if (!formProps.email.match(/^[-a-z0-9~!$%^&*_=+}{'?]+(\.[-a-z0-9~!$%^&*_=+}{'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i)) {
    errors.email = 'Please enter a valid email address.';
  }

  if (!formProps.password) {
    errors.password = 'Please enter a password';
  }
  if (!formProps.confirmPassword) {
    errors.confirmPassword = 'Please enter a password confirmation';
  }

  if (formProps.password !== formProps.confirmPassword) {
    errors.password = 'Passwords must match';
  }

  return errors;
}

export default reduxForm({
  form: 'signup',
  fields: ['username', 'email', 'password', 'confirmPassword'],
  validate
}, mapStateToProps, mapDispatchToProps)(SignupView);
