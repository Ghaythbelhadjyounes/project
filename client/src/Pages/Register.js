import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerVisitor } from "../JS/Actions/visitor";
import { useNavigate } from "react-router-dom";
import "./login.css";

const Register = () => {
  const [newVisitor, setNewVisitor] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleChange = (e) => {
    setNewVisitor({ ...newVisitor, [e.target.name]: e.target.value });
  };

  const handleVisitor = (e) => {
    e.preventDefault();
    dispatch(registerVisitor(newVisitor));
    navigate("/login");
  };

  return (
    <div style={{ margin: "20%", marginTop: "5%", width: "60%" }}>
      <form action="#!" id="main">
        <h2>Login to your account</h2>
        <div className="input-parent">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" name="name" onChange={handleChange} />
        </div>
        <div className="input-parent">
          <label htmlFor="email">Email</label>
          <input type="text" id="email" name="email" onChange={handleChange} />
        </div>
        <div className="input-parent">
          <label htmlFor="phone">Phone</label>
          <input type="text" id="phone" name="phone" onChange={handleChange} />
        </div>
        <div className="input-parent">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <button
          className="btn"
          type="submit"
          onClick={handleVisitor}
          style={{ backgroundColor: "white" }}
        >
          Register
        </button>
      </form>
    </div>
  );
};

export default Register;
