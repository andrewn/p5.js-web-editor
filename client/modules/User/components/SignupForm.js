import React, { PropTypes } from 'react';

function SignupForm(props) {
  const { fields: { username, email, password, confirmPassword }, handleSubmit } = props;
  console.log(props.fields);
  return (
    <form className="signup-form" onSubmit={handleSubmit(props.signUpUser.bind(this))}>
      <p className="signup-form__field">
        <input
          className="signup-form__username-input"
          aria-label="username"
          type="text"
          placeholder="Username"
          {...username}
        />
        {username.touched && username.error && <span className="form-error">{username.error}</span>}
      </p>
      <p className="signup-form__field">
        <input
          className="signup-form__email-input"
          aria-label="email"
          type="text"
          placeholder="Email"
          {...email}
        />
        {email.touched && email.error && <span className="form-error">{email.error}</span>}
      </p>
      <p className="signup-form__field">
        <input
          className="signup-form__password-input"
          aria-label="password"
          type="password"
          placeholder="Password"
          {...password}
        />
        {password.touched && password.error && <span className="form-error">{password.error}</span>}
      </p>
      <p className="signup-form__field">
        <input
          className="signup-form__confirm-password-input"
          type="password"
          placeholder="Confirm Password"
          aria-label="confirm password"
          {...confirmPassword}
        />
        {confirmPassword.touched && confirmPassword.error && <span className="form-error">{confirmPassword.error}</span>}
      </p>
      <input type="submit" value="Sign Up" aria-label="sign up" />
    </form>
  );
}

SignupForm.propTypes = {
  fields: PropTypes.shape({
    username: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    confirmPassword: PropTypes.string.isRequired
  }).isRequired,
  handleSubmit: PropTypes.func.isRequired,
  signUpUser: PropTypes.func.isRequired
};

export default SignupForm;
