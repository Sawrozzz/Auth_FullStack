import { Button } from "bootstrap";
import React, { useState } from "react";
import { json, Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/register", { name, email, password })
      .then((result) => {
        console.log(result);
        alert("Registration successfull");
        navigate("/login");
      })
      .catch((err) => console.log(err));
    alert("Registration Failed");
  };

  return (
    <>
      <div className="container">
      <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="d-flex flex-column ">
          <h2 className="text-center mb-4">Register</h2>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
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
                onChange={(e) => {
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
                onChange={(e) => {
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
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
              />
            </div>
            <button type="submit" className="btn btn-success w-100 rounded-0">
              Register
            </button>
          </form>
          <p className="text-center mb-4">Already have an account?</p>
          <Link
            to="/login"
            className="btn btn-default border w-100 bd-light rounded-0 text-decoration-none"
          >
            Login
            </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUpForm;
