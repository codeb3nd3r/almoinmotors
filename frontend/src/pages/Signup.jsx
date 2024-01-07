import React, { useState } from "react";
import axios from "axios";

const Signup = ({ callback2 }) => {
  const [form, setForm] = useState({
    fname: "",
    lname: "",
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.fname || !form.lname || !form.email || !form.password) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    try {
      const response = await axios.post("http://localhost:5000/almoin/login", {
        ...form,
      });

      // Check the response status code
      if (response.status === 201) {
        alert("Account created successfully");
        setForm({ fname: "", lname: "", email: "", password: "" });
        callback2(true); // If you need to call the callback after successful creation
      }
    } catch (error) {
      if (error.response && error.response.status === 409) {
        alert("Email already in use");
      } else {
        console.log(error);
      }
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  return (
    <div className="signup-container">
      <form className="signup-form" onSubmit={handleSubmit}>
        <h1>Sign Up</h1>
        <input
          id="fname"
          name="fname"
          type="text"
          value={form.fname}
          onChange={handleChange}
          placeholder="First Name"
        />
        <input
          id="lname"
          name="lname"
          type="text"
          value={form.lname}
          onChange={handleChange}
          placeholder="Last Name"
        />
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
        />
        <input
          id="password"
          name="password"
          type="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
        />
        <button type="submit">Create Account</button>
      </form>
    </div>
  );
};

export default Signup;
