import React from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import toast, { Toaster } from "react-hot-toast";
import { login } from "../../store/userSlice";
import axios from "axios";
const RegisterPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      axios
        .post("http://localhost:8000/api/v1/auth/register", {
          name,
          email,
          password,
        })
        .then((response) => {
          toast.success("Logged in Successfully");
          localStorage.setItem("auth", JSON.stringify(response.data));
          dispatch(login(response.data));
          navigate("/home");
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
        <h2 className="login-title">Sign up</h2>
        <form className="login-form" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name">Name </label>
            <input
              id="name"
              value={name}
              type="text"
              onChange={(e) => setName(e.target.value)}
              placeholder="Ajay"
              name="email"
              required
            />
          </div>
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
            Sign up
          </button>
          <h2 style={{ color: "white", textAlign: "center" }}>
            Already have an account?{" "}
            <Link className="link" to="/login">
              Sign up
            </Link>
          </h2>
        </form>
      </div>
    </div>
  );
};

export default RegisterPage;
