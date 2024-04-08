import React from "react";
import { Link } from "react-router-dom";

export const Home = () => {
  return (
    <div className="container">
      <h1 className="text-center mt-5">Congratulations!!</h1>
      <h2 className="text-center mb-5">You have successfully landed on my home page</h2>
      <div className="d-flex justify-content-around">
        <Link to="/register" className="btn btn-primary">Signup Here</Link>
        <Link to="/login" className="btn btn-primary">Login Here</Link>
      </div>
    </div>
  );
};
