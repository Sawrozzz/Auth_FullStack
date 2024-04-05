import { Button } from "bootstrap";
import React, { useState } from "react";

const SignUpForm = () => {
  return (
    <div className="d-flex flex-column  w-25">
      <h2>Register</h2>
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/3">
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
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email">
            <strong>Email</strong>
          </label>
          <input
            className="form-control rounded-0"
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            autoComplete="off"
          />
        </div>
        <div className="mb-6">
          <label htmlFor="password">
            <strong>Password</strong>
          </label>
          <input
            className="form-control rounded-0"
            id="password"
            type="password"
            placeholder="Enter your password"
            name="password"
            autoComplete="off"
          />
        </div>
        <button type="submit" className="btn btn-success w-100 rounded-0">
          Register
        </button>
        <p>Already have an account</p>
        <button
          type="submit"
          className="btn btn-default border w-100 bd-light rounded-0 text-decoration-none"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default SignUpForm;
