import axios from "axios";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3001/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data == "Success") {
          navigate("/home");
          alert("Loggin Successfull");
        }
      })
      .catch((err) => console.log(err));
  };
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="d-flex flex-column ">
              <h2 className="text-center mb-4">Login</h2>
              <form
                onSubmit={handleSubmit}
                className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
              >
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
                <button
                  type="submit"
                  className="btn btn-primary  w-100 rounded-0"
                >
                  Login
                </button>
              </form>
              <Link
                to="/register"
                className="btn btn-primary w-100 text-center text-decoration-none"
              >
                SignUp
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Login;
