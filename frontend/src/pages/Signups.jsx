import React from 'react';
import '../styles/signuppage.css'; // Importing the CSS file

const SignupPage = () => {
  return (
    <div className="signup-container">
      <form className="signup-form">
        <h1>Sign Up</h1>
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default SignupPage;
