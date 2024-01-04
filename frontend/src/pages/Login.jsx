import React, { useState } from 'react';
import '../styles/signuppage.css'; // Importing the CSS file
import axios from 'axios';

const Login = ({ onLoginData }) => {
  const [form, setForm] = useState({ email: '', password: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (!form.email || !form.password) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    // If all fields are filled, proceed with the submission
    // console.log(form);
    try {
      // Replace the URL with your actual endpoint
      await axios.post("http://localhost:5000/almoin/login", {
        ...form
      });
      onLoginData(form);
      setForm({ email: '', password: '' }); // Clear the form
      alert("Signup successful!");
    } catch (error) {
      console.error(error);
      alert("An error occurred during signup.");
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <form onSubmit={handleSubmit} className="signup-form">
        <h1>LOGIN</h1>
        <input 
          type="email" 
          name="email"
          placeholder="Email" 
          value={form.email}
          onChange={handleChange}
        />
        <input 
          type="password" 
          name="password"
          placeholder="Password" 
          value={form.password}
          onChange={handleChange}
        />
        <button type="submit">login</button>
      </form>
    </div>
  );
};

export default Login;
