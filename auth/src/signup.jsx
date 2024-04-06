import { Button } from "bootstrap";
import React, { useState } from "react";
import { json, Link } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("clicked");
    // await fetch("http://localhost:3001/register", {
    //   method: "POST",
    //   body: JSON.stringify({ name, email, password }),
    // })
    axios.post('http://localhost:3001/register',{name, email, password})
      .then(result => console.log(result))
      .catch(err => console.log(err));
  };

  return (
    <div className="d-flex flex-column  w-25">
      <h2>Register</h2>
      <form
        onSubmit={handleSubmit}
        className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3"
      >
        <div className="mb-4">
          <label htmlFor="name">
            <strong>Name</strong>
          </label>
          <input
            className="form-control rounded-0"
            type="text"
            placeholder="Enter your name"
            name="name"
            autoComplete="off"
            onClick={(e) => {
              setName(e.target.value);
            }}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            className="form-control rounded-0"
            type="email"
            placeholder="Enter your email"
            name="email"
            autoComplete="off"
            onClick={(e) => {
              setEmail(e.target.value);
            }}
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            className="form-control rounded-0"
            type="password"
            placeholder="Enter your password"
            name="password"
            autoComplete="off"
            onClick={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">
          Register
        </button>
      </form>
      <p>Already have an account</p>
      <Link
        to="/login"
        className="btn btn-default border w-100 bd-light rounded-0 text-decoration-none"
      >
        Login
      </Link>
    </div>
  );
};

export default SignUpForm;
