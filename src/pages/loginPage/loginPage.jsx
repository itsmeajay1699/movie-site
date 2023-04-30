import React from "react";
import "./loginPage.scss";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";
import {useDispatch } from "react-redux";
import { login } from "../../store/userSlice";
import axios from "axios";
const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios
        .post("http://localhost:8000/api/v1/auth/login", { email, password })
        .then((response) => {
          toast.success("Logged in Successfully");
          localStorage.setItem("auth", JSON.stringify(response.data));
          dispatch(login(response.data));
          navigate("/");
        })
        .catch((error) => {
          toast.error(error.response.data.error);
        });
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <div className="login-wrapper">
      <Toaster />
      <div className="container">
        <h2 className="login-title">Log in</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email </label>
            <input
              id="email"
              value={email}
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              placeholder="me@example.com"
              name="email"
              required
            />
          </div>
          <div>
            <label htmlFor="password">Password </label>
            <input
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              placeholder="password"
              name="password"
              required
            />
          </div>
          <button className="btn btn--form" type="submit" value="Log in">
            Log in
          </button>
          <h2 style={{ color: "white", textAlign: "center" }}>
            Don't have an account?{" "}
            <Link className="link" to="/register">
              Sign up
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
